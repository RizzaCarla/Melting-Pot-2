import * as JoinApiUtil from "../util/joins_api_util"

export const RECEIVE_ALL_JOINS = "RECEIVE_ALL_JOINS";
export const RECEIVE_JOIN_ERRORS = 'RECEIVE_JOIN_ERRORS';
export const RECEIVE_USER_JOINS = "RECEIVE_USER_JOINS";
export const RECEIVE_EVENT_JOINS = "RECEIVE_EVENT_JOINS";
export const RECEIVE_JOIN = "RECEIVE_JOIN";
export const REMOVE_JOIN = "REMOVE_JOIN";
export const CLEAR_JOIN_ERRORS = "CLEAR_JOIN_ERRORS"


// Regular action creators

export const receiveAllJoins = (joins) => {
    return ({
        type: RECEIVE_ALL_JOINS,
        joins
    });
};

export const receiveUserJoins = (joins) => {
    return ({
        type: RECEIVE_USER_JOINS,
        joins
    });
};

export const receiveEventJoins = (joins) => {
    return ({
        type: RECEIVE_EVENT_JOINS,
        joins
    });
};

export const receiveJoin = (join) => {
    return ({
        type: RECEIVE_JOIN,
        join
    });
};

export const removeJoin = (joinId) => {
    return ({
        type: REMOVE_JOIN,
        joinId
    })
}

export const receiveErrors = errors => ({
    type: RECEIVE_JOIN_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_JOIN_ERRORS,
});



// Thunk action creators

export const getJoins = () => dispatch => {
    return JoinApiUtil.getJoins()
        .then(joins => dispatch(receiveAllJoins(joins)))
        .catch((err) => console.log(err))
};

export const getUserJoins = (userId) => dispatch => {
    return JoinApiUtil.getUserJoins(userId)
        .then(joins => dispatch(receiveUserJoins(joins)))
        .catch((err) => console.log(err))
};

export const getEventJoins = (eventId) => dispatch => {
    return JoinApiUtil.getEventJoins(eventId)
        .then(joins => dispatch(receiveEventJoins(joins)))
        .catch((err) => console.log(err))
};

export const getJoin = (joinId) => dispatch => {
    return JoinApiUtil.getJoin(joinId)
        .then(joins => dispatch(receiveJoin(joins)))
        .catch((err) => console.log(err))
};

export const createJoin = (join) => dispatch => {
    return JoinApiUtil.createJoin(join)
        .then(join => dispatch(receiveJoin(join)))
        .catch((err) => dispatch(receiveErrors(err.response.data)))
};

export const updateJoin = (join) => dispatch => {
    return JoinApiUtil.updateJoin(join)
        .then(join => dispatch(receiveJoin(join)))
        .catch((err) => dispatch(receiveErrors(err.response.data)))
};

export const deleteJoin = (joinId) => dispatch => {
    return JoinApiUtil.deleteJoin(joinId)
        .then(() => dispatch(removeJoin(joinId)))
        .catch((err) => console.log(err))
};

