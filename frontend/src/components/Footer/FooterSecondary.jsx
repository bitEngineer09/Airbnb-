import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const FooterSecondary = () => {
  return (
    <div
      className='
        w-[100%] h-[10rem]
        flex justify-between items-center
        text-[1.6rem]
        bg-[#F7F7F7]
        border-zinc-200
      '>
        
      {/* LEFT SECTION */}
      <div className='flex justify-center items-center gap-[2rem]'>
        <p>© 2025 Airbnb, Inc.</p>
        <ul className='flex gap-[2rem]'>
          <li className='hover:underline cursor-pointer'>Privacy</li>
          <li className='hover:underline cursor-pointer'>Terms</li>
          <li className='hover:underline cursor-pointer'>Sitemap</li>
          <li className='hover:underline cursor-pointer'>Company details</li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className='flex gap-[2rem] justify-center items-center'>
        <div className="rupees flex font-semibold">
          <p>₹</p>
          <span>INR</span>
        </div>
        <FaFacebook className='text-[1.8rem] hover:bg-zinc-200 cursor-pointer size-[4rem] p-[1rem] rounded-full' />
        <FaXTwitter className='text-[1.8rem] hover:bg-zinc-200 cursor-pointer size-[4rem] p-[1rem] rounded-full' />
        <FaInstagram className='text-[1.8rem] hover:bg-zinc-200 cursor-pointer size-[4rem] p-[1rem] rounded-full' />
      </div>
    </div>
  )
}

export default FooterSecondary;