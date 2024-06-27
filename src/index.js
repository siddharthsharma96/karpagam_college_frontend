import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import ExpenseForm from "./Pages/ExpenseForm";
import ExampleuseState from "./Pages/ExampleuseState";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/form",
        element: <ExpenseForm operation={"add"} />,
      },
      {
        path: "/edit/:id",
        element: <ExpenseForm operation={"Edit"} />,
      },
      {
        path: "/eaxpmlestate",
        element: <ExampleuseState />,
      },
      {
        path: "*",
        element: (
          <div className="layout-container__wrapper">Page not found</div>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
