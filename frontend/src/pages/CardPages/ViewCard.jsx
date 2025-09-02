import React, { useContext, useState } from 'react';
import SecondoryNav from '../../components/NavComponents/SecondoryNav';
import { useEffect } from 'react';
import tag from '../../assets/tag.png';
import { differenceInDays, format } from "date-fns";

// REACT ICONS
import { MdOutlineIosShare } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { listingDataContext } from '../../context/ListingContext';
import { ImFlag } from "react-icons/im";
import BookDatePicker from '../../components/BookDatePicker';
import { useNavigate, useParams } from 'react-router-dom';
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import FooterPrimary from '../../components/Footer/FooterPrimary';
import FooterSecondary from '../../components/Footer/FooterSecondary';

const ViewCard = () => {

  // USE STATE
  const [guests, setGuests] = useState(1);
  // console.log(guests)


  // USE PARAMS
  const { id } = useParams();


  // CONTEXT DATA
  const {
    singleCardData,
    setSingleCardData,
    handleSingleCardData,
    handleUserByHostId, userByHostId, setUserByHostId,
  } = useContext(listingDataContext);

  // console.log(singleCardData.host)

  //! DEBUGGING
  // console.log(singleCardData);
  const { title, description, rent, city, landmark, image1, image2, image3, host } = singleCardData;


  // NAVIGATE 
  const navigate = useNavigate();


  // DATE PICKER FUNCTION
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const daysCount = range.startDate && range.endDate
    ? differenceInDays(range.endDate, range.startDate)
    : 0;


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


  // FETCH CURRENT CARD USER BY HOST AT TIME OF LOAD
  useEffect(() => {
    const fetchUserByHost = async (hostId) => {
      try {
        const response = await handleUserByHostId(hostId);
        setUserByHostId(response.user);
      } catch (error) {
        console.log("fetchUserByHost error: ", error);
      }
    };

    // pehle singleCardData se host milega tabhi ye function call hoga
    if (singleCardData?.host) {
      fetchUserByHost(singleCardData.host);
    }

  }, [singleCardData.host]);

  // console.log(userByHostId);



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


        {/* RESERVE */}
        <div className='flex justify-between mt-[4rem] border-t-[1px] border-zinc-300 pt-[8rem]'>
          <BookDatePicker range={range} setRange={setRange} />

          <div className='flex flex-col'>
            <div
              className='
                bookingDetails
                w-[42rem] h-[34rem]
                flex flex-col justify-between
                rounded-[1rem]
                p-[2rem] 
                '>
              <div className="totalPrice text-[1.8rem]">
                <span className='text-[2.4rem] font-semibold underline'>{`₹${rent * daysCount}`}</span> for {daysCount} nights
              </div>


              {/* CHECK IN CHECK OUT DIV */}
              <div
                className="
                  dates
                  h-[6.4rem]
                  border border-zinc-400 rounded-[1rem] 
                  flex justify-between items-center
                  px-[1.2rem] 
                  border-b-[1px]
                  text-[1.5rem]
                  ">
                <div
                  className="
                    startData
                    border-r-[1px] border-zinc-400
                    flex flex-col items-start justify-center                      
                    w-[50%] h-[100%]
                    ">
                  <span
                    className='
                      text-[1.1rem] tracking-wide text-nowrap
                      font-semibold uppercase
                      '>Check-In
                  </span>
                  <span>{format(range.startDate, "dd/MM/yyyy")}
                  </span>
                </div>
                <div
                  className="
                    startData
                    px-[1.2rem]
                    flex flex-col items-start justify-center                      
                    w-[50%] h-[100%]
                  ">
                  <span
                    className='
                      text-[1.1rem] tracking-wide text-nowrap
                      font-semibold uppercase
                      '>Check-Out
                  </span>
                  <span>{format(range.endDate, "dd/MM/yyyy")}
                  </span>
                </div>
              </div>


              {/* GUESTS DIV */}
              <div className="guests text-[1.5rem] flex flex-col justify-center ">
                <label
                  htmlFor="guests"
                  className='
                    px-[0.2rem]
                    text-[1.1rem] tracking-wide
                    font-semibold
                    mb-[0.4rem]'>GUESTS
                </label>
                <input
                  onChange={(e) => {
                    const value = e.target.value;
                    // Agar input khali ho to "" rakho, warna number me convert karo
                    setGuests(value === "" ? "" : Number(value));
                  }}
                  type="number"
                  id="guests"
                  min={1}
                  name="guests"
                  value={guests}
                  className='
                    border rounded-[1rem] border-zinc-400
                    h-[4rem]
                    px-[1.2rem]
                    outline-none
                '/>
              </div>


              {/* RESERVE BUTTON */}
              <div
                onClick={() => {
                  if (guests && daysCount && range.startDate && range.endDate) {
                    const paymentData = {
                      guests,
                      daysCount,
                      checkInDate: range.startDate,
                      checkOutDate: range.endDate,
                      totalRent: rent * daysCount,
                      taxAmount: rent * daysCount * 0.15
                    }

                    localStorage.setItem("paymentData", JSON.stringify(paymentData));

                    navigate(`/paymentpage/${id}`,
                      {
                        state: {
                          guests,
                          daysCount,
                          checkInDate: range.startDate,
                          checkOutDate: range.endDate,
                          totalRent: rent * daysCount,
                          taxAmount: rent * daysCount * 0.15
                        }
                      }
                    )
                  } else {
                    alert("Please fill neccessary details, to proceed further")
                  }
                }}
                className='
                  text-[1.7rem] text-white font-semibold tracking-wide
                  w-full h-[5rem]
                  flex items-center justify-center
                  rounded-full
                  bg-rose-500
                  cursor-pointer
                  '>Reserve
              </div>
              <p className='text-[1.5rem] text-center'>You won't be charged yet</p>
            </div>

            <p
              className='
                flex justify-center items-center gap-[1.8rem]
                underline text-[1.5rem] text-zinc-600
                font-semibold tracking-wide
                mt-[2rem]
            '><ImFlag />Report this listing
            </p>
          </div>
        </div>

        {/* HOST SECTION */}
        <div className="hostInfo grid grid-cols-[32%_68%] mt-[5rem] w-full h-[48rem] border-y-[1px] py-[4rem] border-zinc-300">

          {/* LEFT SECTION */}
          <div className="">
            <h2 className='text-[2.3rem]'>Meet your host</h2>
            <div className="profile w-[100%] h-[73%] rounded-[3rem] flex justify-between mt-[3.2rem]">

              {/* PROFILE LEFT SECTION */}
              <div className='flex flex-col w-[100%] justify-center items-center'>
                <div
                  className='
                      relative
                      size-[12rem]
                      rounded-full bg-zinc-600
                      text-white text-[6rem] 
                      flex items-center justify-center
                    '>{userByHostId?.name?.charAt(0).toUpperCase()}
                  <IoShieldCheckmarkSharp className='absolute text-[2.9rem] bottom-0 right-[10px] text-rose-500' />
                </div>
                <div className="hostName text-[4rem] mt-[1rem] font-semibold">{userByHostId?.name}
                </div>
                <span className='text-[1.5rem] text-zinc-500'>Host
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className='w-[100%] h-[73%] mt-[6.9rem] pl-[6rem] flex flex-col gap-[4rem]'>
            <h2 className='text-[2.8rem]'>Host Details</h2>
            <div>
              {/* <p className='text-[2rem]'>Response rate: 96%</p> */}
              <p className='text-[2rem]'>Responds within an hour
              </p>
              <p className='text-[2rem]'>Host since: {""}
                <span className='text-rose-500 font-semibold'>
                  {userByHostId?.createdAt && new Date(userByHostId?.createdAt).toLocaleDateString()}
                </span>
              </p>
            </div>
            <button
              className="
                messageHost
                text-[2rem]
                w-[22rem] h-[6rem]
                rounded-[2rem]
                bg-[#F2F2F2] hover:bg-zinc-200
                cursor-pointer
                ">Message Host
            </button>
            <p className='text-[1.5rem] flex items-center gap-[1rem] w-[100%] '>
              <MdOutlinePrivacyTip />
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>


        {/* THINGS TO KNOW SECTION */}
        <div className="thingsToKnowSection pt-[5rem] pb-[7rem]">
          <h2 className='text-[2.3rem]'>Things to know</h2>

          <div className="grid grid-cols-3">
            <div>
              <h3 className='text-[1.8rem] mt-[2rem] font-semibold'>House Rules
              </h3>
              <ul className='text-[1.8rem] flex flex-col text-zinc-700 gap-[1.5rem] mt-[1rem]'>
                <li>Check-in: 12:00 pm – 2:00 am
                </li>
                <li>Checkout before 10:00 am
                </li>
                <li>2 guests maximum
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-[1.8rem] mt-[2rem] font-semibold'>Safety & property
              </h3>
              <ul className='text-[1.8rem] flex flex-col text-zinc-700 gap-[1.5rem] mt-[1rem]'>
                <li>Carbon monoxide alarm not reported
                </li>
                <li>Smoke alarm not reported
                </li>
                <li>Noise decibel monitors on property
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-[1.8rem] mt-[2rem] font-semibold'>Cancellation policy
              </h3>
              <ul className='text-[1.8rem] flex flex-col text-zinc-700 gap-[1.5rem] mt-[1rem]'>
                <li>Free cancellation before 18 Sept. Cancel before check-in on 19 Sept for a partial refund.
                </li>
                <li>Review this Host’s full policy for details.
                </li>
              </ul>
            </div>

          </div>
        </div>


      </div>


      {/* FOOTER SECTION */}
      <div className='px-[35rem] bg-[#F7F7F7]'>
        <FooterPrimary />
        <FooterSecondary />
      </div>
    </div >
  )
}

export default ViewCard