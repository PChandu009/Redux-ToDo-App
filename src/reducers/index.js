//Reducers are the decision makers that take the decison on every action whats need to be done

import { combineReducers } from 'redux';

const tasksReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TASK':
            state = state.concat({ data: action.payload, isDone: false })
            break;
        case 'DELETE_TASK':
            state.splice(action.payload, 1);
            state = state.map((task) => task);
            break;
        case 'ISCHECKED':
            state = state.map(function (task, index) {
                if (index === action.payload) {
                    task.isDone = !task.isDone;
                    return task;
                } else {
                    return task;
                }
            });
            break;
        default:
            return state;
    }
    return state;
},
    reducers = combineReducers({
        tasks: tasksReducer
    });

export default reducers;