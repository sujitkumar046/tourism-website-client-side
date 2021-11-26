import React, { useEffect, useState } from 'react';

const BookFlights = () => {

    const [flights, Setflights] = useState([])
    useEffect (() => {
        fetch('https://gentle-garden-76977.herokuapp.com/flights')
        .then (res =>res.json())
        .then (data => Setflights(data))
    }, [])

    return (
        <>
        <div className=" row container-fluid my-5"> 
        <h5 className='text-primary'>Book Your</h5>
        <h1 className='fs-1 fw-bold'>Flights</h1>

        {
            flights.map (flight => 
            <div className='col-md-3 col-lg-3 col-sm-12'>
                <div className='card-group h-100 m-1'>
                    <img className='img-fluid' src={flight.img} alt="" />
                    <h2>{flight.name}</h2>
                    <button className='ms-center btn btn-danger'>Book Flights</button>
                </div>


            </div>)
        }

            
        </div>
        </>
    );
};

export default BookFlights;