import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/UseAuth';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const MyOrders = () => {

    const {user} = useAuth()
    const [myorders, Setmyorders] = useState([]);
    useEffect (()=> {
        fetch('http://localhost:5000/orders')
        .then (res=>res.json())
        .then (data => {
            const myPlacedOrder = data.filter (order => order.email === user.email )
            Setmyorders (myPlacedOrder)
        } )
    }, [])

    const handleDelete = (id) => {

        const proceedtoDelete = window.confirm('Want to delete')
        if (proceedtoDelete) {
            fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
        .then (res=> res.json())
        .then (data => {
            if (data.deletedCount > 0) {
                alert('Deleted Successfully')
                const remainingOrders = myorders.filter (deleteOrder => deleteOrder._id !==id)
                Setmyorders(remainingOrders)
            }
        })


        }
        
    }

    return (
        <>
        <Navbar></Navbar>
        <div className='row'>
            <h2>Hello user : {myorders.length}</h2>
            {
                myorders.map (mysingleorder => 
                <div className='col-md-3 col-lg-3 col-sm-6'>
                    <h4>Hello {mysingleorder?.name}</h4>
                    <h5>Your Order: {mysingleorder?.pack}</h5>
                    <button onClick= {() => {handleDelete(mysingleorder?._id)}} className='btn btn-danger'>Delete</button>


                </div>)
            }
        </div>
        <Footer></Footer>
        </>
    );
};

export default MyOrders;