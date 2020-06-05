import React, {createContext, useReducer} from 'react';
import {initialState,UserReducer} from '../reducers/UserReducer';

export const UserContext = createContext();

export default ({children}) => {
    const [state, dispath] = useReducer(useReducer, initialState);

    return(
        <UserContext.Provider value={{state, dispath}}>
            {children}
        </UserContext.Provider>
    );

}