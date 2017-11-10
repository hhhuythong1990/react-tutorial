import * as types from "./../constants/ActionType";

export const listAll = () =>{
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task: task
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const updateStatus = (idTask) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id: idTask
    }
}

export const deleteTask = (idTask) => {
    return {
        type: types.DELETE_TASK,
        id: idTask
    }
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task: task
    }
}