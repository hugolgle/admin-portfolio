import axios from 'axios';

export const GET_PARCOURS = "GET_PARCOURS";
export const ADD_PARCOURS = "ADD_PARCOURS";
export const EDIT_PARCOURS = "EDIT_PARCOURS";
export const DELETE_PARCOURS = "DELETE_PARCOURS";

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
            });
    };
};

export const editParcours = (parcours) => {
    return (dispatch) => {
        return axios.put(`http://localhost:5001/parcours/${parcours.id}`, parcours)
            .then((res) => {
                dispatch({ type: EDIT_PARCOURS, payload: res.data });
            })
            .catch((error) => {
                console.error("Error updating parcours:", error);
            });
    };
};

export const deleteParcours = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:5001/parcours/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_PARCOURS, payload: id });
            })
            .catch((error) => {
                console.error("Error deleting parcours:", error);
            });
    };
};
