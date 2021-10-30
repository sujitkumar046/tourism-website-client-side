import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hook/UseAuth';
import Navbar from '../Shared/Navbar/Navbar';

const DetailedService = () => {

    const {packageID} = useParams();
    const {user} =useAuth();

    const [details, Setdetails] = useState({})

   

     useEffect (() => {
        fetch(`http://localhost:5000/services/${packageID}`)
        .then (res=> res.json())
        .then (data => Setdetails(data))
     }, [packageID])
    return (
        <>
        <Navbar></Navbar>

        <div className='row container-fluid g-4'>
            <div className='col-md-6 cole-md-4 col-sm-12'>
            <img className='img-fluid' src={details?.img} alt="" />
            <h2>{details?.name}</h2>
            <h4>This is booking {details?.description}</h4>
            </div>

            <div className='col-md-6 cole-md-4 col-sm-12'>
            <form >
            <input className='w-75' type="text" value={user.displayName} placeholder='name' /> <br /> <br />
            <input className='w-75' type="text" value={user.email} placeholder='description' /><br /> <br />
            <input className='w-75' type="text"  placeholder='img URL' /> <br /> <br />
            <button className='btn btn-primary' type="submit">Book Now</button>



            </form>
            


            </div>

        </div>

           
        </>
    );
};

export default DetailedService;