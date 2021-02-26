import actionTypes from './actionTypes';

const serviceReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_SERVICES:
            return [...action.payload.getAllServices];
        default:
            return state;
    }
};

export default serviceReducer;
