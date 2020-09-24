import React from 'react';
import {Route, Redirect} from 'react-router-dom';


function Protected({component: Component, roles = [], ...rest}) {

    function userHaveAccess(roles) {
        if(!(localStorage.getItem('auth') === undefined || localStorage.getItem("auth") === ""|| localStorage.getItem('auth') === null)){
            if(roles.length === 0)
                return true;

            for(let i = 0; i < roles.length; i++){
                if(localStorage.getItem('role') === roles[i]){
                    return true;}
            }
            return false;
        }
        return false;
    }

    return (
        <Route  {...rest}
        render={props => {
            if(userHaveAccess(roles)) {
                return <Component {...props}/>
            } else {
                return <Redirect to="/NotAuth"/>
            }
        }}
        />
    );
}

export default ProtectedRoute;