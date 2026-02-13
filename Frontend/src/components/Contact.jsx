import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <div>
            <div id="my_modal_4" className=" flex h-screen items-center justify-center">
                <div className="border-[2px] border-gray-500 rounded-lg p-10  bg-white">

                    <form method="">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className='font-bold text-2xl text-violet-600 '>Get in Touch</h3>

                    <div className='mt-4 space-y-2'>
                        <span>Full Name</span>
                        <br />
                        <input type="text"
                            placeholder='Enter your FullName' className='w-80 px-3 py-1 mt-2 border rounded-md outline-none' />

                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type="email"
                            placeholder='Enter your e-mail' className='w-80 px-3 py-1 mt-2 border rounded-md outline-none' />

                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Message</span>
                        <br />
                        <textarea placeholder='Enter your message' className='w-80 h-30 px-3 py-1 mt-2 border rounded-md outline-none' />

                    </div>
                    {/* button */}
                    <div className='flex justify-around mt-4'>

                        <button className=' text-white-600 cursor-pointer rounded-md bg-green-600 pl-4 pr-4 pt-2 pb-2'> Submit</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
