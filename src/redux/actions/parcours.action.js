import axios from 'axios';

export const GET_PARCOURS = "GET_PARCOURS";
export const ADD_PARCOURS = "ADD_PARCOURS";

export const getParcours = () => {
    return (dispatch) => {
        return axios.get("http://localhost:5001/parcours").then((res) => {
            dispatch({ type: GET_PARCOURS, payload: res.data });
        });
    };
};

export const addParcours = (newParcours) => {
    return (dispatch) => {
        return axios.post("http://localhost:5001/parcours", newParcours)
            .then((res) => {
                dispatch({ type: ADD_PARCOURS, payload: res.data });
            })
            .catch((error) => {
                console.error('Erreur lors de l\'ajout du parcours :', error);
                // Vous pouvez également dispatche une action d'erreur ici si nécessaire
            });
    };
};
