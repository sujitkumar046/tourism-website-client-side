import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';

const PrivateRout = ({children, ...rest}) => {

    const {user, isLoading} = useAuth();

    if(isLoading) {
      return <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
   }


  return (

        <Route 
        
        {...rest}
        render = {({ location }) => 

        user.displayName ? 
        ( children ) : ( <Redirect

            to={{
            pathname: "/login",
            state: { from: location }
        }}
                
        />
        )
        }

        />
             


            
        
    );
};
export default PrivateRout;