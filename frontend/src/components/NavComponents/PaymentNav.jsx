import React, { useContext, useState } from 'react';
import airbnbLogo from '../../assets/navAssets/airbnb.png';
import { IoSearch } from "react-icons/io5";
import { FiGlobe } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";


const PaymentNav = () => {

    return (

        <div className='bg-[#FCFCFC] border-b-[1px] border-zinc-200 py-[1rem]'>
            {/* MAIN NAV CONTAINER */}
            <div
                className='
                  w-full h-[9rem]
                  flex items-center justify-between
                  px-[35rem]
                '>
                {/* NAV LOGO */}
                <div
                    className="
                        navLogo
                        flex items-center gap-[0.3rem]
                        text-[2.2rem] font-semibold text-[#e51e55]
                        cursor-pointer
                    ">
                    <img src={airbnbLogo} alt="" className='w-[3.7rem]' />
                    <span>airbnb</span>
                </div>
            </div>
        </div>
    )
}

export default PaymentNav;