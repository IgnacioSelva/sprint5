import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn";
import Features from "./components/Features";
import Team from "./components/Team";

const router = createBrowserRouter([
  
    {path: "/",
    element: <App />},
      {
        path: "/Features",
        element: <Features />,
      },
      {
        path:'/SignIn',
        element:<SignIn/>
      },
      {
        path:'/Team',
        element:<Team/>
      }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
