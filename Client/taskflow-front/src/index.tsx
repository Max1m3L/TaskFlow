import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
    createBrowserRouter,
    Navigate,
    RouterProvider
} from "react-router-dom"

import Projects from "./routes/projects";
import Project from "./routes/project";
import Tasks from "./routes/tasks";
import Stuff from "./routes/stuff";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/projects" replace />,
    },
    {
        path: "/projects",
        element: <Projects />
    },
    {
        path: "/projects/:projectId",
        element: <Project />
    },
    {
        path: "/projects/tasks/:projectId",
        element: <Tasks />
    },
    {
        path: "/stuff/:stuffId",
        element: <Stuff />
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