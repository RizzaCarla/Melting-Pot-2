import * as EventApiUtil from "../util/event_api_utils"

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS"

// Regular action creators

export const receiveAllEvents = (events) => {
    return ({
        type: RECEIVE_ALL_EVENTS,
        events
    });
};

export const receiveUserEvents = (events) => {
    return ({
        type: RECEIVE_USER_EVENTS,
        events
    });
};

export const receiveEvent = (event) => {
    return ({
        type: RECEIVE_EVENT,
        event
    });
};

export const removeEvent = (eventId) => {
    return ({
        type: REMOVE_EVENT,
        eventId
    })
}

export const receiveErrors = errors => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_EVENT_ERRORS,
});

// Thunk action creators

export const getEvents = () => dispatch => {
    return EventApiUtil.getEvents()
        .then(events => dispatch(receiveAllEvents(events)))
        .catch((err) => console.log(err))
};

export const getUserEvents = (eventId) => dispatch => {
    return EventApiUtil.getUserEvents(eventId)
        .then(events => dispatch(receiveUserEvents(events)))
        .catch((err) => console.log(err))
};

export const getEvent = (eventId) => dispatch => {
    return EventApiUtil.getEvent(eventId)
        .then(event => dispatch(receiveEvent(event)))
        .catch((err) => console.log(err))
};

export const createEvent = (event) => dispatch => {
    return EventApiUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
        .catch((err) => receiveErrors(err.response.data))
};    

export const updateEvent = (event) => dispatch => {
    return EventApiUtil.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)))
        .catch((err) => console.log(err))
};

export const deleteEvent = (eventId) => dispatch => {
    return EventApiUtil.deleteEvent(eventId)
        .then(() => dispatch(removeEvent(eventId)))
        .catch((err) => console.log(err))
};

