import { GET_PARCOUR } from "../actions/parcour.action";

const initialState = [];

export default function parcourReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PARCOUR:
            return action.payload;
        default:
            return state;
    }
}
