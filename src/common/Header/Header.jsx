import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate} from "react-router-dom";
import Cart from "./../../components/Cart/Cart";
import { logout } from "../../actions/userActions";
import {getCart} from "../../actions/cartActions";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [popup, setPopup] = useState(false);
  const [clickCart, setClickCart] = useState(false);
  function handleCartClick(e) {
    setClickCart((prev) => !prev);
  }
  async function handleLogout(){
    const res = await dispatch(logout());
    if(res.success){
      setUser(res.user);
      navigate("/login");
    } 
  }

  useEffect(() => {
    dispatch(getCart());
  }, [user]);

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
          <div
            className="header__right-icon mr-5"
            style={{ position: "relative" }}
          >
            <MdOutlineShoppingCart
              onClick={(e) => handleCartClick(e)}
              className="icon"
            ></MdOutlineShoppingCart>
            <Cart visible={clickCart}></Cart>
          </div>
          {user && (
            <div className="relative">
              <div className="">
                <img
                  onClick={() => setPopup((prev) => !prev)}
                  className="h-10 w-10 cursor-pointer rounded-full"
                  src={
                    user.photo
                      ? user.photo
                      : "https://cdn-icons-png.flaticon.com/512/3276/3276535.png"
                  }
                ></img>
              </div>
              {popup && (
                <div className="absolute right-0 top-12 bg-white p-10 flex flex-col items-start w-[32rem] font-extrabold rounded-[5px]">
                  <Link className="hover:bg-gray-200 w-full cursor-pointer" to={"/profile"}>{user.name}</Link>
                  <button className="hover:bg-gray-200 w-full text-left cursor-pointer"
                    onClick={() => {handleLogout()
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
