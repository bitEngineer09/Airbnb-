import React from 'react'


const OtherLogin = ({ loginOption, logo }) => {
    return (
        <div
            className="
                googleLogin
                h-[5.8rem]
                border
                rounded-[1.2rem]
                mt-[2rem]
                flex
                items-center
                gap-[15rem]
                justify-between
                w-[100%]
                hover:bg-zinc-100
            ">
            <div className="OtherLoginLogo w-[20%] h-[100%] flex items-center pl-[2.5rem] ">
                <img src={logo} alt="" className='w-[2rem]' />
            </div>
            <div className="loginHeading w-[80%] h-[100%] flex items-center">
                <p className='text-[1.6rem] ' >Continue with {loginOption}</p>
            </div>
        </div>
    )
}

export default OtherLogin;