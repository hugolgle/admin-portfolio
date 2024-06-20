import axios from 'axios';

export const GET_XPPRO = "GET_XPPRO";

export const getXpPro = () => {
    return (dispatch) => {
        return axios.get("http://localhost:5001/xpPro").then((res) => {
            dispatch({ type: GET_XPPRO, payload: res.data });
        });
    };
};