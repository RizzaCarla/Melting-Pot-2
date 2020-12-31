import { RECEIVE_ALL_EVENTS, RECEIVE_USER_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from "../actions/event_actions";

const eventReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
            let i;
            for (i = 0; i < action.events.data.length; i++) {
                newState[action.events.data[i]._id] = action.events.data[i];
            }
            return newState;
        case RECEIVE_USER_EVENTS:
            newState.user = action.events.data;
            return newState;
        case RECEIVE_EVENT:
            return Object.assign(newState, { [action.event.data._id]: action.event.data });
        case REMOVE_EVENT:
            delete newState[action.eventId];
            return newState;
        default:
            return state;
    }
};

export default eventReducer;