import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Parcours from './pages/parcours';
import XpPro from './pages/xpPro';
import Navbar from './components/navbar';
import AddParcours from './pages/pageAdd/addParcours';
import UnParcours from './pages/pageById/unParcours';
import UnProject from './pages/pageById/unProject';
import AddProject from './pages/pageAdd/addProject';
import UnXpPro from './pages/pageById/unXpPro';
import AddXpPro from './pages/pageAdd/addXpPro';

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
          path: '/parcours/:id',
          element: <UnParcours />,
        },
        {
          path: '/projects',
          element: <Project />,
        },
        {
          path: '/projects/add',
          element: <AddProject />,
        },
        {
          path: '/projects/:id',
          element: <UnProject />,
        },
        {
          path: '/xpPro',
          element: <XpPro />,
        },
        {
          path: '/xpPro/add',
          element: <AddXpPro />,
        },
        {
          path: '/xpPro/:id',
          element: <UnXpPro />,
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}


export default App