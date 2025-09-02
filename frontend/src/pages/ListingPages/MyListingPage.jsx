import React, { useContext, useEffect } from 'react'
import SecondoryNav from '../../components/NavComponents/SecondoryNav'
import { useParams } from 'react-router-dom'
import { listingDataContext } from '../../context/ListingContext';
import EditListingCard from '../CardPages/EditListingCard';

const MyListingPage = () => {

  // USE PARAMS
  const { id } = useParams();

  // CONTEXT DATA
  const { handleListingByHost, hostListing, setHostListing } = useContext(listingDataContext);

  //! DEBUGGING
  // console.log(hostListing);


  // INITIALLY LOAD ALL LISTINGS OF USER AT TIME OF RENDER
  useEffect(() => {
    const fetchListingByHost = async (id) => {
      try {
        const response = await handleListingByHost(id);
        setHostListing(response);
        console.log(response);
      } catch (error) {
        console.log("fetchListingByHost error: ", error);
      }
    }

    fetchListingByHost(id);
  }, []);


  return (
    <div className='w-full h-screen'>

      <SecondoryNav />

      {/* LISTING HEADING */}
      <h1
        className="
          myListingHeading
          mt-[2rem] px-[35rem]
          text-[3.5rem] font-semibold
          ">{hostListing.length > 0 ? "My Hosted Listings" : ""}
      </h1>
      <div
        className="
          myListingContainer
          w-full px-[35rem] py-[3rem]
          grid grid-cols-4 gap-[5rem] items-center justify-items-center
          ">
        {
          hostListing.length > 0
            ? hostListing.map((list) => {
              const { _id, title, description, rent, landmark, city, category, image1 } = list;
              return (
                <EditListingCard
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  rent={rent}
                  landmark={landmark}
                  city={city}
                  category={category}
                  image={image1}
                />
              )
            })
            :
            <div
              className='
                  noListingDiv
                  w-full min-h-[calc(100vh-12rem)]
                  flex flex-col items-center justify-center
                  text-[4rem] font-semibold text-zinc-400
                  absolute top-[11rem]
              '><p>You have not hosted anything yet
              </p>
              <span>{" :("}</span>
              </div>
        }
      </div>

    </div>
  )
}

export default MyListingPage