import { createContext } from "react";

export const DataUSer = createContext();

export const initialState = {
    name: "",
    status: "",
    todo: []
}

const actions = {
    UPDATE_NAME: "UPDATE_NAME",
    UPDATE_STATUS: "UPDATE_STATUS",
    ADD_TODO_ITEM: "ADD_TODO_ITEM",
    INITIALIZATION_TODO_ITEM: "INITIALIZATION_TODO_ITEM",
    REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
    TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
    TOGGLE_IMPORTANT: "TOGGLE_IMPORTANT",
}

//Reducer to Handle Actions
export const reducer = (state, action) => {
    switch (action.type) {
        /**
         * Update Name
         */
        case actions.UPDATE_NAME: {
            return state = {
                name: action.name,
                status: state.status,
                todo: state.todo
            };
        }
        /**
         * Update Status
         */
        case actions.UPDATE_STATUS: {
            return state = {
                name: state.name,
                status: action.status,
                todo: state.todo
            };
        }
        /**
         * Initialization TODO item
         */
        case actions.INITIALIZATION_TODO_ITEM: {
            return state = {
                name: state.name,
                status: state.status,
                todo: action.todo
            }
        }
        /**
         * Add TODO item
         */
        case actions.ADD_TODO_ITEM: {
            return state = {
                name: state.name,
                status: state.status,
                todo: [...state.todo, action.todo]
            };
        }
        /**
         * Remove TODO item
         */
        case actions.REMOVE_TODO_ITEM: {
            const filteredTodoItem = state.todo.filter(todoItem => todoItem.id !== action.id);
            console.log(filteredTodoItem)
            return state = {
                name: state.name,
                status: state.status,
                todo: filteredTodoItem
            };
        }
        /**
         * Update TODO complete
         */
        case actions.TOGGLE_COMPLETED: {
            const updateComplete = state.todo.map(todoItem => {
                if (todoItem.id === action.id) {
                    return { ...todoItem, completed: !todoItem.completed };
                } else {
                    return todoItem;
                }
            })
            return state = {
                name: state.name,
                status: state.status,
                todo: updateComplete
            };
        }
        /**
         * Update TODO important
         */
        case actions.TOGGLE_IMPORTANT: {
            const updateImportant = state.todo.map(todoItem => {
                if (todoItem.id === action.id) {
                    return {...todoItem, important: !todoItem.important};
                } else {
                    return todoItem;
                }
            })
            /**
             * If you use reducer
             * If there is a change then everything must be changed 
             * I think if you only want to change the important value of a todo item it should return state.todo = updateImportant
             * but it doesn't work and have to use return as below or in other words have to replace the old state with the new one
             */
            return state = {
                name: state.name,
                status: state.status,
                todo: updateImportant
            };
        }
        default:
            return state;
    }
};