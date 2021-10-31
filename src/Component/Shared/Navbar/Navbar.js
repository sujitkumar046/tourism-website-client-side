import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import './Navbar.css'





const Navbar = () => {

    const {user, googleSignOut } = useAuth();

    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                <div className="container-fluid m-2">
                    <Link to='/home' className="navbar-brand">

                        <img height='50px' width='200px' className='img-fluid bg-warning' src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/logo-white.png" alt=""  class="d-inline-block align-text-top"/>
                      
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto  ">
                            
                            
                            <Link to='/home' className="nav-link items fw-bold" id='item-color' > Home </Link>
                            <Link to="/tourpackages" className="nav-link items fw-bold" id='item-color'> Tour Packages </Link>
                            
                           {user.email ? 
                           <div className='d-flex'>
                               <Link id='item-color' className='nav-link items fw-bold'  to='addservices'>Add Services</Link>
                               <Link id='item-color' className='nav-link items fw-bold' to='myorders'>My Order</Link>
                               <Link id='item-color' className='nav-link items fw-bold' to='manageorders'>Manage All Orders</Link>
                               <span className='m-2 text-danger fw-bold'> {user.displayName}</span>
                               <button className='m-2 btn btn-primary' onClick={googleSignOut}>Log Out</button> 

                           </div>
                           
                           : <Link to="/login" id='item-color' className="nav-link items fw-bold" > Login </Link> }
                
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;


