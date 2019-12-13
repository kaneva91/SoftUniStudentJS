import React, {useContext}from 'react';
import {Redirect} from 'react-router-dom';
import userService from '../../../services/user-services';
import {UserContext } from '../../ContextWrapper';


function Logout (){
    const[user, setUserStatus] = useContext(UserContext);

    userService.logout()
    .then(()=>{
        setUserStatus({loggedIn :  false, userId : '', name : ''});
    })

    return(<Redirect to='/login' />)
}

export default Logout;