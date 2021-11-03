import * as todoActionTypes from '../constants/todoConstants';
export const addTodo = todo => {
    return {
        type: todoActionTypes.ADD_TODO,
        payload: todo
    }
}

export const clearTodo = () => {
    return {
        type: todoActionTypes.CLEAR_TODO,
    }
}