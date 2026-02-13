import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box pl-8">

                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className='font-bold text-2xl '>Login</h3>
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
                        <button className='bg-fuchsia-800 text-white rounded-md px-3 py-1 hover:bg-fuchsia-400 duration-300 cursor-pointer'>Login</button>
                        <p>Not Registered? <Link to="/signup" className='underline text-blue-600 cursor-pointer'>SignUp</Link>  </p>
                       
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login
