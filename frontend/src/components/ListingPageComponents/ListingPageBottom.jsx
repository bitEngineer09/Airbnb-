import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListingPageBottom = () => {

    const navigate = useNavigate();

    return (
        <div
            className='
                bottomNav
                absolute bottom-0
                w-[100%] h-[100%]
                px-[5rem]
                flex justify-between items-center
                text-[2.6rem]
            '>
            <div onClick={() => navigate('/')} className='underline'>Back</div>
            <button 
                className='
                    w-[15rem] h-[6rem] rounded-[1rem]
                    bg-black text-white
                    cursor-pointer
                '
                onClick={() => navigate('/listingpage2')}
                >Next</button>
        </div>
    )
}

export default ListingPageBottom