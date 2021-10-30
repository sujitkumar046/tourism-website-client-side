import React from 'react';
import useAuth from '../../../Hook/UseAuth';
import Navbar from '../Navbar/Navbar';


const Login = () => {

    const {SignInUsingGoogle } = useAuth()


    return (
        <>

        <Navbar></Navbar>
             <button className='btn btn-warning' onClick={SignInUsingGoogle}>Google Sign in</button>
        </>
    );
};

export default Login;