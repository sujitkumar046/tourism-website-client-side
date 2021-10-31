import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import BookFlights from '../BookFlights/BookFlights';
import Packages from '../Packages/Packages';
import PlacesToGo from '../PlacestoGo/PlacesToGo';

const Home = () => {
    return (
        <>

            <Navbar></Navbar>
            <Banner></Banner>
            <Packages></Packages>
            <PlacesToGo></PlacesToGo>
            <BookFlights></BookFlights>
            <Footer></Footer>
            
        </>
    );
};

export default Home;