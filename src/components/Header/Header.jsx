import { useState } from "react";
import Cart from "../Cart/Cart";
import "./Header.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, redirect } from "react-router-dom";

export default function Header() {
  const [clickCart, setClickCart] = useState(false);
  function handleCartClick(e) {
    setClickCart((prev) => !prev);
  }
  return (
    <>
      <header className="header">
        <div className="header__left">
          <Link to={'/'} style={{textDecoration:'none'}}>
            <h1>Fast React Pizza Co</h1>
          </Link>
        </div>
        <div className="header__right">
          <div className="header__right-icon" style={{ position: "relative" }}>
            <MdOutlineShoppingCart
              onClick={(e) => handleCartClick(e)}
              className="icon"
            ></MdOutlineShoppingCart>
            <Cart visible={clickCart}></Cart>
          </div>
          <div className="header__right-icon">
            <MdOutlineShoppingCart className="icon"></MdOutlineShoppingCart>
          </div>
        </div>
      </header>
    </>
  );
}
