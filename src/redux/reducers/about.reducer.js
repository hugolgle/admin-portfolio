import { GET_ABOUT } from "../actions/about.action";

const initialState = [];

export default function aboutReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ABOUT:
            return action.payload;
        default:
            return state;
    }
}