import * as types from "./../constants/ActionType";

let s4 = ()=>{
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

let generateId = ()=>{
    return s4() + "-" + s4() + s4();
}

let findIndex = (tasks, id) =>{
    let result = -1;
    tasks.forEach((task, index)=>{
        if(task.id === id ){
             result = index; 
        }
    });
    return result;
}

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];

let myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL:
            return state;
        break;
        case types.ADD_TASK:
            let newTask = {
                id: generateId(),
                name: action.task.name,
                status: action.task.status
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        break;
        case types.UPDATE_STATUS_TASK:
            let idUpdateStatus = action.id;
            let indexUpdateStatus = findIndex(state, idUpdateStatus);
            
            /** option 1 */
            // let cloneTask = { ... state[indexUpdateStatus] };
            // cloneTask.status = !state[indexUpdateStatus].status;
            // state.splice(indexUpdateStatus, 1);
            // state.push(cloneTask);

            /** option 2 */
            // let cloneTask = { ... state[indexUpdateStatus] };
            // cloneTask.status = !state[indexUpdateStatus].status;
            // state[indexUpdateStatus] = cloneTask;

            /** option 3 */
            state[indexUpdateStatus] = {
                ...state[indexUpdateStatus],
                status: !state[indexUpdateStatus].status
            }

            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state]; 
        break;
        case types.DELETE_TASK:
            let idDelete = action.id;
            let indexDelete = findIndex(state, idDelete);
            state.splice(indexDelete, 1);
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];
        break;
        default: return state
    }
}

export default myReducer;