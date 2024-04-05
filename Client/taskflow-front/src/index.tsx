import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from "react-router-dom"

import Projects from "./routes/projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/projects" replace />,
    },
    {
        path: "/projects",
        element: <Projects />
    }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);