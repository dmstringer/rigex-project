import actionTypes from './actionTypes';

const getAllAboutText = ( aboutText ) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.GET_ALL_ABOUT, payload: aboutText })
    };
};

export const aboutTextActions = {
    getAllAboutText,
};
