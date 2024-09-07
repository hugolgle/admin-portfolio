// hooks/useSelectors.js
import { useSelector } from "react-redux";

export const useProjects = () => {
  return useSelector((state) => state.projectsReducer || []);
};

export const useProjectById = (id) => {
  const projects = useSelector((state) => state.projectsReducer || []);
  return projects.find((project) => project._id === id);
};

export const useAbout = () => {
  return useSelector((state) => state.aboutReducer || []);
};

export const useXpPro = () => {
  return useSelector((state) => state.xpProReducer || []);
};

export const useXpProById = (id) => {
  const xpPros = useSelector((state) => state.xpProReducer || []);
  return xpPros.find((xpPro) => xpPro._id === id);
};

export const useCareers = () => {
  return useSelector((state) => state.careersReducer || []);
};

export const useCareersById = (id) => {
  const careers = useSelector((state) => state.careersReducer || []);
  return careers.find((career) => career._id === id);
};
