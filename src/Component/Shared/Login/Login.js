import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import Navbar from '../Navbar/Navbar';


const Login = () => {

    const location = useLocation()
    const history = useHistory();
    const {SignInUsingGoogle } = useAuth()

    const redirect_URL = location.state?.from ||'/home' ;

    const handleSignIn = () => {
        SignInUsingGoogle ()
        .then (result => {
            history.push(redirect_URL)
        } )
    }


    return (
        <>

        <div className='container-fluid mt-5'>
        <Navbar></Navbar>
             <button className='btn btn-warning' onClick={handleSignIn}>Google Sign in</button>

        </div>

        
        </>
    );
};

export default Login;