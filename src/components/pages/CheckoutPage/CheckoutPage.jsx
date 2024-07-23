import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomInput from "../../../common/CustomInput/CustomInput";
import Button from "../../../common/Button/Button";

function CheckoutPage() {
  const [billInfo, setBillInfo] = useState({});
  const cartSelector = useSelector((state) => state.cartlist);

  function handleBillInfo(e, key) {
    setBillInfo({ ...billInfo, key: e.target.value });
  }
  return (
    <div className="container h-[100vh] pt-20">
      <div className="flex h-full w-full gap-10 bg-white p-20 text-lg">
        <div className="w-2/3 p-[24px]">
          <div className="bill__info">
            <h1 className="text-3xl font-bold">Billing Information</h1>
            <div className="mt-10 grid grid-flow-row grid-cols-3 gap-3">
              <CustomInput
                placeholder="Your first name"
                title="First Name"
                onChange={(e) => handleBillInfo(e, "firstName")}
                value={billInfo.firstName}
              ></CustomInput>
              <CustomInput
                placeholder="Your last name"
                title="Last Name"
                onChange={(e) => handleBillInfo(e, "firstName")}
                value={billInfo.firstName}
              ></CustomInput>
              <CustomInput
                placeholder="Company Name"
                title="Company Name (optional)"
                onChange={(e) => handleBillInfo(e, "firstName")}
                value={billInfo.firstName}
              ></CustomInput>
            </div>
            <div className="mt-10 grid grid-flow-row grid-cols-1">
              <CustomInput
                placeholder="Address"
                title="Street Address"
                onChange={(e) => handleBillInfo(e, "address")}
                value={billInfo.address}
              ></CustomInput>
            </div>
            <div className="mt-10 grid grid-flow-row grid-cols-2 gap-2">
              <CustomInput
                type={"email"}
                placeholder="Email Address"
                title="Email"
                onChange={(e) => handleBillInfo(e, "email")}
                value={billInfo.email}
              ></CustomInput>
              <CustomInput
                placeholder="Phone Number"
                title="Phone"
                onChange={(e) => handleBillInfo(e, "phone")}
                value={billInfo.phone}
              ></CustomInput>
            </div>
            <div className="mt-10 grid grid-flow-row grid-cols-1">
              <CustomInput
                type={"checkbox"}
                title="Ship to a different address?"
              ></CustomInput>
            </div>
          </div>
          <div className="additional__info mt-10">
            <h1 className="text-3xl font-bold">Additional Info</h1>
            <div className="mt-10 grid grid-flow-row grid-cols-1">
              <CustomInput
                className="min-h-11"
                type={"textarea"}
                title="Order notes"
                placeholder={
                  "Notes about your order, e.g. special notes for delivery"
                }
              ></CustomInput>
            </div>
          </div>
        </div>
        <div className="h-fit w-1/3 border border-solid border-gray-100 p-[24px]">
          <h1 className="text-3xl font-bold">Order Summery</h1>
          {cartSelector.map((item) => {
            return (
              <div className="mt-5 flex items-center justify-between">
                <div className="flex w-auto items-center">
                  <img
                    src={item.photoName}
                    alt={item.name}
                    className="mr-5 h-[60px] w-[60px] object-cover"
                  ></img>
                  <p>{item.name}</p>
                </div>
                <p>${item.price}</p>
              </div>
            );
          })}
          <div className="mt-5 flex items-center justify-between">
            <p>Subtotal</p>
            <p>${cartSelector.reduce((acc, item) => acc + item.price*item.quantity, 0)}</p>
          </div>
          <div className="mt-5 h-[1px] w-full border border-solid border-gray-100"></div>
          <div className="mt-5 flex items-center justify-between">
            <p>Shipping</p>
            <p>
              ${cartSelector.reduce((acc, item) => acc + item.price, 0) * 0.1}
            </p>
          </div>
          <div className="mt-5 h-[1px] w-full border border-solid border-gray-100"></div>
          <div className="mt-5 flex items-center justify-between">
            <p>Total</p>
            <p>
              $
              {cartSelector.reduce((acc, item) => acc + item.price*item.quantity, 0) +
                cartSelector.reduce((acc, item) => acc + item.price, 0) * 0.1}
            </p>
          </div>
          <h1 className="mt-5 text-3xl font-bold">Payment Method</h1>
          <div
            onChange={(e) => handleBillInfo(e, "paymentMethod")}
            className="mt-5"
          >
            <input id="cod" type="radio" name="cod" value={"cod"}></input>
            <label className="ml-2" for="cod">
              Cash On Delivery
            </label>
            <br></br>
            <input
              className="mt-2"
              id="paypal"
              type="radio"
              name="paypal"
              value={"paypal"}
            ></input>
            <label className="ml-2" for="paypal">
              Paypal
            </label>
          </div>
          <Button className="btnOrder mt-5 w-full">Place Order</Button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
