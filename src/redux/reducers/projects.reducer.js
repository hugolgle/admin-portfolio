import {
  GET_PROJECTS,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from "../actions/projects.action";

const initialState = [];

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.payload;
    case ADD_PROJECT:
      return [...state, action.payload];
    case EDIT_PROJECT:
      return state.map((project) =>
        project.id === action.payload.id ? action.payload : project
      );
    case DELETE_PROJECT:
      return state.filter((project) => project.id !== action.payload);
    default:
      return state;
  }
}
