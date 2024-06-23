import { ADD_PARCOURS, DELETE_PARCOURS, EDIT_PARCOURS, GET_PARCOURS } from "../actions/parcours.action";

const initialState = [];

export default function parcoursReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PARCOURS:
            return action.payload;
        case ADD_PARCOURS:
            return [...state, action.payload];
        case EDIT_PARCOURS:
            return state.map(parcours =>
                parcours.id === action.payload.id ? action.payload : parcours
            );
        case DELETE_PARCOURS:
            return state.filter(parcours => parcours.id !== action.payload);
        default:
            return state;
    }
}
