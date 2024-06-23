import { useSelector } from "react-redux";

export function getProjects() {
    const projects = useSelector((state) => state.projectReducer || []);
    return projects;
}

export function getProjectById(id) {
    const projects = useSelector((state) => state.projectReducer || []);
    return projects.find((project) => project.id === parseInt(id));
}

export function getAbout() {
    const about = useSelector((state) => state.aboutReducer || []);
    return about;
}

export function getXpPros() {
    const xpPro = useSelector((state) => state.xpProReducer || []);
    return xpPro;
}

export function getXpProById(id) {
    const xpPros = useSelector((state) => state.xpProReducer || []);
    return xpPros.find((xpPro) => xpPro.id === parseInt(id));
}

export function getParcours() {
    const parcours = useSelector((state) => state.parcoursReducer || []);
    return parcours;
}

export function getParcoursById(id) {
    const parcours = useSelector((state) => state.parcoursReducer || []);
    return parcours.find((parcours) => parcours.id === parseInt(id));
}