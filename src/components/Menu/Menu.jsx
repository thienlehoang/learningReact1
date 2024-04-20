import React, { useEffect, useState } from "react";
import PizzaCard from "./PizzaCard/PizzaCard";
import { pizzaData } from "../../data";
import "./Menu.css";
import { useDispatch } from "react-redux";
import Pagination from "../Pagination/Pagination";

export default function Menu() {
  //const pizzas = pizzaData;
  const [pizzaList, setPizzaList] = useState(pizzaData);
  const [pizzas, setPizzas] = useState([]);
  const [sortBy, setSortBy] = useState("nameaz");
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemPerPage = 10;
  useEffect(() => {
    let a = pizzaList.slice(
      (page - 1) * itemPerPage,
      (page - 1) * itemPerPage + itemPerPage,
    );
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setPizzas(a);
  }, [page, pizzaList]);

  function handlePageParent(page) {
    setPage(page);
  }

  //sorting
  useEffect(() => {
    if (sortBy == "nameaz") {
      let a = pizzaList.sort((a, b) => (a.name < b.name ? -1 : 1));
      setPizzaList([...a]);
    }
    if (sortBy == "nameza") {
      let a = pizzaList.sort((a, b) => (a.name > b.name ? -1 : 1));
      setPizzaList([...a]);
    }
    if (sortBy == "price1") {
      let a = pizzaList.sort((a, b) => (a.price[0] < b.price[0] ? -1 : 1));
      setPizzaList([...a]);
    }
    if (sortBy == "price2") {
      let a = pizzaList.sort((a, b) => (a.price[0] > b.price[0] ? -1 : 1));
      setPizzaList([...a]);
    }
  }, [sortBy]);

  //searching
  useEffect(() => {
    const debounce = setTimeout(() => {
      let result = pizzaData.filter((item) => item.name.includes(searchValue));
      setPizzaList(result);
    }, 1000);
    return () => clearTimeout(debounce);
  }, [searchValue]);

  return (
    <>
      <div className="menu">
        <h2 className="title">Our menu</h2>
        <div className="">
          <label for="cars">Sort by:</label>
          <select
            className="mt-20 mr-20   h-16 rounded-lg p-4 text-gray-400 outline-none hover:cursor-pointer"
            name="cars"
            id="cars"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="nameaz">Name(A→Z)</option>
            <option value="nameza">Name(Z→A)</option>
            <option value="price1">Price(Lowest to Highest)</option>
            <option value="price2">Price(Highest to Lowest)</option>
          </select>
          <input
            className="mt-20 h-16 rounded-lg p-4 outline-none hover:cursor-pointer"
            value={searchValue}
            placeholder="Enter something..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        {isLoading == true ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            {pizzas && (
              <>
                <ul className="pizzas">
                  {pizzas.map((pizza) => (
                    <>
                      <PizzaCard
                        key={pizza?.id}
                        className="pizza"
                        info={pizza}
                      ></PizzaCard>
                    </>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
        <Pagination
          itemPerPage={itemPerPage}
          page={page}
          handlePage={handlePageParent}
          total={pizzaData.length}
        ></Pagination>
      </div>
    </>
  );
}
