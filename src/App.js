import Card from "./components/Card/Card";
import "./index.css"
import { ReactFragment } from 'react';
//import  from './components/Card'
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

function App() {

  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Card></Card>
      <Footer/>
    </div>
  );
}

function Menu(){
  const pizzas = pizzaData;

  return (
    <div className="menu">
      <h2>Our menu</h2>
      {
        pizzas && (
          <>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
            <ul className="pizzas">
              {pizzaData.map((pizza)=>(
                <Pizza className="pizza" info={pizza}></Pizza>
              ))}
            </ul>
          </>
        )
      }
      
    </div>
  )
}

function Pizza(props){
  return (
    <>
      <li className={`pizza ${props.info.soldOut ? "sold-out" : ""}`}>
        <img src={props.info?.photoName} alt={props.info.name}></img>
        <div>
          <h3>{props.info.name}</h3>
          <p>{props.info.ingredients}</p>
          <span>{props.info.price}</span>
        </div>
      </li>
    </>
  )
}
function Header(){
  return <>
    <header className="header">
      <h1>Fast React Pizza Co</h1>
    </header>
  </>
}

function Footer(){
  const hour = new Date().getHours();
  const openHour= 8;
  const closeHour=20;
  const isOpen =  hour >=openHour && hour <=closeHour ;
  return (<>
        <footer className="footer">
      {
        isOpen ? (
          <Order closeHour={closeHour} openHour={openHour}></Order>
        ) : (
          <div className="order">
            <p>
              We're closed until {openHour}:00. Come visit us later.
            </p>
            <button disabled="true" className="btn btn-disabled">Order later between {openHour} and {closeHour}</button>
          </div>
        )
      }
    </footer>
  </>)
}

function Order({closeHour,openHour}){
  return (
    <>
      <div className="order">
        <p>
          We're open from {openHour}:00  to {closeHour}:00. Come visit us or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  )
}



export default App;
