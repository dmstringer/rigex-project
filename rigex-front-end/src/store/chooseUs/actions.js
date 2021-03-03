import actionTypes from './actionTypes';

const getAllChooseUs = (chooseUsData) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.GET_ALL_CHOOSE_US, payload: chooseUsData });
    };
};

export const chooseUsActions = {
    getAllChooseUs,
};
