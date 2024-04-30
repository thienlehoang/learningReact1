import { Outlet } from "react-router-dom";

import "./index.css";
import { ReactFragment } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useDispatch, useSelector } from "react-redux";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWx1a2FjaCIsImEiOiJ3US1JLXJnIn0.xrpBHCwvzsX76YlO-08kjg";

//import  from './components/Card'

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login);
  return (
    //<Router>
    <div className="">
      <div className="">
        <Outlet></Outlet>
      </div>

      {/*<Footer />*/}
    </div>
    //</Router>
  );
}

export default App;
