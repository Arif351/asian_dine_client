import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from './ActionTypes/ActionTypes';
import { initialState, productReducer } from './State/Reducer/ProductReducer';

const productContext = createContext();

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(() => {
        dispatch({ type: FETCHING_START })
        fetch("http://localhost:5000/foodList")
            .then((res) => res.json())
            .then((data) => dispatch({ type: FETCHING_SUCCESS, payload: data }))
            .catch((error) => dispatch({ type: FETCHING_ERROR }))
    }, [])



    const value = { state, dispatch }
    return <productContext.Provider value={value}>{children}</productContext.Provider>
};
export const useProduct = () => {
    const context = useContext(productContext)
    return context;
}

export default ProductProvider;