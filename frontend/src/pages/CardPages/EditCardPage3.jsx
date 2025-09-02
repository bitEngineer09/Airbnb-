import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'
import ListingPageNav from '../../components/ListingPageComponents/ListingPageNav'
import { listingDataContext } from '../../context/ListingContext'


const EditCardPage3 = () => {

    // USE STATES
    const [loading, setLoading] = useState(false);


    // USE PARAMS
    const {id} = useParams();


    // CONTEXT DATA
    const {
        title, description, rent,
        city, landmark, category,
    } = useContext(listingDataContext);


    // NAVIGATE
    const navigate = useNavigate();


    return (
        <div className='w-full h-screen'>

            {/* LISTING PAGE NAV */}
            <ListingPageNav />

            <div>
                <h1 className='text-[4.5rem] font-semibold text-center mt-[12rem]'>Confirm Your Editted Details
                </h1>

                {/* DETAILS PREVIEW DIV */}
                <div
                    className='
                    max-w-[120rem] h-[40rem]
                    mt-[4rem] mx-auto 
                    p-[2rem] 
                    flex flex-col justify-around gap-[2rem]
                    rounded-[2rem] border-[2px] border-dashed
                    text-[2rem]

            '>
                    <div className='grid grid-cols-[22%_78%]'>
                        <p className='flex underline underline-offset-4 text-zinc-500 border-black border-r-[2px]'>Property Title:
                        </p>
                        <p className='font-semibold text-black ml-[1rem]'>{title}
                        </p>
                    </div>

                    <div className="grid grid-cols-[22%_78%]">
                        <p className='flex underline underline-offset-4 text-zinc-500  border-black border-r-[2px] text-nowrap'>About the Property:
                        </p>
                        <p className='font-semibold text-black text-wrap ml-[1rem]'>{description}
                        </p>
                    </div>

                    <div className="grid grid-cols-[22%_78%]">
                        <p className='flex underline underline-offset-4 text-zinc-500  border-black border-r-[2px]'>Monthly Rent:
                        </p>
                        <p className='font-semibold text-black ml-[1rem]'>{rent}
                        </p>
                    </div>

                    <div className="grid grid-cols-[22%_78%]">
                        <p className='flex underline underline-offset-4 text-zinc-500  border-black border-r-[2px]'>Located In:
                        </p>
                        <p className='font-semibold text-black ml-[1rem]'>{city}
                        </p>
                    </div>

                    <div className="grid grid-cols-[22%_78%]">
                        <p className='flex underline underline-offset-4 text-zinc-500  border-black border-r-[2px]'>Nearby Landmarks:
                        </p>
                        <p className='font-semibold text-black ml-[1rem]'>{landmark}
                        </p>
                    </div>


                    <div className="grid grid-cols-[22%_78%]">
                        <p className='flex underline underline-offset-4 text-zinc-500  border-black border-r-[2px]'>Property Type:
                        </p>
                        <p className='font-semibold text-black ml-[1rem]'>{category}
                        </p>
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
                            border-t-[1px] border-zinc-200
                        '>
                <div onClick={() => navigate(`/editcardpage2/${id}`)} className='underline cursor-pointer'>Back
                </div>
                <button
                    type='submit'
                    className='
                                w-[15rem] h-[6rem] rounded-[1rem]
                                bg-rose-500 text-white
                                cursor-pointer
                            '
                    onClick={async () => {
                        setLoading(true);
                        navigate(`/editcardpage4/${id}`);
                        setLoading(false);
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
                            : "Confirm"
                    }
                </button>
            </div>
        </div >
    )
}

export default EditCardPage3;