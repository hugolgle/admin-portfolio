import { combineReducers } from "redux";

import projectsReducer from "./projects.reducer";
import careersReducer from "./careers.reducer";
import aboutReducer from "./about.reducer";
import xpProReducer from "./xpPro.reducer";
import skillsReducer from "./skills.reducer";

export default combineReducers({
  projectsReducer,
  skillsReducer,
  careersReducer,
  aboutReducer,
  xpProReducer,
});
