import axios from 'axios';

export const GET_XPPRO = "GET_XPPRO";
export const ADD_XPPRO = "ADD_XPPRO";

export const getXpPro = () => {
    return (dispatch) => {
        return axios.get("http://localhost:5001/xpPro").then((res) => {
            dispatch({ type: GET_XPPRO, payload: res.data });
        });
    };
};

export const addXpPro = (xpPro) => {
    return (dispatch) => {
        return axios.post("http://localhost:5001/xpPro", xpPro).then((res) => {
            dispatch({ type: ADD_XPPRO, payload: res.data });
        }).catch((error) => {
            console.error('Erreur lors de l\'ajout de l\'expérience professionnelle:', error);
        });
    };
};
