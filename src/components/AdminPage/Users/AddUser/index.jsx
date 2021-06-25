import React, { useContext } from 'react';
import HSSADAPI from '../../../../apis/HSSADApi';
import { AuthContext } from '../../../../context/AuthContext';

import UserForm from '../AddUser/UserForm';

const AddUser = () => {
    const { auth } = useContext(AuthContext);

    const addUser = async (userData) => {
        console.log('data', userData);
        try{
            const config = { headers: {
                'Authorization': `Bearer ${auth.token}` 
            }};
            const bodyParameters = userData;
            const response = await HSSADAPI.post('user', 
                bodyParameters, 
                config);
            console.log(response);
        }catch(err){
            console.log(err);
        }
    };

    return(
        <>
            <UserForm addUser={ addUser }/>
        </>
    );
}

export default AddUser;
