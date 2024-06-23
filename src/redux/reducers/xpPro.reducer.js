import { ADD_XPPRO, DELETE_XPPRO, EDIT_XPPRO, GET_XPPRO } from "../actions/xpPro.action";

const initialState = [];

export default function xpProReducer(state = initialState, action) {
    switch (action.type) {
        case GET_XPPRO:
            return action.payload;
        case ADD_XPPRO:
            return [...state, action.payload];
        case EDIT_XPPRO:
            return state.map(xpPro =>
                xpPro.id === action.payload.id ? action.payload : xpPro
            );
        case DELETE_XPPRO:
            return state.filter(xpPro => xpPro.id !== action.payload);
        default:
            return state;
    }
}
