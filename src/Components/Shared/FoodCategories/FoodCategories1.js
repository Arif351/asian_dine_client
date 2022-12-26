import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const FoodCategories1 = () => {
    const params = useParams();

    const { data: foodCategories = [] } = useQuery({
        queryKey: ['foodList'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/foodList/${params.id}`)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    return (
        <div>

        </div>
    );
};

export default FoodCategories1;