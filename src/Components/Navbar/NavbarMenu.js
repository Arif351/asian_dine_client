import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import NavbarMenuList2 from './NavbarMenuList2';

const NavbarMenu = () => {

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
            <div>
                {
                    foodNamesDetails.map(eachFood => <NavbarMenuList2
                        key={eachFood._id}
                        eachFood={eachFood}
                    ></NavbarMenuList2>)
                }
            </div>
        </section>
    );
};

export default NavbarMenu;