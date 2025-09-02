import React, { useContext, useState } from 'react';
import { GiFamilyHouse, GiMushroomHouse, GiVikingLonghouse } from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";
import { MdBedroomParent, MdOutlineBedroomChild } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { FaShop } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import { listingDataContext } from '../../context/ListingContext';
import ListingPageNav from '../../components/ListingPageComponents/ListingPageNav';

const EditCardPage1 = () => {

    const {id} = useParams();

    // USE STATES
    const [selectedCategory, setSelectedCategory] = useState("");
    console.log("selectedCategory", selectedCategory);
    //? const [category, setCategory] = useState("");


    // CONTEXT DATA
    const {category, setCategory} = useContext(listingDataContext);
    //? console.log("category", category);


    // NAVIGATE
    const navigate = useNavigate();


    return (
        // MAIN CONTAINER
        <div className='w-full h-screen'>

            {/* LISTING PAGE NAV */}
            <ListingPageNav />

            {/* CONTENT CONTAINER */}
            <div className="listingPage1Container">
                <h1 className='text-[4.5rem] mt-[12rem] font-semibold text-center'>Change your category
                </h1>
                <div
                    className="
                        categoryContainer
                        grid grid-cols-3 items-center justify-items-center 
                        gap-y-[3rem]
                        w-[102rem]
                        mx-auto mt-[4rem]
                        ">
                    {[
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
                            onClick={() => {
                                setSelectedCategory(item.value);
                                setCategory(item.value);
                            }}
                            key={index}
                            className={`
                                text-[4.5rem] font-semibold text-nowrap
                                flex flex-col items-start justify-center
                                h-[15rem] w-[30rem]
                                px-[2rem]
                                
                                tracking-wide
                                cursor-pointer
                                rounded-[1rem]
                                ${
                                    selectedCategory === item.value 
                                    ? "bg-zinc-100 border-[2px] border-black"
                                    : "hover:bg-white hover:border-[2px] hover:border-black border border-zinc-300"
                                }
                            `}
                        >
                            {item.icon}
                            <h3 className='text-[2rem]'>{item.label}</h3>
                        </div>
                    ))}
                </div>
            </div>


            {/* BOTTOM NAV */}
            <div
                className='
                bottomNav
                fixed bottom-0
                w-[100%] h-[11rem]
                px-[5rem]
                flex justify-between items-center
                text-[2.6rem]
                border-t-[1px] border-zinc-200 bg-white
            '>
                <div onClick={() => navigate(`/viewcard/${id}`)} className='underline cursor-pointer'>Back</div>
                <button
                    className='
                    w-[15rem] h-[6rem] rounded-[1rem]
                    bg-rose-500 text-white
                    cursor-pointer
                '
                    onClick={() => 
                        category ? navigate(`/editcardpage2/${id}`) : alert("Please choose one of the categories.")
                    }
                >Edit
                </button>
            </div>

        </div>
    )
}

export default EditCardPage1;