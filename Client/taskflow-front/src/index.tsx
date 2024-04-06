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
import Employee from "./routes/employee";
import Staff from "./routes/staff";

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
        path: "/users/:userId",
        element: <Employee />
    },
    {
        path: "/users",
        element: <Staff />
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