import actionTypes from './actionTypes';

const chooseUsReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_CHOOSE_US:
            return {
                ...state,
                heading: action.payload.getAllChooseUs[0],
                content: action.payload.getAllChooseUsFeatures
            };
        default:
            return state;
    }
};

export default chooseUsReducer;
