import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { otherLoginData } from '../../assets/otherLoginData';
import OtherLogin from '../../components/AuthComponents/OtherLogin';

const Signup = ({ setShowSignup }) => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (

        // MAIN LOGIN DIV
        <div className='w-full h-screen flex items-center justify-center'>

            {/* // MAIN LOGIN CONTAINER */}
            <div
                className="
                    bg-white
                    login-container
                    w-[75rem]
                    h-[75rem]
                    rounded-[6rem]
                    overflow-auto
                ">

                {/* // CROSS CONTAINER */}
                <div
                    onClick={() => setShowSignup(false)}
                    className='
                        flex
                        items-center
                        justify-center
                        text-[2rem]
                        font-semibold
                        relative
                        h-[8rem]
                        rounded-t-[6rem]
                        border-b-[1px]
                        border-zinc-300
                '> <RxCross2 className='absolute text-[2.6rem] top-[3rem] left-[3rem]' />
                    <p>Log in or sign up</p>
                </div>

                {/* // LOGIN CONTENT */}
                <div className="loginContent p-[3rem_2.9rem]">
                    <h1 className="loginHeading text-[2.7rem] mb-[2.8rem] font-semibold">
                        Welcome to Airbnb
                    </h1>

                    {/* // MAIN LOGIN FORM */}
                    <form action="" className="loginForm flex flex-col text-[1.5rem]">
                        <div className='name flex flex-col'>
                            <label htmlFor="registerName">Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="registerName"
                                className='
                                    border
                                    border-zinc-400
                                    outline-none
                                    h-[6rem]
                                    rounded-[1.2rem]
                                    mb-[2rem]
                                    p-[1rem]
                                    text-[1.7rem]
                                ' />
                        </div>
                        <div className='email flex flex-col'>
                            <label htmlFor="loginEmail">Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="loginEmail"
                                className='
                                    border
                                    border-zinc-400
                                    outline-none
                                    h-[6rem]
                                    rounded-[1.2rem]
                                    mb-[2rem]
                                    p-[1rem]
                                    text-[1.7rem]
                                ' />
                        </div>

                        <div className="password relative flex flex-col">
                            <label htmlFor="loginPassword">Password
                            </label>
                            <input
                                type={showPassword ? "password" : "text"}
                                name="password"
                                id="loginPassword"
                                className='
                                    border
                                    border-zinc-400
                                    outline-none
                                    h-[6rem]
                                    rounded-[1.2rem]
                                    p-[1rem]
                                    text-[1.7rem]
                                ' />

                            {/* SHOW PASSWORD FUNCTIONILTY */}
                            {
                                !showPassword
                                    ? <FaRegEye
                                        onClick={() => setShowPassword(!showPassword)}
                                        className='absolute right-[1rem] top-[4.5rem] text-[1.7rem]' />
                                    : <FaRegEyeSlash
                                        onClick={() => setShowPassword(!showPassword)}
                                        className='absolute right-[1rem] top-[4.5rem] text-[1.7rem]' />
                            }
                        </div>

                        {/* PRIVACY POLICY */}
                        <h2
                            className='
                                leading-none
                                mt-[1rem]
                                text-[1.3rem]
                            '>  We’ll call or text you to confirm your number. Standard message and data rates apply. <br />
                            <span className='underline font-semibold'>Privacy Policy
                            </span>
                        </h2>


                        {/* CONTINUE BUTTON */}
                        <button
                            type="submit"
                            className='
                                h-[5.8rem]
                                rounded-[1.2rem]
                                cursor-pointer 
                                bg-rose-500
                                text-[1.8rem]
                                mt-[2rem]
                                text-white
                                font-semibold
                            '>Continue
                        </button>
                    </form>


                    {/* SIGN UP OPTION */}
                    <p className='text-[1.3rem] mt-[1rem]'>Already have an account ?{" "}
                        <span
                            onClick={() => navigate('/login')}
                            className='
                                font-semibold 
                                text-rose-500
                                underline 
                                cursor-pointer
                            '>Log in
                        </span>
                    </p>

                    {/* OTHER LOGIN OPTIONS */}
                    <div className='flex items-center gap-[1rem] text-[1.3rem] mt-[0.5rem]'>
                        <hr className='w-[50%] border-zinc-300' /> or <hr className='w-[50%] border-zinc-300' />
                    </div>

                    {
                        otherLoginData.map((item) => {
                            const { id, loginOption, logo } = item;
                            return (
                                <OtherLogin key={id} loginOption={loginOption} logo={logo} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Signup;