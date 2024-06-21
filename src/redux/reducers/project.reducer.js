import { GET_PROJECTS, ADD_PROJECT } from "../actions/project.action";

const initialState = [];

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return action.payload;
        case ADD_PROJECT:
            return [...state, action.payload];
        default:
            return state;
    }
}
