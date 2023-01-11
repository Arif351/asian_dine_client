import React from 'react';

const TimeSlots = ({ timeSlot, handleTimeSlot }) => {

    const { slots } = timeSlot;
    console.log();

    return (
        <div>
            <button onClick={() => handleTimeSlot(timeSlot)} className="btn btn-outline rounded-full">{slots}</button>
        </div>
    );
};

export default TimeSlots;