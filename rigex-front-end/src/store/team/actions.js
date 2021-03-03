import actionTypes from './actionTypes';

const getAllTeamMembers = (teamMembers) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.GET_ALL_TEAM_MEMBERS, payload: teamMembers });
    };
};

export const teamActions = {
    getAllTeamMembers,
};
