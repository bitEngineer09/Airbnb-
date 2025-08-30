import React, { useContext } from 'react';
import SecondoryNav from '../../components/NavComponents/SecondoryNav';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import tag from '../../assets/tag.png';

// REACT ICONS
import { MdOutlineIosShare } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { authDataContext } from '../../context/authContext';
import { listingDataContext } from '../../context/ListingContext';

const ViewCard = () => {

  // USE PARAMS
  const { id } = useParams();

  // CONTEXT DATA
  const {
    singleCardData,
    setSingleCardData,
    handleSingleCardData,
  } = useContext(listingDataContext);
  const { currentUser, setCurrentUser } = useContext(authDataContext);

  //! DEBUGGING
  // console.log(singleCardData);

  const { title, description, rent, city, landmark, image1, image2, image3, host } = singleCardData;

  // NAVIGATE
  const navigate = useNavigate();

  // FETCH THE DATA AT TIME OF PAGE LOAD / REFRESH / RENDERING
  useEffect(() => {
    const getSingleCardData = async (id) => {
      try {
        const response = await handleSingleCardData(id);
        setSingleCardData(response);
      } catch (error) {
        console.log("getData error: ", error);
      }
    }
    getSingleCardData(id);
  }, []);



  return (
    <div className='w-full h-screen'>

      {/* NAV */}
      <SecondoryNav />
      <div className='px-[35rem]'>
        <div className='listingHeading flex items-center justify-between'>
          <div className="listingTitle text-[3rem] font-semibold py-[2.2rem]">{title}
          </div>
          <div className='flex text-[2.8rem] gap-[3rem]'>
            <div className='flex items-end justify-center hover:bg-zinc-100 p-[0.8rem] cursor-pointer rounded-[1rem] gap-[1rem]'>
              <MdOutlineIosShare />
              <span className='underline underline-offset-2 text-[1.8rem]'>Share
              </span>

            </div>
            <div className='flex items-center justify-center hover:bg-zinc-100 p-[0.8rem] cursor-pointer rounded-[1rem] gap-[1rem]'>
              <GoHeart />
              <span className='underline underline-offset-2 text-[1.8rem]'>Save
              </span>
            </div>
          </div>
        </div>


        {/* IMAGES */}
        <div
          className="
              listingImages
              w-full h-[50rem]
              grid grid-cols-[70%_30%] gap-[1rem]
              ">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={image1}
              alt=""
              className='h-[50rem] w-full object-cover rounded-l-[2rem]'
            />
          </div>

          {/* RIGHT 2 IMAGES */}
          <div className='grid grid-rows-2 gap-[1rem] h-full'>
            <div className=''>
              <img
                src={image2}
                alt=""
                className='w-full h-[24.5rem] object-cover rounded-tr-[2rem]'
              />
            </div>

            <div>
              <img
                src={image3}
                alt=""
                className='w-full h-[24.5rem] object-cover rounded-br-[2rem]'
              />
            </div>
          </div>
        </div>


        {/* LISTING INFO */}
        <div className='listingInfo flex py-[3rem]'>
          <div className="w-full flex flex-col ">
            <p className="listingDescription text-[2.3rem] font-semibold tracking-wide"> {description}
            </p>
            <p className="rent text-[1.8rem] mt-[1rem]">Availiable Only At {""}
              <span className='font-semibold text-rose-500'>{`${rent}/-`}
              </span>
            </p>
            <p className="listingDescription text-[1.8rem]  tracking-wide "> {`Located in ${city}`}
            </p>
            <p className="listingDescription text-[1.8rem]  tracking-wide ">{`Near By ${landmark}`}
            </p>
          </div>


          {/* PRICE INFO TAG */}
          <div
            className='
              priceInfoTag
              w-[48rem] h-[6rem]
              mt-[5.5rem]
              text-[1.7rem] font-semibold
              flex justify-center items-center
              gap-[1rem]
              rounded-[2rem]
              '>
            <img src={tag} alt="" className='size-[2rem]' />
            <p>Price include all fees
            </p>
          </div>
        </div>

        {/* RESERVE / EDIT*/}
        <div className='flex justify-between'>
          <div
            className='
            text-[2rem] text-white font-semibold tracking-wide
            w-[34rem] h-[5.5rem]
            flex items-center justify-center
            rounded-full
            bg-rose-500
            cursor-pointer
            '>Reserve
          </div>

          {
            currentUser?.id === host
              ? <div
                  onClick={() => navigate(`/editcard/${id}`)}
                  className='
                      text-[2rem] text-white font-semibold tracking-wide
                      w-[34rem] h-[5.5rem]
                      flex items-center justify-center
                      rounded-full
                      bg-rose-500
                      cursor-pointer
                '>Edit
                </div>
              : ""
          }
        </div>

      </div>
    </div>
  )
}

export default ViewCard