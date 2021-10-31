import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='my-5 container-fluid banner-container '>
        
            <div className='col-md-6 col-lg-6 sm-col-12 p-2'>
            <h3 className='text-warning text-start'>Enjoy Your</h3> <br />
            <h1 className='text-white text-start fs-1 fw-bold'>Vacation</h1>
            <h4 className='text-start text-light '>Enjoy your vacation! Take one of our tour packages specially designed for you, and sail over different places.
        <br />
        <br />
        
        <button className='btn btn-warning'> More About Tours </button></h4>

             </div>
            
        </div>
    );
};

export default Banner;