import axios from 'axios';

export const GET_PARCOUR = "GET_PARCOUR";

export const getParcour = () => {
    return (dispatch) => {
        return axios.get("http://localhost:5001/parcour").then((res) => {
            dispatch({ type: GET_PARCOUR, payload: res.data });
        });
    };
};