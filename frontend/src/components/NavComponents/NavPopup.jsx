import React, { useContext } from 'react';
import { FaQuestion } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../../context/authContext';
import { useEffect } from 'react';
import { useRef } from 'react';

const NavPopup = ({ setShowLogin, setShowPopup }) => {

    // USE REF
    const popupRef = useRef(null);

    // CONTEXT DATA
    const { setCurrentUser, currentUser, logoutUser } = useContext(authDataContext);

    // NAVIGATE
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await logoutUser();
            setCurrentUser(null);
            console.log("handle logout response error: ", response)
        } catch (error) {
            console.log("handle logout error: ", error)
        }
    }

    // ! YE CODE DHANG SE SAMAJH LIYO ********************************************
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setShowPopup(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowPopup]);


    return (
        <>
            <ul 
                ref={popupRef}
                className='
                    flex
                    flex-col
                    gap-[1rem]
                    text-[1.7rem]
                    p-[1rem_1rem]
                '>
                <li
                    className='
                        flex
                        items-center
                        gap-[1rem]
                        rounded-[2.5rem]
                        p-[1rem]
                        cursor-pointer
                        hover:bg-zinc-200
                    '>
                    <FaQuestion />
                    Help center
                </li>

                <li
                    className='
                        cursor-pointer
                        p-[1rem]
                        hover:bg-zinc-200
                        rounded-[2.5rem]
                    '>My Listings
                </li>

                <div className='w-[93%] h-[1px] bg-zinc-300 self-center rounded-[2.5rem]'></div>

                <li
                    className='
                        p-[1rem]
                        cursor-pointer
                        hover:bg-zinc-200
                        rounded-[2.5rem]
                    '>Refer a host
                </li>
                <li
                    className='
                        border-zinc-300
                        p-[1rem]
                        cursor-pointer
                        hover:bg-zinc-200
                        rounded-[2.5rem]
                    '>find a co-host
                </li>

                <div className='w-[93%] h-[1px] bg-zinc-300 self-center rounded-[2.5rem]'></div>


                {
                    currentUser ?
                        <li
                            onClick={async () => {
                                await handleLogout();
                                setShowPopup(false);
                                navigate('/')
                            }}
                            className='
                                cursor-pointer
                                p-[1rem]
                                hover:bg-zinc-200
                                rounded-[2.5rem]
                            '>Log out
                        </li>
                        :
                        <li
                            onClick={() => {
                                setShowLogin(true)
                                setShowPopup(false)
                            }}
                            className='
                                cursor-pointer
                                p-[1rem]
                                hover:bg-zinc-200
                                rounded-[2.5rem]
                            '>Log in or sign up
                        </li>

                }

            </ul>
        </>
    )
}

export default NavPopup