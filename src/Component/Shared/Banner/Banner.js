import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='row my-5 container-fluid'>
            <div className='col-md-6 col-lg-6 sm-col-12'>
                <img className='img-fluid' src="https://jthemes.net/themes/html/medservices/files/images/hero-1-img.png" alt="" />

            </div >

            <div className='col-md-6 col-lg-6 sm-col-12 p-2'>
            <h4 className='text-primary text-start'>Welcome Our Clinic</h4> <br />
            <h1 className='text-success text-start fs-1 fw-bold'>TAKE CARE OF YOUR HEALTH</h1>
            <p className=' text-start '>This is our clinic, we provide top notch treatment to our patient around the world. Our high-class doctors are always ready to give you best treatment. We're unmatched in the world, when it comes to diagnstic and pathology.
        <br />
        <br />
        
        <button className='btn btn-dark'> More About Clinic </button></p>

             </div>
            
        </div>
    );
};

export default Banner;