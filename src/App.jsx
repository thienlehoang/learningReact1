import { Outlet } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import CartPage from "./components/pages/CartPage/CartPage";
import HomePage from "./components/pages/HomePage/HomePage";
import "./index.css";
import { ReactFragment } from "react";


//import  from './components/Card'

function App() {
  return (
    //<Router>
    <div className="">
      <Header />
      <div className="container">
        <Outlet></Outlet>
      </div>
      
      {/*<Footer />*/}
    </div>
    //</Router>
  );
}

export default App;
