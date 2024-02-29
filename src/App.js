import "./index.css"
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
      <Footer/>
    </div>
  );
}

function Menu(){
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza)=>(
          <Pizza className="pizza" info={pizza}></Pizza>
        ))}
      </ul>
      
    </div>
  )
}

function Pizza(props){
  return (
    <>
      <li className="pizza">
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
  const closeHour=22;
  const isOpen =  hour >=openHour && hour <=closeHour ;
  return (<>
    <footer className="footer">
      {
        isOpen && (
          <div className="order">
            <p>
              We're open until {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
          </div>
        )
      }
    </footer>
  </>)
}



export default App;
