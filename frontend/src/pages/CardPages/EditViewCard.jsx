import React, { useContext, useState } from 'react';
import SecondoryNav from '../../components/NavComponents/SecondoryNav';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import tag from '../../assets/tag.png';

// REACT ICONS
import { RiDeleteBin6Line } from "react-icons/ri";
import { listingDataContext } from '../../context/ListingContext';
import { MdDeleteForever } from "react-icons/md";

const EditViewCard = () => {

  // USE STATE 
  const [showPopup, setShowPopup] = useState(false);

  // USE PARAMS
  const { id } = useParams();

  // CONTEXT DATA
  const {
    singleCardData,
    setSingleCardData,
    handleSingleCardData,
    handleDeleteListing
  } = useContext(listingDataContext);

  //! DEBUGGING
  console.log(singleCardData);

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
            <p className="listingDescription text-[1.8rem] tracking-wide "> {`Located in ${city}`}
            </p>
            <p className="listingDescription text-[1.8rem] tracking-wide ">{`Near By ${landmark}`}
            </p>
          </div>
        </div>


        {/* EDIT */}
        <div className='flex justify-between'>
          <div
            onClick={() => navigate(`/editcardpage1/${id}`)}
            className='
                text-[2rem] text-white font-semibold tracking-wide
                w-[34rem] h-[5.5rem]
                flex items-center justify-center
                rounded-full
                bg-rose-500
                cursor-pointer
            '>Edit
          </div>


          {/* DELETE */}
          <div
            onClick={() => setShowPopup(true)}
            className='
                text-[2.5rem] font-semibold tracking-wide text-white
                w-[20rem] h-[5.5rem]
                flex items-center justify-center
                rounded-full border-[3px] bg-rose-500 
                cursor-pointer
                hover:bg-white hover:text-rose-500
                ease-in duration-150
            '><RiDeleteBin6Line />
          </div>

        </div>
      </div>


      {/* DELETE POPUP */}
      {
        showPopup ?
          <div
            className='
              flex items-center justify-center
              w-full h-screen
              absolute top-0
              bg-black/50
            '>
            <div
              className="
                deleteDiv
                w-[40rem] h-[25rem]
                py-[2rem] px-[4rem]
                flex flex-col items-center justify-around
                font-semibold
                rounded-[2rem]
                bg-white 
                ">
              <h1 className='text-[3rem] font text-center'>Confirm deletion ?
              </h1>
              <div
                className='
                    deleteIcon
                    text-[7.5rem]
                    flex justify-center
                    text-red-600
                    hover:scale-110
                    ease-in duration-150
                    '><MdDeleteForever />
              </div>
              <div className='flex justify-between gap-[5rem]'>
                <button
                  onClick={() => setShowPopup(false)}
                  className='
                        text-[2rem]
                        p-[0.1rem_2.7rem]
                        cursor-pointer
                        rounded-full
                        bg-green-500 text-white
                        '>No</button>
                <button
                  onClick={async () => {
                    await handleDeleteListing(id);
                    navigate('/')
                  }}
                  className='
                        text-[2rem]
                        p-[0.1rem_2.7rem]
                        cursor-pointer
                        rounded-full
                        text-white bg-red-500 
                        '>Yes</button>
              </div>
            </div>
          </div>
          : ""
      }
    </div>
  )
}

export default EditViewCard;