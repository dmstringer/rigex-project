import actionTypes from './actionTypes';

const aboutTextReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_ABOUT:
            return [...action.payload.getAllAboutText];
        default:
            return state;
    }
};

export default aboutTextReducer;
