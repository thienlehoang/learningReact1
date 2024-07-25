import React from "react";

function CustomInput({ value, onChange, title, placeholder, type }) {
  const styleByType = {
    text: "absolute -top-7 left-1 text-lg font-bold",
    email: "absolute -top-7 left-1 text-lg font-bold",
    textarea: "absolute -top-7 left-1 text-lg font-bold",
    checkbox: "absolute left-7 w-auto",
  };
  return (
    <div className="align relative w-full">
      <label className={styleByType[type ? type : "text"]}>{title}</label>
      {type === "textarea" ? (
        <textarea
          className={`w-full rounded-md border border-solid border-[#E6E6E6] p-2 outline-none`}
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e);
          }}
          value={value}
        ></textarea>
      ) : (
        <input
          className={`${type != "checkbox" ? "w-full" : ""} rounded-md border border-solid border-[#E6E6E6] p-2 outline-none`}
          type={type ? type : "text"}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e);
          }}
          value={value}
        ></input>
      )}
    </div>
  );
}

export default CustomInput;
