import axios from "axios";

export const GET_CAREERS = "GET_CAREERS";
export const ADD_CAREERS = "ADD_CAREERS";
export const EDIT_CAREERS = "EDIT_CAREERS";
export const DELETE_CAREERS = "DELETE_CAREERS";

export const getCareers = () => {
  return (dispatch) => {
    return axios.get("http://localhost:5001/careers").then((res) => {
      dispatch({ type: GET_CAREERS, payload: res.data });
    });
  };
};

export const addCareers = (newCareers) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:5001/careers", newCareers)
      .then((res) => {
        dispatch({ type: ADD_CAREERS, payload: res.data });
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du careers :", error);
      });
  };
};

export const editCareers = (careers) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:5001/careers/${careers.id}`, careers)
      .then((res) => {
        dispatch({ type: EDIT_CAREERS, payload: res.data });
      })
      .catch((error) => {
        console.error("Error updating careers:", error);
      });
  };
};

export const deleteCareers = (id) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:5001/careers/${id}`)
      .then(() => {
        dispatch({ type: DELETE_CAREERS, payload: id });
      })
      .catch((error) => {
        console.error("Error deleting careers:", error);
      });
  };
};
