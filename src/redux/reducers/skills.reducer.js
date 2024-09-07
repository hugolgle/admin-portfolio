import {
  ADD_SKILL,
  DELETE_SKILL,
  EDIT_SKILL,
  GET_SKILL,
} from "../actions/skills.action";

const initialState = [];

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SKILL:
      return action.payload;
    case ADD_SKILL:
      return [...state, action.payload];
    case EDIT_SKILL:
      return state.map((skill) =>
        skill.id === action.payload.id ? action.payload : skill
      );
    case DELETE_SKILL:
      return state.filter((skill) => skill.id !== action.payload);
    default:
      return state;
  }
}
