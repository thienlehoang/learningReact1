import { useState } from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, redirect } from "react-router-dom";
import Cart from "./../../components/Cart/Cart";

export default function Header() {
  const { isLogined, firstName } = useSelector((state) => state.login);
  const [clickCart, setClickCart] = useState(false);
  function handleCartClick(e) {
    setClickCart((prev) => !prev);
  }
  return (
    <>
      <header className="self-strech fixed top-0 z-40 flex w-full justify-between bg-theme px-20 py-4">
        <div className="flex shrink grow basis-1/3 flex-col justify-center">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <h2 className="font-bold">Fast React Pizza Co</h2>
          </Link>
        </div>
        <div className="flex shrink grow basis-1/3 items-center justify-between">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
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
        <div className="flex shrink grow basis-1/3 items-center justify-end">
          <div className="header__right-icon mr-5" style={{ position: "relative" }}>
            <MdOutlineShoppingCart
              onClick={(e) => handleCartClick(e)}
              className="icon"
            ></MdOutlineShoppingCart>
            <Cart visible={clickCart}></Cart>
          </div>
          {isLogined && (
            <div className="header__right-icon">
              <div>{firstName}</div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
