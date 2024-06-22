import axios from 'axios';

export const GET_PROJECTS = "GET_PROJECTS";
export const ADD_PROJECT = "ADD_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

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

export const editProject = (project) => {
    return (dispatch) => {
        return axios.put(`http://localhost:5001/projects/${project.id}`, project)
            .then((res) => {
                dispatch({ type: EDIT_PROJECT, payload: res.data });
            })
            .catch((error) => {
                console.error("Error updating project:", error);
            });
    };
};

export const deleteProject = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:5001/projects/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_PROJECT, payload: id });
            })
            .catch((error) => {
                console.error("Error deleting project:", error);
            });
    };
};