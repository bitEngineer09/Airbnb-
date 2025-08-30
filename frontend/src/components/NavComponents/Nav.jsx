import React, { useContext, useState } from 'react';
import airbnbLogo from '../../assets/navAssets/airbnb.png';
import { IoSearch } from "react-icons/io5";
import { FiGlobe } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import NavSecondary from './NavSecondary';
import NavPopup from './NavPopup';
import { useNavigate } from 'react-router-dom';
import PopupPortal from './PopupPortal';
import { authDataContext } from '../../context/authContext';



const Nav = ({ setShowLogin }) => {

    // USE STATES
    const [showPopup, setShowPopup] = useState(false);

    // CONTEXT DATA
    const { currentUser } = useContext(authDataContext);

    // NAVIGATE
    const navigate = useNavigate();



    return (

        <div className='bg-[#FCFCFC]'>
            {/* MAIN NAV CONTAINER */}
            <div
                className='
          w-full
          h-[9rem]
          flex
          items-center
          justify-between
          px-[5rem]
        '
            >
                {/* NAV LOGO */}
                <div
                    className="
            navLogo
            flex
            gap-[0.3rem]
            items-center
            text-[2.2rem]
            font-semibold
            text-[#e51e55]
            cursor-pointer
          ">
                    <img src={airbnbLogo} alt="" className='w-[3.7rem]' />
                    <span>airbnb</span>
                </div>

                {/* NAV SEARCH */}
                <div
                    className="
            ml-[26rem]
            navSearch
            relative
            w-[50%]
            h-[80%]
            flex
            items-cetner
          "
                >
                    <input
                        type="text"
                        placeholder="Any where | Any place | Any time"
                        className='
              navInput
              outline-none
              text-[1.8rem]
              w-[100%]
              rounded-full
              px-[3rem]
              border-[2px]
              border-zinc-200
            '
                    />
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
            '
                    />
                </div>

                {/* RIGHT NAV SECTION */}
                <div
                    className="
                        navLeftSection
                        flex
                        items-center
                        justify-end
                        gap-[2rem]
                        w-[20%]
                        h-[100%]
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
              '
                        />
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
                                <div className='fixed top-[9rem] right-[5rem] w-[30rem] rounded-[2rem] bg-white shadow-xl'>
                                    <NavPopup setShowLogin={setShowLogin} setShowPopup={setShowPopup} />
                                </div>
                            </PopupPortal>
                        )}
                    </div>
                </div>
            </div>

            {/* SECONDARY NAVBAR */}
            <div
                className="
          secondoryNav
          flex
          items-center
          justify-center
          gap-[0.5rem]
          mt-[1rem]
          pb-[1.2rem]
          border-b-[2px]
          border-b-zinc-100
        "
            >
                <NavSecondary />
            </div>
        </div>
    );
};

export default Nav;
