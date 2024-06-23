import axios from 'axios';

export const GET_XPPRO = "GET_XPPRO";
export const ADD_XPPRO = "ADD_XPPRO";
export const EDIT_XPPRO = "EDIT_XPPRO";
export const DELETE_XPPRO = "DELETE_XPPRO";

export const getXpPros = () => {
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

export const editXpPro = (xpPro) => {
    return (dispatch) => {
        return axios.put(`http://localhost:5001/xpPro/${xpPro.id}`, xpPro)
            .then((res) => {
                dispatch({ type: EDIT_XPPRO, payload: res.data });
            })
            .catch((error) => {
                console.error("Error updating xpPro:", error);
            });
    };
};

export const deleteXpPro = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:5001/xpPro/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_XPPRO, payload: id });
            })
            .catch((error) => {
                console.error("Error deleting xpPro:", error);
            });
    };
};