import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postFetch } from '../../APP/Post/PostSlice';
import ProductListCard from './ProductListCard';

const ProductList = () => {


    const { isLoading, posts, error } = useSelector((state) => state.foodPosts)

    const disPatch = useDispatch()
    useEffect(() => {
        disPatch(postFetch())
    }, [])

    // const [foodsName, setfoodsName] = useState();
    // const { data: foodList = [] } = useQuery({
    //     queryKey: ['foodList'],
    //     queryFn: async () => {
    //         const res = await fetch("http://localhost:5000/foodList")
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    return (
        <div className='mb-6'>
            {isLoading && <h1 className='text-center m-8 font-semibold text-blue-500 text-4xl'>Loading...</h1>}
            {error && <h1 className='text-center m-8 font-semibold text-blue-500 text-4xl'>{error}</h1>}
            <h1 className='text-center font-thin text-5xl my-10'>Our Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:mx-8'>
                {posts &&
                    posts.map(foodName => <ProductListCard
                        key={foodName._id}
                        foodName={foodName}
                    ></ProductListCard>)
                }
            </div>
        </div>
    );
};

export default ProductList;