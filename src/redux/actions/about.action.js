import axios from 'axios';

export const GET_ABOUT = "GET_ABOUT";

export const getAbout = () => {
    return (dispatch) => {
        return axios.get("http://localhost:5001/about").then((res) => {
            dispatch({ type: GET_ABOUT, payload: res.data });
        });
    };
};