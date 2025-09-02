import React from "react";
import { DateRange } from "react-date-range";
import { differenceInDays } from "date-fns";

const BookingDatePicker = ({ range, setRange }) => {
  // Din count karne ka logic
  const daysCount = differenceInDays(range[0].endDate, range[0].startDate);

  return (
    <div className="flex flex-col gap-4 p-4">
      <DateRange
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={range}
        onChange={(item) => setRange([item.selection])}
      />
      {/* <p className="text-lg">
        Total days: <strong>{daysCount > 0 ? daysCount : 0}</strong>
      </p> */}
    </div>
  );
};

export default BookingDatePicker;
