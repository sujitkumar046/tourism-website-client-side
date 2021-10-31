import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hook/UseAuth';

const PrivateRout = ({children, ...rest}) => {

    const {user} = useAuth();


    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.displayName ? 
          (children) : 
          
          (
            <Redirect
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