import { useSelector } from "react-redux";

export function getProjects() {
    const projects = useSelector((state) => state.projectReducer || []);
    return projects;
}

export function getAbout() {
    const about = useSelector((state) => state.aboutReducer || []);
    return about;
}

export function getXpPro() {
    const xpPro = useSelector((state) => state.xpProReducer || []);
    return xpPro;
}

export function getParcours() {
    const parcours = useSelector((state) => state.parcoursReducer || []);
    return parcours;
}