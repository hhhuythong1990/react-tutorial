import * as types from "./../constants/ActionType";


let initialState = false; // close form

let myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.TOGGLE_FORM:
            return !state;
        break;
        case types.OPEN_FORM:
            state = true;
            return state;
        break;
        case types.CLOSE_FORM:
            state = false;
            return state;
        break;
        default: return state
    }
}

export default myReducer;