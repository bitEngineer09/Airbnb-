import React, { useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";


const PriceBreakdown = ({ showPriceBreakDownPopup, setShowPriceBreakDownPopup, daysCount, checkInDate, checkOutDate, serviceFee, taxAmount, total, totalRent }) => {

    const date1 = new Date(checkInDate);
    // const month1 = date1.getMonth();
    const date2 = new Date(checkOutDate);
    // console.log(date.getDate());

    useEffect(() => {
        showPriceBreakDownPopup ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
        return () => document.body.style.overflow = "auto"
    }, [showPriceBreakDownPopup])

    return (

        <div
            className='
                addPhoneNumberPopup
                w-full h-full
                flex items-center justify-center
                fixed top-0 right-0 z-1
                bg-black/50
            '>
            <div className='w-[70rem] h-[37rem] bg-white rounded-[4rem]'>

                {/* ADD A PHONE NUMBER */}
                <div
                    className='
                        text-[2rem] font-semibold
                        grid grid-cols-[90%_10%] items-center justify-items-center
                        py-[2rem]
                        border-b-[1px] border-zinc-300
                        '>
                    <p className='ml-[7rem]'>Price breakdown
                    </p>
                    <RxCross2 onClick={() => setShowPriceBreakDownPopup(false)} className='cursor-pointer' />
                </div>

                <div className="w-full h-[calc(500px-71px)] p-[3rem] text-[2rem] font-light">
                    <div className="priceInfo flex flex-col gap-[3rem] border-b-[1px] border-zinc-300 pb-[3rem]">
                        <div className='flex justify-between'>
                            <p>
                                {daysCount} days: {date1.getDate()} {date1.toLocaleString('default', { month: 'short' })} – {date2.getDate()} {date2.toLocaleString('default', { month: 'short' })}
                            </p>

                            <span>{totalRent.toLocaleString()}
                            </span>
                        </div>

                        <div className='flex justify-between'>
                            <p>Airbnb service fee
                            </p>
                            <span>₹{serviceFee.toLocaleString()}
                            </span>
                        </div>

                        <div className='flex justify-between'>
                            <p className='underline'>Taxes
                            </p>
                            <span>₹{taxAmount.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div className="total flex justify-between font-medium pt-[3rem]">
                        <p>Total
                        </p>
                        <span>₹{total.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default PriceBreakdown;