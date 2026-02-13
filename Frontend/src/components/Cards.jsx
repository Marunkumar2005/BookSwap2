import React from 'react'

function Cards({ item }) {


    return (
        <>


            <div className='mt-4 mb-4 p-3 flex justify-center'>
                <div className="  card bg-base-100 w-72 h-101 cursor-pointer shadow-xl hover:shadow-2xl">


                    <figure>
                        <img className='w-72 h-80'
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="flex card-body   justify-between">
                        <h2 className="card-title ">
                            {item.name}
                            <div className='cursor-pointer badge  text-stone-900 bg-green-100 duration-200 pr-1 pl-1'>{item.category}</div>

                        </h2>


                        <div className="card-actions justify-between pb-0">

                            <div className=' hover:bg-blue-200 badge badge-outline shadow cursor-pointer  '>${item.price}</div>
                            <div className='cursor-pointer badge badge-outline text-stone-900 bg-purple-400 duration-200  '>Buy</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
