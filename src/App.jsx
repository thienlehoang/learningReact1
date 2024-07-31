import { Outlet } from "react-router-dom";

import "./index.css";
import { ReactFragment } from "react";
import { useLocation } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useDispatch, useSelector } from "react-redux";
import Header from "./../src/common/Header/Header";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWx1a2FjaCIsImEiOiJ3US1JLXJnIn0.xrpBHCwvzsX76YlO-08kjg";

//import  from './components/Card'

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  const location = useLocation();
  return (
    //<Router>
    <div className="">
      {isLoading && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      {location.pathname !== "/login" && (<Header></Header>)}
      <Outlet></Outlet>
    </div>
    //</Router>
  );
}

export default App;
