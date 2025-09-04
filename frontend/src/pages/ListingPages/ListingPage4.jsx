import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'
import { listingDataContext } from '../../context/ListingContext';
import ListingPageNav from '../../components/ListingPageComponents/ListingPageNav';
import { toast } from 'react-toastify';

const ListingPage4 = () => {

    // USE STATES
    const [loading, setLoading] = useState(false);

    // CONTEXT DATA
    const {
        frontendImage1, frontendImage2, frontendImage3,
        handleAddListing
    } = useContext(listingDataContext);

    const handleAddToast = () => {
        toast.success("Listing added", {
            position: "top-center",
            autoClose: 3000,
            className: "font-semibold, text-[2rem]"
        })
    }

    // NAVIGATE
    const navigate = useNavigate();


    return (
        <div className='w-full h-screen'>
            {/* IMAGE PREVIEW */}
            <ListingPageNav />

            <h1 className='text-[4.5rem] font-semibold text-center mt-[12rem]'>Preview Images
            </h1>
            <div
                className="
                    photosPreview
                    w-[50%] 
                    mt-[1rem] mx-auto
                    pt-[2rem] pb-[15rem]
                    flex flex-col gap-[3rem]
                    overflow-auto
                    ">
                <div className='w-[100%]'>
                    <img
                        src={frontendImage1}
                        alt=""
                        className='w-[100%] h-[100%] rounded-[2rem]
                    '/>
                </div>

                <div className='w-[100%]  flex flex-col gap-[1rem]'>
                    <div className='w-[100%] h-[50%]'>
                        <img
                            src={frontendImage2}
                            alt=""
                            className='w-[100%] h-[99%] rounded-[2rem]
                            '/>
                    </div>
                    <div className='w-[100%] h-[50%]'>
                        <img
                            src={frontendImage3}
                            alt=""
                            className='w-[100%] h-[96%] rounded-[2rem]
                        '/>
                    </div>
                </div>
            </div>

            {/* BOTTOM NAV */}
            <div
                className='
                bottomNav
                fixed bottom-0
                w-[100%] h-[11rem]
                px-[5rem]
                flex justify-between items-center
                text-[2.6rem]
                bg-white
                border-t-[1px] border-zinc-200
            '>
                <div onClick={() => navigate('/listingpage3')} className='underline cursor-pointer'>Back
                </div>
                <button
                    type='submit'
                    className='
                    flex justify-center items-center
                    w-[15rem] h-[6rem] rounded-[1rem]
                    bg-black text-white
                    cursor-pointer
                '
                    onClick={async () => {
                        setLoading(true);
                        try {
                            await handleAddListing();
                            handleAddToast()
                            navigate('/');
                        } catch (error) {
                            console.error("Failed to add listing:", error);
                            alert("There was an issue submitting the listing. Please try again.");
                        } finally {
                            setLoading(false);
                        }
                    }}
                >   {
                        loading ? <Ring2
                            size="35"
                            stroke="5"
                            strokeLength="0.25"
                            bgOpacity="0.1"
                            speed="0.8"
                            color="white"
                        />
                            : "Add"
                    }
                </button>
            </div>
        </div>
    )
}

export default ListingPage4