import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postFetch } from '../APP/Post/PostSlice';
import EachFoodDetails from './EachFoodDetails';

const AllFoodLists = () => {

    // const { isLoading, posts, error } = useSelector((state) => state.foodPosts)
    // const { id } = useParams()
    // const disPatch = useDispatch()

    // useEffect(() => {
    //     disPatch(postFetch())
    // }, [])

    const params = useParams()
    const { data: foodNamesDetails = [] } = useQuery({
        queryKey: ['foodList'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/foodList/${params.id}`)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    return (
        <section className=''>
            {/* {isLoading && <h1 className='text-center m-8 font-semibold text-blue-500 text-4xl'>Loading...</h1>}
            {isLoading && <h1 className='text-center m-8 font-semibold text-blue-500 text-4xl'>{error}</h1>} */}

            <div>
                {foodNamesDetails &&
                    foodNamesDetails.map(eachFood => <EachFoodDetails
                        key={eachFood._id}
                        eachFood={eachFood}
                    ></EachFoodDetails>)
                }
            </div>
        </section>
    );
};

export default AllFoodLists;