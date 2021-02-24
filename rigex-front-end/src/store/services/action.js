import actionTypes from './actionTypes';

const getAllServices = (services) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.GET_ALL_SERVICES, payload: services });
    };
};

export const servicesActions = {
    getAllServices,
};
