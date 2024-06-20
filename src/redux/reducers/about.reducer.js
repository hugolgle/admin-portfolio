import { GET_ABOUT, UPDATE_ABOUT } from "../actions/about.action";

const initialState = [];

export default function aboutReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ABOUT:
            return action.payload;
        case UPDATE_ABOUT:
            return state.map(item => item.id === action.payload.id ? { ...item, text: action.payload.text } : item);
        default:
            return state;
    }
}