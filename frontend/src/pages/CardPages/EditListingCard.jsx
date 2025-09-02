import React, { useContext } from 'react';
// import heart from '../../assets/heart.png'
import { listingDataContext } from '../../context/ListingContext';
import { useNavigate } from 'react-router-dom';
import { GoHeartFill } from "react-icons/go";

const EditListingCard = ({ id, title, rent, city, landmark, image }) => {

    // CONTEXT DATA
    const { handleSingleCardData } = useContext(listingDataContext);

    // NAVIGATE
    const navigate = useNavigate();

    return (
        <div
            onClick={() => {
                handleSingleCardData(id);
                navigate(`/editviewcard/${id}`);
            }}
            className='
            w-[26rem]
            flex flex-col gap-[1rem]
            cursor-pointer
            '>
            <div className="cardImage overflow-hidden rounded-[2rem] relative">
                <img
                    src={image}
                    alt=""
                    className='
                        w-[100%] h-[23rem]
                        rounded-[2rem]
                        object-cover
                    '/>
                {/* <img
                    src={heart}
                    alt=""
                    className='
                        w-[2.8rem]
                        absolute top-[1.6rem] right-[1.6rem]
                        hover:scale-115 hover:ease-in duration-80
                    '/> */}
                <GoHeartFill className='
                        text-[2.5rem] text-rose-500
                        absolute top-[1.6rem] right-[1.6rem]
                        hover:scale-115 hover:ease-in-out duration-100
                    '/>
            </div>
            <div className='cardDetails ml-[0.5rem]'>
                <p
                    className='
                        listingLocation
                        text-[1.8rem]
                        tracking-wide
                    '>{`Flat in ${city}`}</p>

                <p className='text-[1.8rem] text-zinc-600'>{`₹${rent}`}</p>
            </div>
        </div>
    )
}

export default EditListingCard;