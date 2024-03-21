import { Outlet } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import CartPage from "./components/pages/CartPage/CartPage";
import HomePage from "./components/pages/HomePage/HomePage";
import "./index.css";
import { ReactFragment } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
