import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Careers from "./pages/careers";
import Navbar from "./components/navbar";
import AddCareers from "./pages/pageAdd/addCareers";
import Career from "./pages/pageById/career";
import Project from "./pages/pageById/project";
import AddProject from "./pages/pageAdd/addProject";
import XpPro from "./pages/pageById/xpPro";
import AddXpPro from "./pages/pageAdd/addXpPro";
import XpPros from "./pages/xpPros";
import Skills from "./pages/skills";
import AddSkill from "./pages/pageAdd/addSkill";
import Skill from "./pages/pageById/skill";

function App() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      errorElement: <h1>Page introuvable !</h1>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
        {
          path: "/careers/add",
          element: <AddCareers />,
        },
        {
          path: "/careers/:id",
          element: <Career />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/projects/add",
          element: <AddProject />,
        },
        {
          path: "/projects/:id",
          element: <Project />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/skills/add",
          element: <AddSkill />,
        },
        {
          path: "/skills/:id",
          element: <Skill />,
        },
        {
          path: "/xpPro",
          element: <XpPros />,
        },
        {
          path: "/xpPro/add",
          element: <AddXpPro />,
        },
        {
          path: "/xpPro/:id",
          element: <XpPro />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
