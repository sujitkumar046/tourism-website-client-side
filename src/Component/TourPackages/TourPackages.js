import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import Navbar from '../Shared/Navbar/Navbar';
import './TourPackages.css'



const TourPackages = () => {


    const [tourpackages, Settourpackages] = useState([])

    useEffect (() => {
        fetch('https://gentle-garden-76977.herokuapp.com/services')
        .then (res => res.json())
        .then (data =>Settourpackages (data))
    }, [])
    

    

    return (
        <>
         <Navbar></Navbar>
        <div className='row container-fluid '>
        <h2>Hello : Got the {tourpackages.length}</h2>

            {tourpackages.map (tour => 
            <div className='col-md-4 col-lg-4 col-sm-12 g-2 p-1'>
            <div className='card-group h-100 m-1'>
                <div className="card">
                    <img src={tour.img} className="card-img mx-auto d-block img-fluid" alt="" />
                    <div className='"card-body"'>
                        <h3 className='"card-title'>{tour.name}</h3>
                        <h5 className='card-text'>{tour.duration}</h5>
                        <h3>Price: ${tour.price}   </h3>
                    </div>
                    <div className='card-footer'>
                        <Link to={`/detailedservices/${tour._id}`}>
                        <button className='btn btn-warning'>Book Now</button>
                        </Link>

                    </div>


                </div>

            </div>


        </div>)
}


        </div>
            
            
           
        </>
    );
};

export default TourPackages;

