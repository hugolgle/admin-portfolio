import axios from "axios";

export const GET_ABOUT = "GET_ABOUT";
export const UPDATE_ABOUT = "UPDATE_ABOUT";

export const getAbout = () => {
  return (dispatch) => {
    return axios.get("http://localhost:5001/about").then((res) => {
      dispatch({ type: GET_ABOUT, payload: res.data });
    });
  };
};

export const updateAbout = (updatedData) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:5001/about/${updatedData.id}`, updatedData)
      .then(() => {
        dispatch({ type: UPDATE_ABOUT, payload: updatedData });
      })
      .catch((error) => {
        console.error("Error updating about:", error);
      });
  };
};
