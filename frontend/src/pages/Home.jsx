import React, { useContext } from 'react'
import { listingDataContext } from '../context/ListingContext';
import { authDataContext } from '../context/authContext';
import Nav from '../components/NavComponents/Nav';
import Login from '../pages/AuthPages/Login';
import Listings from '../components/ListingPageComponents/Listings';

const Home = () => {


    // CONTEXT DATA
    const { filteredListings } = useContext(listingDataContext);
    const {showLogin, setShowLogin, showSingup, setShowSignup} = useContext(authDataContext);



    //! DEBUGGING
    // console.log(listings);
    // console.log(filteredListings)

    return (
        <>
            <Nav setShowLogin={setShowLogin} />

            {/* SHOW LOGIN POP UP FUNCTIONALITY */}
            {
                showLogin && (
                    <div
                        className='
                            fixed top-0 left-0
                            w-full h-full
                            bg-black/30 backdrop-blur-sm z-50
                            flex items-center justify-center
                            '>
                        <Login setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
                    </div>
                )
            }


            {/* LISTINGS ON HOME PAGE */}
            <div className='w-[160rem] mx-auto'>
                <div className='w-full text-[3rem] font-semibold px-[3rem] mt-[2rem]'>
                    {
                        filteredListings.length > 0
                            ? <h1>Popular homes
                            </h1>
                            : ""
                    }
                </div>

                {/* LISTINGS CONTAINER */}
                <div className='grid grid-cols-5 items-center justify-items-center gap-y-[3rem] w-full py-[3rem] '>
                    {
                        filteredListings.length > 0
                            ? filteredListings.map((item) => {
                                const { _id, title, rent, city, landmark, image1 } = item;
                                return (
                                    <Listings key={_id} id={_id} title={title} rent={rent} city={city} landmark={landmark} image={image1} />
                                )
                            })
                            : <p
                                className='
                                    text-[3rem] text-red-700 font-semibold
                                    absolute
                                '>OOPS ! No Listings Available For This Category
                                <br />
                            </p>

                    }
                </div>
            </div>
        </>
    )
}

export default Home