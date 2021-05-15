import React, { createContext, useReducer } from 'react';

import { reducer } from './reducer';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(reducer, {
        isAuth: false,
        user: null,
        token: null,
    });

    return (
        <AuthContext.Provider value={ { auth, dispatch }}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;