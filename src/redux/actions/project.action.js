import axios from 'axios';

export const GET_PROJECTS = "GET_PROJECTS";

export const getProjects = () => {
    return (dispatch) => {
        return axios.get("http://localhost:5001/projects").then((res) => {
            dispatch({ type: GET_PROJECTS, payload: res.data });
        });
    };
};