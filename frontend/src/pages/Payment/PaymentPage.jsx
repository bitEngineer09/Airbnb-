import React, { useContext, useEffect, useState } from 'react';
import PaymentNav from '../../components/NavComponents/PaymentNav';
import { IoIosArrowBack } from "react-icons/io";
import FooterSecondary from '../../components/Footer/FooterSecondary';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { listingDataContext } from '../../context/ListingContext';
// import { useLocation } from 'react-router-dom';
import PriceBreakdown from '../../components/PopUp/PriceBreakdown';
import PhoneNumber from '../../components/PopUp/PhoneNumber';
import { toast } from 'react-toastify';


const PaymentPage = () => {

    // USE STATE
    const [showNumberPopup, setShowNumberPopup] = useState(false);
    const [showPriceBreakDownPopup, setShowPriceBreakDownPopup] = useState(false);

    const serviceFee = 400;
    // console.log(showNumberPopup)

    // USE PARAMS
    const { id } = useParams();

    // CONTEXT DATA
    const {
        handleSingleCardData,
        singleCardData,
        setSingleCardData,
    } = useContext(listingDataContext);

    // HANDLE CONFIRM PAYMENT
    const handleConfirm = () => {
        toast.success("💞 Booking Confirmed", {
            position: "top-center",
            autoClose: 3000,
            className: "text-[2rem] font-semibold"
        });
    };

    // USE LOCATION
    const location = useLocation();

    // Try to get from location.state first
    const paymentDataFromState = location.state;

    // If state is missing (e.g., after refresh), fallback to localStorage
    const fallbackData = JSON.parse(localStorage.getItem("paymentData") || {});

    // Use either state or fallback
    const paymentData = paymentDataFromState || fallbackData;

    // Destructure with fallback defaults to avoid crashes
    const {
        guests = 1,
        daysCount = 0,
        checkInDate = null,
        checkOutDate = null,
        totalRent = 0,
        taxAmount = 0
    } = paymentData;

    const convertedCheckInDate = new Date(checkInDate).toLocaleDateString();
    const newDate1 = new Date(convertedCheckInDate);

    const convertedCheckOutDate = new Date(checkOutDate).toLocaleDateString();
    const newDate2 = new Date(convertedCheckOutDate);


    const hostId = singleCardData?.host;
    // console.log(singleCardData)
    console.log(hostId);

    // NAVIGATE
    const navigate = useNavigate();


    //! NOTE => LOCATION
    //*Jab tum navigate('/some-page', { state: { data } }) use karte ho:
    //* Ye React Router ka temporary memory-based mechanism hai.
    //* Ye browser ke refresh ke baad ya direct URL visit pe kaam nahi karta.

    //* Tumne PaymentPage pe F5 ya refresh maar diya ❌
    //* Ab ye memory clear ho jaati hai.
    //* location.state ab undefined ho jaayega.
    //* Tumhare paas singleCardData nahi milega.
    //* Result: Error ya blank page.
    // const location = useLocation();
    // const singleCardData = location.state?.singleCardData;
    // if (!singleCardData) {
    //     // Redirect back if no data is found
    //     navigate(`/viewcard/${id}`);
    //     return null;
    // }
    // const { title, rent, city, image1 } = singleCardData || {}


    // INITALLY LOAD CURRENT LISTING DATA
    useEffect(() => {
        const fetchCurrentListingDetails = async (id) => {
            try {
                const result = await handleSingleCardData(id);
                setSingleCardData(result);
                console.log(result);
            } catch (error) {
                console.log("Error fetching current listing details: ", error);
            }
        }
        fetchCurrentListingDetails(id);

    }, [id]);


    // useEffect(() => {
    //     const fetchUserDetailsByhostId = async (hostId) => {
    //         try {
    //             const response = await handleUserByHostId(hostId);
    //             setUserDetails(response);
    //             console.log(response);
    //         } catch (error) {
    //             console.log("Error fetching user details by hostId: ", error);
    //         }
    //     }
    //     fetchUserDetailsByhostId(hostId);
    // }, [hostId]);

   

    return (
        <div className='w-full min-h-screen'>
            {/* NAV */}
            <PaymentNav />

            {/* CONFIRM & PAY */}
            <div className='paymentHeading flex items-center gap-[2rem] my-[4rem] px-[28rem]'>
                <IoIosArrowBack
                    onClick={() => navigate(`/viewcard/${id}`)}
                    className='
                        text-[3rem]
                        hover:bg-zinc-100
                        size-[5rem]
                        p-[1rem]
                        rounded-full
                    '/>
                <h1 className='text-[4rem]'>Confirm and pay
                </h1>
            </div>

            <div className="paymentContent px-[35rem] w-full grid grid-cols-2 ">
                <div className="leftPaymentCard ">
                    <h2 className='text-[3rem] font-medium'>Your trip
                    </h2>

                    {/* CONFIRM DATES */}
                    <div
                        className="
                            confirmDates
                            w-[100%]
                            py-[2.7rem]
                            flex flex-col
                            gap-[3rem]
                            text-[2rem]
                            border-b-[1px] border-zinc-200
                        ">

                        {/* DATES SECITON */}
                        <div className="dates flex justify-between items-center">
                            <div className='flex flex-col gap-[1rem]'>
                                <h3>Dates
                                </h3>
                                <p className='font-semibold text-rose-500'>
                                    {`
                                    ${newDate1.getDate()}
                                    ${newDate1.toLocaleString("default", { month: "short" })}
                                        - 
                                    ${newDate2.getDate()}
                                    ${newDate2.toLocaleString("default", { month: "short" })}
                                    `}
                                </p>
                            </div>
                            <span className='underline font-medium cursor-pointer'>Edit
                            </span>
                        </div>

                        {/* GUESTS SECTION */}
                        <div className="guests flex justify-between items-center">
                            <div className='flex flex-col gap-[1rem]'>
                                <h3>Guests
                                </h3>
                                <p>{`${guests}`} Guest
                                </p>
                            </div>
                            <span className='underline font-medium cursor-pointer'>Edit
                            </span>
                        </div>

                    </div>


                    {/* PHONE NUMBER */}
                    <div className="phoneNumber py-[2.8rem]">
                        <h2 className='text-[3rem] font-medium'>Required for you trip</h2>
                        <div
                            className="
                                enterPhoneNumber
                                pt-[2.8rem] pb-[4rem]
                                flex justify-between items-center
                                border-b-[1px] border-zinc-200
                                ">
                            <div>
                                <h1 className='text-[1.8rem]'>Phone number
                                </h1>
                                <p className='text-[1.5rem]'>Add and comfirm your phone number to get trip updates
                                </p>
                            </div>
                            <div
                                onClick={() => setShowNumberPopup(true)}
                                className="
                                    addBtn
                                    w-[7rem] h-[3.5rem]
                                    flex items-center justify-center
                                    border rounded-[1rem]
                                    text-[1.5rem]
                                    cursor-pointer 
                                    hover:bg-zinc-100
                                ">
                                Add
                            </div>
                        </div>
                    </div>


                    {/* ADD BTN POPUP */}
                    {
                        showNumberPopup
                            ?
                            <PhoneNumber
                                showNumberPopup={showNumberPopup}
                                setShowNumberPopup={setShowNumberPopup}
                            />
                            :
                            ""
                    }

                    {/* CANCELLATION POLICY */}
                    <div className="phoneNumber py-[2.8rem]">
                        <h2 className='text-[3rem] font-medium'>Cancellation policy
                        </h2>
                        <div
                            className="
                                enterPhoneNumber
                                pt-[2.8rem] pb-[4rem]
                                flex justify-between items-center
                                border-b-[1px] border-zinc-200
                                ">
                            <p className='text-[1.8rem]'>
                                <span className='font-semibold'>Free cancellation before
                                    {`
                                    ${newDate1.getDate() - 1}
                                    ${newDate1.toLocaleString("default", { month: "short" })},
                                    `}
                                </span>
                                Cancel before check-in on
                                {`
                                    ${newDate1.getDate() }
                                    ${newDate1.toLocaleString("default", { month: "short" })},
                                    `}
                                for a partial refund.{" "}
                                <span className='underline font-medium'>Learn more
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* GROUND RULES */}
                    <div className="phoneNumber py-[2.8rem]">
                        <h2 className='text-[3rem] font-medium'>Ground rules
                        </h2>
                        <div
                            className="
                                enterPhoneNumber
                                pt-[2.8rem] pb-[4rem]
                                flex flex-col justify-between gap-[1.8rem]
                                border-b-[1px] border-zinc-200
                                ">
                            <p className='text-[1.8rem]'>We ask every guest to remember a few simple things about what makes a great guest.
                            </p>
                            <ul className='list-disc ml-[2rem]'>
                                <li className='text-[1.8rem]'>Follow the house rules
                                </li>
                                <li className='text-[1.8rem]'>Treat your Host’s home like your own
                                </li>
                            </ul>
                        </div>
                    </div>


                    {/* PRIVACY AND POLICY */}
                    <div className="phoneNumber py-[2.8rem] flex flex-col gap-[3.5rem]">
                        <p className='text-[1.3rem]'>
                            By selecting the button below, I agree to the{" "}
                            <span className='underline font-medium'>Host's House Rules, Ground rules for guests, Airbnb's Rebooking and Refund Policy
                            </span> and that Airbnb can{" "}
                            <span className='underline font-medium'>charge my payment method
                            </span>
                            if I’m responsible for damage.
                        </p>


                        {/* CONFIRM AND PAY */}
                        <button
                            onClick={() => {
                                handleConfirm();
                                // navigate('/');
                            }}
                            className='
                                    w-[27rem] h-[6.5rem]
                                    text-[2.4rem] font-medium
                                    bg-rose-500
                                    text-white
                                    rounded-[1rem]
                                    cursor-pointer
                                    '>Confirm and pay
                        </button>
                    </div>
                </div>

                {/* RIGHT PAYMENT SECTION */}
                <div className="rightPaymentCard pl-[10rem] sticky top-[10rem] h-fit">
                    <div
                        className='
                            grid grid-rows-[28%_44%_28%]
                            w-[100%]
                            px-[2.5rem] py-[1.5rem]
                            border border-zinc-300 rounded-[2rem]
                        '>

                        {/* IMAGE SECTION */}
                        <div
                            className='
                                grid grid-cols-[30%_70%] items-center
                                border-b-[1px] border-zinc-300
                            '>
                            <img
                                src={singleCardData?.image1}
                                alt=""
                                className='rounded-[2rem] object-cover size-[10rem]
                            '/>
                            <div>
                                <h2 className='text-[1.8rem] font-medium'>{singleCardData?.title}
                                </h2>
                                <p className='text-[1.6rem]'>{singleCardData?.category}
                                </p>
                            </div>
                        </div>

                        {/* TOTALS SECTION */}
                        <div className='border-b-[1px] pt-[1.5rem] border-zinc-300 '>
                            <h2 className='text-[3rem] font-medium mb-[2rem]'>Your total
                            </h2>
                            <p className='text-[1.7rem] font-medium'>Price Details
                            </p>

                            <div className='flex flex-col gap-[1.7rem] mt-[0.7rem]'>
                                <div className='flex justify-between text-[1.9rem]'>
                                    <div>{daysCount} days x ₹ {singleCardData.rent}
                                    </div>
                                    <div>₹ {totalRent.toLocaleString()}
                                    </div>
                                </div>
                                <div className='flex justify-between text-[1.9rem]'>
                                    <div>Taxes
                                    </div>
                                    <div>₹{taxAmount.toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            {/* TOTAL INR */}
                            <div className="totalInr text-[1.7rem] font-medium pt-[4rem] pb-[2rem] ">
                                <div className='flex justify-between'>
                                    <p>{`Total (INR)`}
                                    </p>
                                    <p>₹ {(totalRent + taxAmount + serviceFee).toLocaleString()}
                                    </p>
                                </div>
                                <div
                                    onClick={() => setShowPriceBreakDownPopup(true)}
                                    className='priceBreakDown text-end mt-[2rem] underline cursor-pointer relative z-10' >Price breakdown
                                </div>
                                {
                                    showPriceBreakDownPopup
                                        ? <PriceBreakdown
                                            setShowPriceBreakDownPopup={setShowPriceBreakDownPopup}
                                            showPriceBreakDownPopup={showPriceBreakDownPopup}
                                            daysCount={daysCount}
                                            checkInDate={convertedCheckInDate} checkOutDate={convertedCheckOutDate}
                                            totalRent={totalRent}
                                            serviceFee={serviceFee}
                                            taxAmount={taxAmount}
                                            total={totalRent + taxAmount + serviceFee}
                                        />
                                        : ""
                                }
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className='px-[35rem] mt-[6rem] bg-[#F7F7F7]'><FooterSecondary />
            </div>

        </div>
    )
}

export default PaymentPage