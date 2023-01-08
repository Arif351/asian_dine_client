import React from 'react';

const TimeSlots = ({ timeSlot }) => {
    const { slots } = timeSlot;
    console.log(slots);
    return (
        <div>
            <button className="btn btn-outline btn-warning rounded-full">{slots}</button>
        </div>

    );
};

export default TimeSlots;