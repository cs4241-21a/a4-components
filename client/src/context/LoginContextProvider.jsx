import React, { createContext, useReducer } from 'react';
import LoginReducer from './LoginReducer';

export const LoginContext = createContext();

// get initial cart state from local mem
const loginFromStorage = localStorage.getItem('login') ?
    JSON.parse(localStorage.getItem('login')) : { token: null };

const initialState = loginFromStorage ;

const LoginContextProvider = ({ children }) => {
    // state=state, dispatch=reducer
    const [state, dispatch] = useReducer(LoginReducer, initialState);
    const login = (payload) =>  dispatch({ type: 'LOGIN', payload }); ;
    const logout = () => dispatch({ type: 'LOGOUT' });

    const contextValues = {
        ...state,
        login,
        logout,
    }

    return (
        <LoginContext.Provider value={contextValues}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;