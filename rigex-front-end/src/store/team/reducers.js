import actionTypes from './actionTypes';

const teamReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_TEAM_MEMBERS:
            return [...action.payload.getAllTeamMembers];
        default:
            return state;
    }
};

export default teamReducer;
