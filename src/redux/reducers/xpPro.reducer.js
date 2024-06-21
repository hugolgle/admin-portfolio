import { ADD_XPPRO, GET_XPPRO } from "../actions/xpPro.action";

const initialState = [];

export default function xpProReducer(state = initialState, action) {
    switch (action.type) {
        case GET_XPPRO:
            return action.payload;
        case ADD_XPPRO:
            return [...state, action.payload];
        default:
            return state;
    }
}
