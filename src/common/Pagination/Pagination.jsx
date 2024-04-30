import { useState } from "react";
export default function Pagination({ handlePage, total, page, itemPerPage }) {
  const handleClick = (e) => {
    e.preventDefault();
    handlePage(e.target.innerText);
  };
  let length = 0;
  if (total % itemPerPage == 0) {
    length = total / itemPerPage;
  } else {
    length= total/itemPerPage+1
  }

  return (
    <>
      <ul className="pagiList">
        {Array.from({ length: length }, (_, i) => i + 1).map((value, index) => (
          <button
            key={index}
            className={`pagiStep ` + (page == index + 1 ? "active" : "")}
            onClick={handleClick}
          >
            {index + 1}
          </button>
        ))}
      </ul>
    </>
  );
}
