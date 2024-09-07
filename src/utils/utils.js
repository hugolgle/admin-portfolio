import { useSelector } from "react-redux";

export function getProjects() {
  const projects = useSelector((state) => state.projectsReducer || []);
  return projects;
}

export function getProjectById(id) {
  const projects = useSelector((state) => state.projectsReducer || []);
  return projects.find((project) => project.id === parseInt(id));
}

export function getAbout() {
  const about = useSelector((state) => state.aboutReducer || []);
  return about;
}

export function getXpPro() {
  const xpPro = useSelector((state) => state.xpProReducer || []);
  return xpPro;
}

export function getXpProById(id) {
  const xpPros = useSelector((state) => state.xpProReducer || []);
  return xpPros.find((xpPro) => xpPro.id === parseInt(id));
}

export function getCareers() {
  const careers = useSelector((state) => state.careersReducer || []);
  return careers;
}

export function getCareersById(id) {
  const careers = useSelector((state) => state.careersReducer || []);
  return careers.find((careers) => careers.id === parseInt(id));
}
