import { ADD, DELETE } from "../actions/todoAction";

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: state.todos.concat(action.task)
            }
            break;
            case DELETE:

        default:
            return state;
    }
}

export default todoReducer;
