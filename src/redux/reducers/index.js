import { combineReducers } from 'redux';

import projectReducer from "./project.reducer";
import parcoursReducer from './parcours.reducer';
import aboutReducer from './about.reducer';
import xpProReducer from './xpPro.reducer';


export default combineReducers({
    projectReducer,
    parcoursReducer,
    aboutReducer,
    xpProReducer
})