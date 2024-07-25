import "./LoginPage.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import Button from "../../../common/Button/Button";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { signIn, signUp } from "../../../actions/userActions";
const user = {
  email: "lethien@gmail.com",
  password: "yeumthu",
};
function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null);
  const [isLogin, setLogin] = useState('login');
  const [visible, setVisible] = useState(false);
  const [formSignUp, setFormSignUp] = useState({});
  const [formSignIn, setFormSignIn] = useState({});
  const [error, setError] = useState({});
  async function handleLogin(e) {
    e.preventDefault();
    const result =  await dispatch(signIn(formSignIn));
    if (result.error) {
      setError({ ...error, signInError: result.error });
    } else {
      setUser(result.user);
    }
  }
  useEffect(() => {
    if (user && user.name && localStorage.getItem('accessToken')) {
      navigate("/home");
    }
  }, [user]);
  async function handleSignup(e) {
    e.preventDefault();
    const result = await dispatch(signUp(formSignUp));
    if(result.error){
      setError({ ...error, signUpError: result.error });
    } else {
      setUser(result.user);
    }
  }

  function changeForm(value){
    setLogin(value);
    setVisible(false);
    setFormSignUp({});
    setFormSignIn({});
  }

  return (
    <>
      <div className="login flex items-center justify-between">
        <div className="flex-shrink flex-grow basis-1/2 ">
          <img
            className="h-screen w-full object-cover"
            src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
            alt="pizza"
          ></img>
        </div>
        {isLogin=='login' ? (
          <div className="flex w-full flex-shrink flex-grow basis-1/2 flex-col items-center justify-center">
            <div className="title">Welcome back</div>
            <form
              onSubmit={handleLogin}
              className="flex w-full flex-col items-center"
            >
              <input
                className="mt-20 h-20 w-3/5 rounded-lg p-4 text-gray-400 outline-none hover:cursor-pointer"
                placeholder="Your email address"
                name="email"
                type="email"
                value={formSignIn.email}
                onChange={(e) => setFormSignIn({ ...formSignIn, email: e.target.value })}
              />
              <div className="relative mb-20 mt-10 flex w-3/5 items-center justify-between">
                <input
                  onChange={(e) => setFormSignIn({ ...formSignIn, password: e.target.value })}
                  value={formSignIn.password}
                  className=" relative h-20 w-full rounded-lg p-4 outline-none hover:cursor-pointer"
                  placeholder="Your password"
                  name="password"
                  autoComplete="new-password"
                  type={visible ? "text" : "password"}
                ></input>
                {visible ? (
                  <IoEyeOutline
                    className="icon absolute right-2 hover:cursor-pointer"
                    onClick={() => setVisible(false)}
                  ></IoEyeOutline>
                ) : (
                  <IoEyeOffOutline
                    className="icon absolute right-2 hover:cursor-pointer"
                    onClick={() => setVisible(true)}
                  ></IoEyeOffOutline>
                )}
              </div>

              <div className="mb-20 text-red-500">{error.signInError}</div>
              <button className="btnOrder" type="submit">
                Login
              </button>
            </form>
            <div className="mt-5 flex w-3/5 items-center justify-between">
              <div
                onClick={() => {
                  changeForm('signup')
                }}
                className="w-fit text-green-700 hover:cursor-pointer"
              >
                Create an account
              </div>
              <div onClick={() => {
                  changeForm('forgotPassword')
                }} className="w-fit text-green-700 hover:cursor-pointer">
                Forgot password
              </div>
            </div>
          </div>
        ) : isLogin=='signup' ? (
          <div className="flex w-full flex-shrink flex-grow basis-1/2 flex-col items-center justify-center">
            <div className="title">Welcome to Fast React Pizza Co</div>
            <form onSubmit={handleSignup} className="flex w-full flex-col items-center">
              <div className="mt-20 w-3/5">
                <input
                  className=" h-20 w-full rounded-lg p-4 outline-none hover:cursor-pointer"
                  placeholder="Your first name"
                  name="firstname"
                  autocomplete="firstname"
                  type="text"
                  onChange={(e) =>
                    setFormSignUp({ ...formSignUp, name: e.target.value })
                  }
                  value={formSignUp.firstname}
                />
              </div>
              <div className=" mt-10 w-3/5">
                <input
                  className=" h-20 w-full rounded-lg p-4 outline-none hover:cursor-pointer"
                  placeholder="Your email address"
                  name="email"
                  autocomplete="email"
                  type="email"
                  onChange={(e) =>
                    setFormSignUp({ ...formSignUp, email: e.target.value })
                  }
                  value={formSignUp.email}
                />
              </div>
              <div className="relative mt-10 flex w-3/5 items-center justify-between">
                <input
                  key="password"
                  className=" relative h-20 w-full rounded-lg p-4 outline-none hover:cursor-pointer"
                  placeholder="Your password"
                  name="password"
                  autocomplete="name"
                  type={visible ? "text" : "password"}
                  onChange={(e) =>
                    setFormSignUp({ ...formSignUp, password: e.target.value })
                  }
                  value={formSignUp.password}
                ></input>
                {visible ? (
                  <IoEyeOutline
                    className="icon absolute right-2 hover:cursor-pointer"
                    onClick={() => setVisible(false)}
                  ></IoEyeOutline>
                ) : (
                  <IoEyeOffOutline
                    className="icon absolute right-2 hover:cursor-pointer"
                    onClick={() => setVisible(true)}
                  ></IoEyeOffOutline>
                )}
              </div>

              <div className="relative mb-20 mt-10 flex w-3/5 items-center justify-between">
                <input
                  className=" relative h-20 w-full rounded-lg p-4 outline-none hover:cursor-pointer"
                  key="passwordConfirm"
                  placeholder="Confirm your password"
                  name="passwordConfirm"
                  autocomplete="passwordConfirm"
                  type={visible ? "text" : "password"}
                  onChange={(e) =>
                    setFormSignUp({
                      ...formSignUp,
                      passwordConfirm: e.target.value,
                    })
                  }
                  value={formSignUp.passwordConfirm}
                ></input>
                {visible ? (
                  <IoEyeOutline
                    className="icon absolute right-2 hover:cursor-pointer"
                    onClick={() => setVisible(false)}
                  ></IoEyeOutline>
                ) : (
                  <IoEyeOffOutline
                    className="icon absolute right-2 hover:cursor-pointer"
                    onClick={() => setVisible(true)}
                  ></IoEyeOffOutline>
                )}
              </div>

              <div className="mb-20 text-red-500">{error.signUpError}</div>
              <button className="btnOrder" type="submit">
                Sign Up
              </button>
            </form>
            <div className="mt-5 flex w-3/5 items-center justify-center">
              <div className="w-fit text-green-700">
                Already have an account.
              </div>
              <div
                onClick={() => {
                  changeForm(true)
                }}
                className="w-fit font-bold text-green-700 hover:cursor-pointer"
              >
                LOGIN
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-shrink flex-grow basis-1/2 flex-col items-center justify-center">
            <div className="title">Welcome to Fast React Pizza Co</div>
            <form onSubmit={handleSignup} className="flex w-full flex-col items-center">
              <div className=" mt-10 w-3/5">
                <input
                  className=" h-20 w-full rounded-lg p-4 outline-none hover:cursor-pointer"
                  placeholder="Your email address"
                  name="email"
                  autocomplete="email"
                  type="email"
                  onChange={(e) =>
                    setFormSignUp({ ...formSignUp, email: e.target.value })
                  }
                  value={formSignUp.email}
                />
              </div>
            </form>
            <div className="mt-5 flex w-3/5 items-center justify-between">
              <div
                onClick={() => {
                  changeForm('login')
                }}
                className="w-fit text-green-700 hover:cursor-pointer"
              >
                Back to login
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LoginPage;
