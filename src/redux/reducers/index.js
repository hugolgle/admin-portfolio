import { combineReducers } from 'redux';

import projectReducer from "./project.reducer";
import parcourReducer from './parcour.reducer';
import aboutReducer from './about.reducer';
import xpProReducer from './xpPro.reducer';


export default combineReducers({
    projectReducer,
    parcourReducer,
    aboutReducer,
    xpProReducer
})