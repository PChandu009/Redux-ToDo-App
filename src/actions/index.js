
export const addTask = (task) => {
    return {
        type: 'ADD_TASK', // name of the action
        payload: task // value of the action
    };
};
export const deleteTask = (taskId) => {
    return {
        type: 'DELETE_TASK',
        payload: taskId
    };
};
export const isChecked = (taskID) => {
    return {
        type: 'ISCHECKED',
        payload: taskID
    }
};

//export default {addTask,deleteTask};

//action is a object which is containing a type and a payload