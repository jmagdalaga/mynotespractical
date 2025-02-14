import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import NewNote from "./components/AddNote";
import Notes from "./components/Notes";

const router = createBrowserRouter([
  {
    path: "/create-user",
    element: <App />,
  },
  {
    path: "/add-notes",
    element: <NewNote />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
