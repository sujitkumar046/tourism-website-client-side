import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useRef } from 'react/cjs/react.development';
import useAuth from '../../Hook/UseAuth';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const DetailedService = () => {

    const {packageID} = useParams();
    const {user} =useAuth();

    const [details, Setdetails] = useState({})

   

     useEffect (() => {
        fetch(`https://gentle-garden-76977.herokuapp.com/services/${packageID}`)
        .then (res=> res.json())
        .then (data => Setdetails(data))
     }, [packageID])


    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef =useRef();
    const packageRef = useRef();
    

    const handleOrder = (e) => {
        e.preventDefault ();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const pack = packageRef.current.value;
        

        const newOrder = {name, email, phone, pack}
        fetch ('https://gentle-garden-76977.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify(newOrder)

        })
        .then (res=> res.json())
        .then (data => {
            if (data.insertedId) {
                alert ('Successfully placed the order')
                e.target.reset()
            }
        } )



    }


    return (
        <>
        <Navbar></Navbar>

        <div className='row container-fluid mt-5 '>
            <div className='col-md-6 cole-md-4 col-sm-12 border mb-5'>
            <img className='img-fluid' src={details?.img} alt="" />
            <h2 className='text-primary mt-2'>{details?.name}</h2>
            <h4 className='text-success mt-2'>{details?.duration}</h4>
            <h3 className='text-danger'> Price: ${details?.price}</h3>
            <h6 className='text-start'>This is booking {details?.description}</h6>
            </div>

            <div className='col-md-6 cole-md-4 col-sm-12 border mb-5'>
                <h4 className='text-center text-success'>Please fill the required field to place the order!</h4>
                <br />
            <form onSubmit={handleOrder} >
            <input className='w-75' ref={packageRef} type="text" value={details?.name} placeholder='name' /> <br /> <br />
            <input className='w-75' ref={nameRef} type="text" value={user.displayName} placeholder='name' /> <br /> <br />
            <input className='w-75' ref={emailRef} type="text" value={user.email} placeholder='description' /><br /> <br />
            <input className='w-75' ref={phoneRef} type="text"  placeholder='Phone' required /> <br /> <br />
            
            <button className='btn btn-primary' type="submit">Book Now</button>



            </form>
            


            </div>

        </div>
        <Footer></Footer>

           
        </>
    );
};

export default DetailedService;