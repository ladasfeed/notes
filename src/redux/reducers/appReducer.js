import {SET_INITIALIZED} from "../types/types";

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {...state, initialized: action.payload}
        }
        default:
            return state
    }
};

export default appReducer;