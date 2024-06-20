import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Parcours from './pages/parcours';
import XpPro from './pages/xpPro';
import Skills from './pages/skills';
import Navbar from './components/navbar';
import AddParcours from './pages/pageAdd/addParcours';

function App() {

  const router = createBrowserRouter([
    {
      element: <Navbar />,
      errorElement: <h1>Page introuvable !</h1>,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/parcours',
          element: <Parcours />,
        },
        {
          path: '/parcours/add',
          element: <AddParcours />,
        },
        {
          path: '/projects',
          element: <Project />,
        },
        {
          path: '/xpPro',
          element: <XpPro />,
        },
        {
          path: '/skills',
          element: <Skills />,
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}


export default App