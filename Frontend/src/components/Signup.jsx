import React from 'react'
import { Link } from "react-router-dom";
import Login from '../Login';

function Signup() {
  return (
 <>
         <div id="my_modal_1" className="flex h-screen items-center justify-center">
                <div className="border-[2px] border-gray-300 rounded-lg p-8 w-96">

                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className='font-bold text-2xl '>SignUp</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Name</span>
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
                        <span>Password</span>
                        <br />
                        <input type="password"
                            placeholder='Enter your passoword' className='w-80 px-3 py-1 mt-2 border rounded-md outline-none' />

                    </div>
                    {/* button */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-fuchsia-800 text-white rounded-md px-3 py-1 hover:bg-fuchsia-400 duration-300 cursor-pointer'>Signup</button>
                        <p>Already Registered? {" "}<button  onClick={()=>document.getElementById('my_modal_1').showModal()} className='underline text-blue-600 cursor-pointer'>Back</button>  {" "}</p>
                        
                       
                    </div>
                </div>
            </div>
 </>
  )
}

export default Signup
