import { RECEIVE_ALL_JOINS, RECEIVE_USER_JOINS, RECEIVE_EVENT_JOINS, RECEIVE_JOIN, REMOVE_JOIN } from "../actions/join_actions";

const joinReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_JOINS:
            let i;
            for (i = 0; i < action.joins.data.length; i++) {
                // newState[action.joins.data[i].eventId] = action.joins.data[i];
                newState[action.joins.data[i]._id] = action.joins.data[i];
            }
            return newState;
        case RECEIVE_USER_JOINS:
            let j;
            for (j = 0; j < action.joins.data.length; j++) {
                // newState[action.joins.data[j].eventId] = action.joins.data[j];
                newState[action.joins.data[j]._id] = action.joins.data[j];
            }
            return newState;
        case RECEIVE_EVENT_JOINS:
            let k;
            for (k = 0; k < action.joins.data.length; k++) {
                // newState[action.joins.data[k].eventId] = action.joins.data[k];
                newState[action.joins.data[k]._id] = action.joins.data[k];
            }
            return newState;
        case RECEIVE_JOIN:
            // return Object.assign(newState, { [action.join.data.eventId]: action.join.data });
            return Object.assign(newState, { [action.join.data._id]: action.join.data });
        case REMOVE_JOIN:
            // let deleteId;
       
            // Object.values(newState).map(obj => {
            //     console.log('obj', obj._id)
            //     if (obj._id === action.joinId ){
            //         console.log('action' , action.joinId)
            //         deleteId = obj.eventId
            //     }
            // })
            // // console.log(deleteId)
            delete newState[action.joinId];
            return newState;
        default:
            return state;
    }
};

export default joinReducer;