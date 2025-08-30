import React, { useContext, useState } from 'react';
import { FaFire } from "react-icons/fa6";
import { GiFamilyHouse, GiMushroomHouse, GiVikingLonghouse } from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";
import { MdBedroomParent, MdOutlineBedroomChild } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { FaShop } from "react-icons/fa6";
import { listingDataContext } from '../../context/ListingContext';

const NavSecondary = () => {

    // USE STATES
    const [selectedCategory, setSelectedCategory] = useState(null);

    // CONTEXT DATA
    const { listings, setListings, filteredListings, setFilteredListings } = useContext(listingDataContext);


    const handleFilteredListings = (category) => {
        setSelectedCategory(category);
        if (category === "trending") {
            setFilteredListings(listings);
        } else {
            setFilteredListings(
                listings.filter((item) => item.category === category)
            )
        }
    };



    return (
        <>
            {[
                { icon: <FaFire />, label: "Trending", value: "trending" },
                { icon: <GiFamilyHouse />, label: "Villa", value: "villa" },
                { icon: <GiMushroomHouse />, label: "Farm House", value: "farm house" },
                { icon: <TbSwimming />, label: "Pool House", value: "pool house" },
                { icon: <MdBedroomParent />, label: "Rooms", value: "rooms" },
                { icon: <BiBuildingHouse />, label: "Flat", value: "flat" },
                { icon: <MdOutlineBedroomChild />, label: "PG", value: "pg" },
                { icon: <GiVikingLonghouse />, label: "Cabins", value: "cabins" },
                { icon: <FaShop />, label: "Shops", value: "shops" },
            ].map((item, index) => (
                <div
                    onClick={() => handleFilteredListings(item.value)}
                    key={index}
                    className={`
                            text-[4rem]
                            flex
                            flex-col
                            items-center
                            justify-center
                            font-semibold
                            tracking-wide
                            pb-[0.2rem]
                            cursor-pointer
                            hover:bg-zinc-200 hover:transition duration-300
                            h-[8rem] w-[10rem]
                            rounded-[1rem]
                            text-nowrap
                        `}
                >
                    {item.icon}
                    <h3 className='text-[1.3rem]'>{item.label}</h3>
                </div>
            ))}
        </>
    )
}

export default NavSecondary