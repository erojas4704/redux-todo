import { v4 as uuid } from 'uuid';
const INITIAL_STATE = [];

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { text: action.text, id: uuid() }];
        case "REMOVE":
            return state.filter(i => i.id !== action.id);
        default:
            return state;
    }
}

export default todoReducer;