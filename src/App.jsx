import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Parcour from './pages/parcour';
import XpPro from './pages/xpPro';
import Skills from './pages/skills';
import Navbar from './components/navbar';

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
          path: '/parcour',
          element: <Parcour />,
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