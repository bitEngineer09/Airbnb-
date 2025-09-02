import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ListingPageNav from '../../components/ListingPageComponents/ListingPageNav';
import { listingDataContext } from '../../context/ListingContext';
import { useEffect } from 'react';

const EditCardPage2 = () => {

    // USE PARAMS
    const { id } = useParams();

    // CONTEXT
    const {

        title, setTitle,
        description, setDescription,
        rent, setRent,
        city, setCity,
        landmark, setLandmark,

        setNewFrontendImage1,
        setNewFrontendImage2,
        setNewFrontendImage3,

        setBackendImage1,
        setBackendImage2,
        setBackendImage3,

        singleCardData, setSingleCardData,
        handleSingleCardData, handleUpdateListing

    } = useContext(listingDataContext);

    const formData = { title, description, rent, city, landmark};

    // NAVIGATE
    const navigate = useNavigate();


    // HANDLE IMAGES FUNCTIONALITY
    const handleImage1 = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBackendImage1(file);
            setNewFrontendImage1(URL.createObjectURL(file));
        }
    }
    const handleImage2 = (e) => {
        const file = e.target.files[0]
        if (file) {
            setBackendImage2(file);
            setNewFrontendImage2(URL.createObjectURL(file));
        }
    }
    const handleImage3 = (e) => {
        const file = e.target.files[0]
        if (file) {
            setBackendImage3(file);
            setNewFrontendImage3(URL.createObjectURL(file));
        }
    }


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
    }, []);


    

    console.log(singleCardData);


    return (
        <div className='w-full h-screen'>

            {/* LISTING PAGE NAV */}
            <ListingPageNav />

            <h1 className='text-[4.5rem] font-semibold text-center mt-[12rem]'>Edit Your Details</h1>

            {/* CONTENT CONTAINER */}
            <div
                className="
                    listingDetails
                    w-[90rem]
                    mx-auto 
                    pt-[2rem] pb-[14rem]
                    ">

                {/* FORM DATA */}
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        // await handleUpdateListing(id, formData);
                        navigate(`/editcardpage3/${id}`)
                    }}
                    action=""
                    className='flex flex-col gap-[4rem]'
                >

                    <div
                        className='
                        flex flex-col justify-center 
                        h-[6rem] w-[100%]
                        border border-zinc-400 rounded-[1.5rem]
                        hover:border-[2px] hover:border-black
                        '>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            name="title"
                            id="title"
                            placeholder='Title'
                            value={title}
                            required
                            className='
                                outline-none
                                text-[2rem]
                                p-[1rem_2rem]
                                h-[100%]
                                rounded-[1.5rem]
                            '
                        />
                    </div>

                    <div
                        className='
                        flex flex-col justify-center 
                        h-[6rem] w-[100%]
                        border border-zinc-400 rounded-[1.5rem]
                        hover:border-[2px] hover:border-black
                        '>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            name="description"
                            id="description"
                            placeholder='Describe about you listing'
                            value={description}
                            required
                            className='
                                outline-none
                                text-[2rem]
                                p-[1rem_2rem]
                                h-[100%]
                                rounded-[1.5rem]
                            '
                        />
                    </div>

                    <div
                        className='
                        flex flex-col justify-center 
                        h-[6rem] w-[100%]
                        border border-zinc-400 rounded-[1.5rem]
                        hover:border-[2px] hover:border-black
                        '>
                        <input
                            onChange={(e) => setRent(e.target.value)}
                            type="number"
                            name="rent"
                            id="rent"
                            placeholder='specify rent'
                            value={rent}
                            required
                            className='
                                outline-none
                                text-[2rem]
                                p-[1rem_2rem]
                                h-[100%]
                                rounded-[1.5rem]
                            '
                        />
                    </div>

                    <div
                        className='
                        flex flex-col justify-center 
                        h-[6rem] w-[100%]
                        border border-zinc-400 rounded-[1.5rem]
                        hover:border-[2px] hover:border-black
                        '>
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            name="city"
                            id="city"
                            placeholder='city'
                            value={city}
                            required
                            className='
                                outline-none
                                text-[2rem]
                                p-[1rem_2rem]
                                h-[100%]
                                rounded-[1.5rem]
                            '
                        />
                    </div>

                    <div
                        className='
                        flex flex-col justify-center 
                        h-[6rem] w-[100%]
                        border border-zinc-400 rounded-[1.5rem]
                        hover:border-[2px] hover:border-black
                        '>
                        <input
                            onChange={(e) => setLandmark(e.target.value)}
                            type="text"
                            name="landmark"
                            id="landmark"
                            placeholder='landmark | nearby places'
                            value={landmark}
                            required
                            className='
                                outline-none
                                text-[2rem]
                                p-[1rem_2rem]
                                h-[100%]
                                rounded-[1.5rem]
                            '
                        />
                    </div>


                    {/* ADD IMAGE DETAILS */}
                    <div className='flex flex-col gap-[1rem] mt-[2rem]'>
                        <h2 className='text-[3rem] font-semibold leading-10'>Add some photos</h2>
                        <p className='text-[1.8rem]'>You'll need 3 photos to get started. You can add or make changes later.</p>
                    </div>


                    {/*IMAGE DETAILS */}
                    <div
                        className='
                        flex flex-col justify-center 
                        h-[6rem] w-[100%]
                        border border-zinc-400 rounded-[1.5rem]
                        hover:border-[2px] hover:border-black
                        '>
                        <input
                            onChange={handleImage1}
                            type="file"
                            name="iamge1"
                            id="image1"
                            placeholder='Choose image 1'
                            className='
                                outline-none
                                text-[2rem]
                                p-[1rem_2rem]
                            '
                        />
                    </div>

                    <div
                        className='
                        flex flex-col justify-center 
                        h-[6rem] w-[100%]
                        border border-zinc-400 rounded-[1.5rem]
                        hover:border-[2px] hover:border-black
                        '>
                        <input
                            onChange={handleImage2}
                            type="file"
                            name="iamge2"
                            id="image2"
                            placeholder='Choose image 2'
                            className='
                                outline-none
                                text-[2rem]
                                p-[1rem_2rem]
                            '
                        />
                    </div>

                    <div
                        className='
                        flex flex-col justify-center 
                        h-[6rem] w-[100%]
                        border border-zinc-400 rounded-[1.5rem]
                        hover:border-[2px] hover:border-black
                        '>
                        <input
                            onChange={handleImage3}
                            type="file"
                            name="iamge3"
                            id="image3"
                            placeholder='Choose image 3'
                            className='
                                outline-none
                                text-[2rem]
                                p-[1rem_2rem]
                            '
                        />
                    </div>

                </form>
            </div>


            {/* BOTTOM NAV */}
            <div
                className='
                bottomNav
                fixed bottom-0
                w-[100%] h-[11rem]
                px-[5rem]
                flex justify-between items-center
                text-[2.6rem] bg-white
                border-t-[1px] border-zinc-200
            '>
                <div onClick={() => navigate(`/editcardpage1/${id}`)} className='underline cursor-pointer'>Back
                </div>
                <button
                    onClick={async () => {
                        await handleUpdateListing(id, formData);
                        navigate(`/editcardpage3/${id}`)
                    }}
                    className='
                    w-[15rem] h-[6rem] rounded-[1rem]
                    bg-rose-500 text-white
                    cursor-pointer
                '
                >Edit
                </button>
            </div>
        </div>
    )
}

export default EditCardPage2;