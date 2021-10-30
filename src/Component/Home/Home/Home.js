import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <>

            <Navbar></Navbar>
            <Banner></Banner>
            <Packages></Packages>
            <Footer></Footer>
            
        </>
    );
};

export default Home;