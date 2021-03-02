import actionTypes from './actionTypes';

const statisticsReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_STATISTICS:
            return [...action.payload.getAllStatistics];
        default:
            return state;
    }
};

export default statisticsReducer;
