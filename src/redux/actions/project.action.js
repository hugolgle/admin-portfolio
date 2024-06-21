import axios from 'axios';

export const GET_PROJECTS = "GET_PROJECTS";
export const ADD_PROJECT = "ADD_PROJECT";

export const getProjects = () => {
    return (dispatch) => {
        return axios.get("http://localhost:5001/projects").then((res) => {
            dispatch({ type: GET_PROJECTS, payload: res.data });
        });
    };
};

export const addProject = (project) => {
    return (dispatch) => {
        return axios.post("http://localhost:5001/projects", project).then((res) => {
            dispatch({ type: ADD_PROJECT, payload: res.data });
        });
    };
};