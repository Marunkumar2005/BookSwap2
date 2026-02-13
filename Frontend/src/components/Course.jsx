import React from 'react'
import Cards from './Cards'
import list from "../../public/list";
function Course() {
  return (
    <>
    <div className="bg-gradient-to-b from-white via-violet-100 to-pink-50 py-12">
  
  <div className="text-center mb-10">
    <h1 className="text-2xl md:text-4xl font-semibold">
      We're providing best Paid books from this cool website  
      <span className="text-rose-600"> Feel Happy :)</span>
    </h1>
  </div>

  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {list.filter((item)=>item.price>0)
      .map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </div>
  </div>

</div>

    </>
  )
}

export default Course
