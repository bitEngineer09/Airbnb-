import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'
import { listingDataContext } from '../../context/ListingContext';
import ListingPageNav from '../../components/ListingPageComponents/ListingPageNav';
import { useEffect } from 'react';

const EditCardPage4 = () => {

    // USE STATES
    const [loading, setLoading] = useState(false);

    // USE PARAMS
    const { id } = useParams();

    // CONTEXT
    const {

        setTitle,
        setDescription,
        setRent,
        setCity,
        setLandmark,

        newFrontendImage1,
        newFrontendImage2,
        newFrontendImage3,

        singleCardData, setSingleCardData,
        handleSingleCardData, handleUpdateListing

    } = useContext(listingDataContext);



    // NAVIGATE
    const navigate = useNavigate();


    // FETCH SINGLE CARD DATA AT LOAD
    useEffect(() => {
        const fetchSingleCardData = async (id) => {
            try {
                const response = await handleSingleCardData(id);

                setSingleCardData(response);
                setTitle(response.title);
                setDescription(response.description);
                setRent(response.rent);
                setCity(response.city);
                setLandmark(response.landmark);

                console.log(singleCardData)

            } catch (error) {
                console.log("single card data fetching error: ", error);
            }
        }

        fetchSingleCardData(id);
    }, [])

    console.log(singleCardData)


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
                        src={newFrontendImage1 || singleCardData.image1}
                        alt=""
                        className='w-[100%] h-[100%] rounded-[2rem]
                    '/>
                </div>

                <div className='w-[100%]  flex flex-col gap-[1rem]'>
                    <div className='w-[100%] h-[50%]'>
                        <img
                            src={newFrontendImage2 || singleCardData.image2}
                            alt=""
                            className='w-[100%] h-[99%] rounded-[2rem]
                            '/>
                    </div>
                    <div className='w-[100%] h-[50%]'>
                        <img
                            src={newFrontendImage3 || singleCardData.image3}
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
                <div
                    onClick={() => navigate(`/editcardpage3/${id}`)}
                    className='underline cursor-pointer'>Back
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
                            await handleUpdateListing(id);
                            navigate('/');
                        } catch (error) {
                            console.error("Failed to update listing:", error);
                            alert("There was an issue updating the listing. Please try again.");
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
                            : "Post"
                    }
                </button>
            </div>
        </div>
    )
}

export default EditCardPage4;