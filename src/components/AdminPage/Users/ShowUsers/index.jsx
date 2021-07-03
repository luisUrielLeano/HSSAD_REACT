import React, { useState,useContext, useEffect } from 'react';
import Header from '../../DataTable/TableHeader';
import useDataTable from '../../DataTable/DataTable';
import { AuthContext } from '../../../../context/AuthContext';

import HSSADApi from '../../../../apis/HSSADApi';

const ShowUsers = () => {

    const { auth } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: text => ( text )
        },
        {
            title: 'Rol',
            dataIndex: 'role',
            key: 'role',
        },
    ];

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async() => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${auth.token}` 
                }
            };
            const response = await HSSADApi.get('/user', config);
            setUsers(response.data);
        } catch (err){
            console.log(err);
        }
    }


    const {
        DataTable,
        hasSelected,
        currentPage,
        pageSize,
        resetPagination,
    } = useDataTable({
        columns: columns,
        dataSource: users.filter(user => !(user.username === auth.user.username)), 
    });

    return(
        <>
            <Header addNewPath='add-user' hasSelected={ hasSelected } />
            <DataTable/>
        </>
    );
}

export default ShowUsers;