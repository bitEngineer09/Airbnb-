import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { differenceInDays, format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

const BookDatePicker = ({ range, setRange }) => {
  const { startDate, endDate } = range;

  // total din calculate karne ka logic
  const daysCount = startDate && endDate
    ? differenceInDays(endDate, startDate)
    : 0;

  return (
    <div className="datePicker flex flex-col gap-[2rem] w-[39rem] h-[34rem] rounded-[1rem] ">
      <h1 
        className="
          text-[2rem]
          flex justify-center items-center
          bg-rose-500 text-white
          w-full h-[6rem]
          font-semibold
          rounded-t-[2rem]
        ">Choose date
      </h1>
      {/* Check-in Date */}
      <div className="flex flex-col px-[2rem]">
        <label className="font-semibold text-[2rem] mb-[0.3rem]">Check-in</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setRange({ ...range, startDate: date })}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MMMM d, yyyy"
          className="border w-full border-zinc-400 outline-none rounded-[1rem] text-[2rem] p-[1rem_1.5rem] cursor-pointer"
        />
      </div>

      {/* Check-out Date */}
      <div className="flex flex-col px-[2rem]">
        <label className="font-semibold text-[2rem] mb-[0.3rem]">Check-out</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setRange({ ...range, endDate: date })}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}  // check-out hammesha check-in ke baad hi ho
          dateFormat="MMMM d, yyyy"
          className="border w-full border-zinc-400 outline-none rounded-[1rem] text-[2rem] p-[1rem_1.5rem] cursor-pointer"
        />
      </div>

      {/* Total days */}
      <p className="text-[2rem] px-[2rem]">
        Total days: <strong className="text-rose-500">{daysCount > 0 ? daysCount : 0}</strong>
      </p>
      
    </div>
  );
};

export default BookDatePicker;
