import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const MangeOrder = () => {

    const [allorders, Setallorders] = useState([]);
    useEffect (()=> {
        fetch('http://localhost:5000/orders')
        .then (res=>res.json())
        .then (data => Setallorders (data))
    }, [])
 

    const handleOrders = (id) => {

        const proceed = window.confirm ('Are you sure to delete')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, 
        {
            method: 'DELETE'
        })
        .then (res =>res.json())
        .then (data => {
            if (data.deletedCount > 0) {
                alert('order cancelled SuccessfullY')
                const restOrders = allorders.filter (allorder => allorder._id !== id)
                Setallorders(restOrders)
            }
        })

        }

        
    }



    return (

        <>
        <Navbar></Navbar>
        <div className='row container-fluid'>
            <h2>Here are all the orders : {allorders.length}</h2>
            {
                allorders.map (singleorder => 
                <div className='col-md-3 col-lg-3 col-sm-6 border'>
                    <h4>Hello {singleorder.name}</h4>
                    <h5>Your Order: {singleorder?.pack}</h5>
                    <button onClick={() => {handleOrders(singleorder._id)}} className='btn btn-danger'>Delete</button>

                </div>)
            }
        </div>
        <Footer></Footer>
        </>
    );
};

export default MangeOrder;