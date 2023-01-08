import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import AllItems from './AllItems';

const EachFoodDetails = ({ eachFood }) => {
    const [foodList, setFoodList] = useState();
    const { see_more, food_name } = eachFood;
    console.log(see_more);

    return (
        <div className='w-10/12 mx-auto mb-10'>
            <h1 className='text-center text-3xl font-semibold text-orange-600 my-5'> {food_name} Pack</h1>
            <div className="divider divide-red-500 w-11/12 mx-auto mb-4"></div>
            <div className='grid grid-cols-1 gap-4 lg:mx-8'>
                {
                    see_more.map(allItems => <AllItems
                        key={allItems.unid}
                        allItems={allItems}
                        foodList={allItems}
                    ></AllItems>)
                }
                {/* <Navbar setFoodList={setFoodList}></Navbar> */}
            </div>
        </div>
    );
};

export default EachFoodDetails;