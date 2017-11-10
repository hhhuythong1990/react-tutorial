import * as type from './../constants/actionTypes'

export const status = () =>{
    return {
        type: type.TOGGLE_STATUS
    }
}

export const sort = (sort) => {
    return {
        type: type.SORT,
        sort // sort : sort
    }
}