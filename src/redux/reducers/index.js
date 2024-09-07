import { combineReducers } from "redux";

import projectsReducer from "./projects.reducer";
import careersReducer from "./careers.reducer";
import aboutReducer from "./about.reducer";
import xpProReducer from "./xpPro.reducer";

export default combineReducers({
  projectsReducer,
  careersReducer,
  aboutReducer,
  xpProReducer,
});
