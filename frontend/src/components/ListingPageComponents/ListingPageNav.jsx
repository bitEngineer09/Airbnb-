import React from 'react'
import airbnbBlack from "../../assets/navAssets/airbnbBlack.png"
import { useNavigate } from 'react-router-dom'


const ListingPageNav = () => {

    const navigate = useNavigate();

    return (
        <div
            className='
                    fixed top-0
                    bg-white
                    listingNavContainer
                    w-full h-[9rem]
                    flex items-center
                    px-[5rem]
                    border-b-[1px] border-zinc-200
                    '>
            <div className="listingNavLogo">
                <img
                    src={airbnbBlack}
                    alt=""
                    className='size-[5rem] cursor-pointer' 
                    onClick={() => navigate('/')}
                    />
            </div>
        </div>
    )
}

export default ListingPageNav