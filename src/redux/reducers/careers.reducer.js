import {
  ADD_CAREERS,
  DELETE_CAREERS,
  EDIT_CAREERS,
  GET_CAREERS,
} from "../actions/careers.action";

const initialState = [];

export default function careersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAREERS:
      return action.payload;
    case ADD_CAREERS:
      return [...state, action.payload];
    case EDIT_CAREERS:
      return state.map((careers) =>
        careers.id === action.payload.id ? action.payload : careers
      );
    case DELETE_CAREERS:
      return state.filter((careers) => careers.id !== action.payload);
    default:
      return state;
  }
}
