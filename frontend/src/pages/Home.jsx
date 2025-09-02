import React, { useContext } from 'react'
import { listingDataContext } from '../context/ListingContext';
import { authDataContext } from '../context/authContext';
import Nav from '../components/NavComponents/Nav';
import Login from '../pages/AuthPages/Login';
import Listings from '../components/ListingPageComponents/Listings';
import FooterPrimary from '../components/Footer/FooterPrimary';
import FooterSecondary from '../components/Footer/FooterSecondary';

const Home = () => {


    // CONTEXT DATA
    const { filteredListings } = useContext(listingDataContext);
    const { showLogin, setShowLogin, showSignup, setShowSignup } = useContext(authDataContext);



    //! DEBUGGING
    // console.log(listings);
    // console.log(filteredListings)

    return (
        <div className='relative'>
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
            <div className='w-full min-h-[150rem] px-[2rem]'>
                <div className='w-full text-[3rem] font-semibold px-[3rem] mt-[2rem]'>
                    {
                        filteredListings.length > 0
                            ? <h1>Popular homes
                            </h1>
                            : ""
                    }
                </div>


                {/* LISTINGS CONTAINER */}
                <div className='grid grid-cols-6 items-center justify-items-center gap-y-[3rem] w-full py-[3rem] '>
                    {
                        filteredListings.length > 0
                            ? filteredListings.map((item) => {
                                const { _id, title, rent, city, landmark, image1 } = item;
                                return (
                                    <Listings
                                        key={_id}
                                        id={_id}
                                        title={title}
                                        rent={rent}
                                        city={city}
                                        landmark={landmark}
                                        image={image1}
                                    />
                                )
                            })
                            : <div
                                className='
                  noListingDiv
                  w-full min-h-[calc(100vh-20rem)]
                  flex flex-col items-center justify-center
                  text-[4rem] font-semibold text-zinc-400
                  absolute top-[19rem]
              '>
                                <p>Oops! No listing availiable for this category</p>
                                <span>{" :("}</span>
                            </div>

                    }
                </div>

                {/* FOOTER SECTION */}
                <div className='w-full px-[5rem] bg-[#F7F7F7] absolute bottom-0'>
                    <FooterPrimary />
                    <FooterSecondary />
                </div>
            </div>
        </div>
    )
}

export default Home