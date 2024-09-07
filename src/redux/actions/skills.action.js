import axios from "axios";

export const GET_SKILL = "GET_SKILL";
export const ADD_SKILL = "ADD_SKILL";
export const EDIT_SKILL = "EDIT_SKILL";
export const DELETE_SKILL = "DELETE_SKILL";

export const getSkills = () => {
  return (dispatch) => {
    return axios.get("http://localhost:5001/skills").then((res) => {
      dispatch({ type: GET_SKILL, payload: res.data });
    });
  };
};

export const addSkill = (skill) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:5001/skills", skill)
      .then((res) => {
        dispatch({ type: ADD_SKILL, payload: res.data });
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de la compétence:", error);
      });
  };
};

export const editSkill = (skill) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:5001/skills/${skill.id}`, skill)
      .then((res) => {
        dispatch({ type: EDIT_SKILL, payload: res.data });
      })
      .catch((error) => {
        console.error("Error updating skill:", error);
      });
  };
};

export const deleteSkill = (id) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:5001/skills/${id}`)
      .then(() => {
        dispatch({ type: DELETE_SKILL, payload: id });
      })
      .catch((error) => {
        console.error("Error deleting skill:", error);
      });
  };
};
