import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '../redux/_actions/user.actions';

function LogOut() {
    
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
        window.location.href="/";
    }, []);


    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Log Out</h2>
            
        </div>
    );
}

export  default LogOut ;