import React, { useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";


const PhoneNumber = ({showNumberPopup, setShowNumberPopup}) => {

    // TO STOP THE SCROLL WHEN POPUP IS ENABLED
    useEffect(() => {
      showNumberPopup ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
      return () => document.body.style.overflow = "auto";

    }, [showNumberPopup]);


  return (
    <div
      className='
          addPhoneNumberPopup
          w-full h-full
          flex items-center justify-center
          fixed top-0 right-0 z-1
          bg-black/50
          '>
      <div className='w-[70rem] h-[50rem] bg-white rounded-[4rem]'>

        {/* ADD A PHONE NUMBER */}
        <div
          className='
              text-[2rem] font-semibold
              grid grid-cols-[90%_10%] items-center justify-items-center
              py-[2rem]
              border-b-[1px] border-zinc-300
              '>
          <p className='ml-[7rem]'>Add a phone number
          </p>
          <RxCross2 onClick={() => setShowNumberPopup(false)} className='cursor-pointer' />
        </div>

        <div
          className="
              phoneNumberMainContent 
              w-full h-[calc(50rem-6rem)]
              flex items-center justify-center
              ">
          <div className='w-[80%] h-[70%]'>
            <p className='text-[1.8rem] mb-[4rem]'>We’ll send you trip updates and a text to verify this number.
            </p>
            <form action="">
              <label
                htmlFor="phoneNumber"
                className='text-[2rem]'
              >Phone number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="number"
                className="
                    w-full
                    p-[1rem_2rem] mt-[1rem]
                    text-[2rem]
                    border rounded-[1rem]
                    outline-none
                "/>

              <p className='text-[1.3rem] text-zinc-500 mt-[1rem]'>We'll text you a code to confirm your number. Standard message and data rates apply.
              </p>

              <button
                onClick={() => setShowNumberPopup(false)}
                className='
                    text-[2rem] text-white
                    w-[15rem] h-[5rem]
                    mt-[2rem]
                    cursor-pointer
                    rounded-[1rem]
                    bg-black
                '>Continue
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneNumber