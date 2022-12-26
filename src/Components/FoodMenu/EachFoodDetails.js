import React from 'react';
import AllItems from './AllItems';

const EachFoodDetails = ({ eachFood }) => {
    const { see_more } = eachFood;
    console.log(see_more);

    return (
        <div className='grid grid-cols-1  gap-4 lg:mx-8'>
            {
                see_more.map(allItems => <AllItems
                    key={allItems.unid}
                    allItems={allItems}

                ></AllItems>)
            }
        </div>
    );
};

export default EachFoodDetails;