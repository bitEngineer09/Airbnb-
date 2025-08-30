import React, { useContext, useState } from 'react';
import airbnbLogo from '../../assets/navAssets/airbnb.png';
import { IoSearch } from "react-icons/io5";
import { FiGlobe } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import NavPopup from './NavPopup';
import { useNavigate } from 'react-router-dom';
import PopupPortal from './PopupPortal';
import { authDataContext } from '../../context/authContext';

const SecondoryNav = () => {

    // USE STATES
    const [showPopup, setShowPopup] = useState(false);

    // CONTEXT DATA
    const {

        showLogin, setShowLogin,
        showSingup, setShowSignup,
        currentUser, setCurrentUser,
        logoutUser

    } = useContext(authDataContext);


    // NAVIGATE
    const navigate = useNavigate();


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

                {/* NAV SEARCH */}
                <div
                    className="
                        navSearch
                        relative
                        ml-[4rem]
                        w-[50%] h-[80%]
                        flex items-cetner
                    ">
                    <input
                        type="text"
                        placeholder="Any where | Any place | Any time"
                        className='
                            navInput
                            w-[100%]
                            px-[3rem]
                            text-[1.8rem]
                            outline-none
                            border-[2px] rounded-full border-zinc-200
                        '/>
                    <IoSearch
                        className='
                            absolute
                            size-[5rem]
                            rounded-full
                            text-white
                            bg-[#e51e55]
                            p-[1.4rem]
                            right-[1.1rem]
                            top-[1rem]
                            cursor-pointer
                            '/>
                </div>

                {/* LEFT NAV SECTION */}
                <div
                    className="
                        navLeftSection
                        flex items-center justify-end
                        gap-[2rem]
                        w-[24%] h-[100%]
                    ">
                    <p
                        onClick={() => navigate('/listingpage1')}
                        className='
                            text-[1.7rem] font-semibold
                            cursor-pointer
                            bg-zinc-200 text-black hover:bg-zinc-300 
                            p-[1rem_1.5rem]
                            border-[2px] rounded-full
                        '>Become a host
                    </p>
                    <div className="navLeftIcons relative flex text-[2.1rem] gap-[2rem]">
                        <FiGlobe
                            className='
                                size-[4.5rem]
                                p-[1.1rem]
                                bg-zinc-200
                                rounded-full
                                cursor-pointer
                            '/>
                        {
                            currentUser
                                ? <div
                                    onClick={() => setShowPopup(!showPopup)}
                                    className="
                                        userProfile 
                                        size-[4.5rem]
                                        p-[1.1rem]
                                        bg-[#e51e55] text-white
                                        font-semibold text-[3rem] 
                                        rounded-full  
                                        cursor-pointer
                                        flex items-center justify-center
                                    ">
                                    {currentUser?.name?.charAt(0).toUpperCase()}
                                </div>
                                :
                                <GiHamburgerMenu
                                    onClick={() => setShowPopup(!showPopup)}
                                    className='
                                        size-[4.5rem]
                                        p-[1.1rem]
                                        bg-zinc-200
                                        rounded-full  
                                        cursor-pointer
                                    '/>
                        }

                        {showPopup && (
                            <PopupPortal>
                                <div className='fixed top-[9rem] right-[35rem] w-[30rem] rounded-[2rem] bg-white shadow-xl'>
                                    <NavPopup setShowLogin={setShowLogin} setShowPopup={setShowPopup} />
                                </div>
                            </PopupPortal>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondoryNav;