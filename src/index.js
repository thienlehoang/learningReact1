import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { allReducers } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Outlet,
  redirect,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import CartPage from "./components/pages/CartPage/CartPage";

import DetailPage from "./components/pages/DetailPage/DetailPage";
import MenuPage from "./components/pages/MenuPage/MenuPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import AboutUsPage from "./components/pages/AboutUsPage/AboutUsPage";
import {thunk} from "redux-thunk";
import CheckoutPage from "./components/pages/CheckoutPage/CheckoutPage";

// create store with redux and thunk
const store = createStore(allReducers, applyMiddleware(thunk));
//const store = createStore(allReducers);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/login" replace/>},
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "checkout",
        element: <AboutUsPage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "contact",
        element: <AboutUsPage />,
      },
      {
        path: "/:userId/checkout",
        element: <CheckoutPage />,
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
  </React.StrictMode>,
);
