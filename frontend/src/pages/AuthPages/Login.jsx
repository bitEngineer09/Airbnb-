import React, { useContext, useEffect, useState } from 'react';
import { otherLoginData } from '../../assets/otherLoginData'
import { RxCross2 } from "react-icons/rx";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import  OtherLogin from '../../components/AuthComponents/OtherLogin';
import { authDataContext } from '../../context/authContext';

const Login = ({ setShowLogin }) => {


    // USE STATES
    const [showPassword, setShowPassword] = useState(false);
    const [enableSignup, setEnableSignup] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // CONTEXT DATA
    const {
        loginUser,
        signupUser,
        setCurrentUser,
        currentUser,
    } = useContext(authDataContext);

    // NAVIGATE 
    const navigate = useNavigate();

    // FORM SUBMIT HANDLER
    const handleFormSubmit = async (e) => {

        e.preventDefault();
        if (!enableSignup) {
            const response = await loginUser({ email, password });
            if (response?.success) {
                setCurrentUser(response.user);
                setShowLogin(false);
                navigate('/');
                console.log(response);

            } else {
                alert(response.message || "Login Failed");
            }

        } else {
            const response = await signupUser({ name, email, password });

            if (response?.success) {
                setCurrentUser(response.user);
                setShowLogin(false);
                navigate('/');
                console.log(response);

            } else {
                alert(response.message || "Registration Failed")
            }
        }
    }

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);


    return (

        // MAIN LOGIN DIV
        <div className='w-full h-screen flex items-center justify-center'>

            {/* // MAIN LOGIN CONTAINER */}
            <div
                className="
                    login-container
                    w-[75rem] h-[75rem]
                    rounded-[6rem]
                    overflow-y-auto
                    bg-white
                ">

                {/* // CROSS CONTAINER */}
                <div
                    onClick={() => setShowLogin(false)}
                    className='
                        flex items-center justify-center
                        text-[2rem] font-semibold
                        relative
                        h-[8rem]
                        rounded-t-[6rem] border-b-[1px] border-zinc-300
                '> <RxCross2 className='absolute text-[2.6rem] top-[3rem] left-[3rem] cursor-pointer' />
                    <p>Log in or sign up</p>
                </div>

                {/* // LOGIN CONTENT */}
                <div className="loginContent p-[3rem_2.9rem] overflow-auto">
                    <h1 className="loginHeading text-[2.7rem] mb-[2.8rem] font-semibold">
                        Welcome to Airbnb
                    </h1>

                    {/* // MAIN LOGIN FORM */}
                    <form action="" onSubmit={handleFormSubmit} className="loginForm flex flex-col text-[1.5rem]">

                        {/* NAME INPUT FOR SIGN UP PAGE */}
                        {
                            enableSignup ? <div className='name flex flex-col'>
                                <label htmlFor="registerName">Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="registerName"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='
                                        mb-[2rem] p-[1rem]
                                        h-[6rem]
                                        text-[1.7rem]
                                        outline-none
                                        border border-zinc-400 rounded-[1.2rem]
                                ' />
                            </div> : null
                        }
                        <div className='email flex flex-col'>
                            <label htmlFor="loginEmail">Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="loginEmail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='
                                    mb-[2rem] p-[1rem]
                                    h-[6rem]
                                    text-[1.7rem]
                                    outline-none
                                    border border-zinc-400 rounded-[1.2rem]
                                ' />
                        </div>

                        <div className="password relative flex flex-col">
                            <label htmlFor="loginPassword">Password
                            </label>
                            <input
                                type={!showPassword ? "password" : "text"}
                                name="password"
                                id="loginPassword"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='
                                    mb-[2rem] p-[1rem]
                                    h-[6rem]
                                    text-[1.7rem]
                                    outline-none
                                    border border-zinc-400 rounded-[1.2rem]
                                ' />

                            {/* SHOW PASSWORD FUNCTIONILTY */}
                            {
                                !showPassword

                                    ? <FaRegEyeSlash
                                        onClick={() => setShowPassword(!showPassword)}
                                        className='absolute right-[1rem] top-[4.5rem] text-[1.7rem]' />
                                    : <FaRegEye
                                        onClick={() => setShowPassword(!showPassword)}
                                        className='absolute right-[1rem] top-[4.5rem] text-[1.7rem]' />
                            }
                        </div>


                        {/* CONTINUE / REGISTER BUTTON  */}
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
                            '>{enableSignup ? "Register" : "continue"}
                        </button>
                    </form>


                    {/* SIGN UP / SING IN OPTION */}
                    <p className='text-[1.3rem] mt-[1rem]'>{enableSignup ? "already have an account ?" : "Create new account ?"}{" "}
                        <span
                            onClick={() => setEnableSignup(!enableSignup)}
                            className='
                                font-semibold
                                text-rose-500
                                underline
                                cursor-pointer
                            '>{enableSignup ? "Log in" : "Sign up"}
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

export default Login;