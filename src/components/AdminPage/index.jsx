import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

const AdminPage = () => {
    const { auth } = useContext(AuthContext);
    return (
        <h5>
            Admin:  { auth.user.username }
        </h5>
    )
};

export default AdminPage;