//Reducers are the decision makers tat take the decison on every action whats need to be done

import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TASK':
            state = state.concat(action.payload)
            break;
        case 'DELETE_TASK':
            state = state.splice();
            state.splice(action.payload,1);
            break;
    }
    return state;
},
reducers=combineReducers({
    tasks:tasksReducer
});

export default reducers;