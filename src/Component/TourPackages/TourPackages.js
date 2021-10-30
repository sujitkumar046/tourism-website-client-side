import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import Navbar from '../Shared/Navbar/Navbar';
import './TourPackages.css'



const TourPackages = () => {


    const [tourpackages, Settourpackages] = useState([])

    useEffect (() => {
        fetch('http://localhost:5000/services')
        .then (res => res.json())
        .then (data =>Settourpackages (data))
    }, [])
    

    

    return (
        <>
         <Navbar></Navbar>
        <div className='row'>
        <h2>Hello : Got the {tourpackages.length}</h2>

            {tourpackages.map (tour => 
            <div className='col-md-4 col-lg-4 col-sm-12 g-2'>
            <div className='card-group h-100'>
                <div className="card">
                    <img src={tour.img} className="card-img mx-auto d-block img-fluid" alt="" />
                    <div className='"card-body"'>
                        <h2 className='"card-title'>{tour.name}</h2>
                        <h5 className='card-text'>{tour.description}</h5>
                    </div>
                    <div className='card-footer'>
                        <Link to={`/detailedservices/${tour._id}`}>
                        <button>Book Now</button>
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

