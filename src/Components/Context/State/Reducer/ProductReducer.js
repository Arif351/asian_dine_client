import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from "../../ActionTypes/ActionTypes";

export const initialState = {
    loading: false,
    foodList: [],
    error: false


};
export const productReducer = (state, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                loading: true,
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                foodList: action.payload,
                loading: false,
            };
        case FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};