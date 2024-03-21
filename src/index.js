import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { allReducers } from "./reducers";
import { createStore } from "redux";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import CartPage from "./components/pages/CartPage/CartPage";

const store = createStore(allReducers);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "detail",
        element: <CartPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
