import { RECEIVE_JOIN_ERRORS, RECEIVE_JOIN, CLEAR_JOIN_ERRORS } from '../actions/join_actions';

const _nullErrors = [];

const JoinErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_JOIN_ERRORS:
            return action.errors;
        case RECEIVE_JOIN:
            return _nullErrors;
        case CLEAR_JOIN_ERRORS:
            return [];
        default:
            return state;
    }
};

export default JoinErrorsReducer;