import React, { useRef } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const AddServices = () => {

    const nameRef = useRef();
    const durationRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imgRef =useRef();

    const handlePost = (e) => {
        e.preventDefault ();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const duration = durationRef.current.value;

        const description = descriptionRef.current.value;
        const img = imgRef.current.value;

        const newpackage = {name, duration, price, description, img}
        fetch ('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify(newpackage)

        })
        .then (res=> res.json())
        .then (data => {
            if (data.insertedId) {
                alert ('Successfully created the newpackage')
                e.target.reset()
            }
        } )



    }


    return (

        <>
        <Navbar></Navbar>
        <div className='container-fluid my-5'>
           <h1> Add Your Services Here!</h1> 
            <form onSubmit={handlePost}>
            <input className='w-50' type="text" ref={nameRef} placeholder='name' /> <br /> <br />
            <input className='w-50' type="text" ref={priceRef} placeholder='price' /> <br /> <br />
            <input  className='w-50'type="text" ref={durationRef} placeholder='duration' /> <br /> <br />
            <input className='w-50' type="text" ref={descriptionRef} placeholder='description' /><br /> <br />
            <input className='w-50' type="text" ref={imgRef} placeholder='img URL' /> <br /> <br />
            <button className='btn btn-primary' type="submit">Submit</button>



            </form>
            



            
        </div>
        <Footer></Footer>
        </>
    );
};

export default AddServices;