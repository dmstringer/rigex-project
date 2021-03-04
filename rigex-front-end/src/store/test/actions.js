import actionTypes from './actionTypes';

const getAllTestContent = (testContent) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.GET_ALL_TEST_CONTENT, payload: testContent });
    };
};

export const testActions = {
    getAllTestContent,
};
