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
      <header className="flex self-strech justify-between bg-theme w-full fixed top-0 px-20 py-4 z-50">
        <div className="flex flex-col justify-center grow shrink basis-1/3">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h2 className="font-bold">Fast React Pizza Co</h2>
          </Link>
        </div>
        <div className="flex justify-between items-center shrink grow basis-1/3">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="underline1 font-bold">Home</div>
          </Link>
          <Link to={"/menu"} style={{ textDecoration: "none" }}>
            <div className="underline1 font-bold">Menu</div>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <div className="underline1 font-bold">About us</div>
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <div className="underline1 font-bold">Contact</div>
          </Link>
        </div>
        <div className="flex justify-end items-center shrink grow basis-1/3">
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
