import actionTypes from './actionTypes';

const getAllStatistics = (statistics) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.GET_ALL_STATISTICS, payload: statistics });
    };
};

export const statisticsActions = {
    getAllStatistics,
};
