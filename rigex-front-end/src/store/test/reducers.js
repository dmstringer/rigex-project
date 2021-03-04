import actionTypes from './actionTypes';

const testReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_TEST_CONTENT:
            return [...action.payload.getAllTests];
        default:
            return state;
    }
};

export default testReducer;
