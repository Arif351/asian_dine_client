import React from 'react';
import BookingSection from '../Shared/BookingSection/BookingSection';
import Caruosel from '../Shared/Caruosel/Caruosel';
import Chef from '../Shared/Chef/Chef';
import Features from '../Shared/Features/Features';
import ProductList from '../Shared/ProductList/ProductList';

const Home = () => {
    // const { state } = useProduct();
    // console.log(state);
    return (
        <div>
            <Caruosel></Caruosel>
            <ProductList></ProductList>
            <BookingSection></BookingSection>
            <Features></Features>
            <Chef></Chef>
        </div>
    );
};

export default Home;