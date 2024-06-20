import { GET_PROJECTS } from "../actions/project.action";

const initialState = [];

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return action.payload;
        default:
            return state;
    }
}
