import React from 'react';

const TimeSlots = ({ timeSlot, handleTimeSlot }) => {

    const { slots } = timeSlot;


    return (
        <div>
            <div>
                <button onClick={() => handleTimeSlot(timeSlot)} className="btn btn-outline rounded-full" disabled={slots.length === 0}>{slots}</button>
            </div>
            {/* <div>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
            </div> */}
        </div>
    );
};

export default TimeSlots;