import React, { useRef } from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const AddServices = () => {

    const nameRef = useRef();
    const descriptionRef = useRef();
    const imgRef =useRef();

    const handlePost = (e) => {
        e.preventDefault ();
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;

        const newpackage = {name, description, img}
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

            <form onSubmit={handlePost}>
            <input type="text" ref={nameRef} placeholder='name' /> <br /> <br />
            <input type="text" ref={descriptionRef} placeholder='description' /><br /> <br />
            <input type="text" ref={imgRef} placeholder='img URL' /> <br /> <br />
            <button type="submit">Submit</button>



            </form>
            



            
        </div>
        </>
    );
};

export default AddServices;