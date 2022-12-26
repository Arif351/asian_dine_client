import React, { createContext, useState } from 'react';
import { Link } from 'react-router-dom';

export const FoodContext = createContext()

const ProductListCard = ({ foodName }) => {


    const { cover_img, food_name, _id } = foodName;

    return (
        <div className="card bg-base-100 shadow-xl image-full productList">
            <figure><img src={cover_img} alt="" className='' /></figure>
            <div className="card-body">
                <p></p>
                <div className="card-actions justify-center gap-7 items-center">
                    <Link to={`/foodList/${_id}`}><h2 className="card-title text-3xl font-mono hover:text-yellow-400">{food_name}</h2></Link>
                    {/* <button className="btn btn-outline btn-warning">Order Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductListCard;