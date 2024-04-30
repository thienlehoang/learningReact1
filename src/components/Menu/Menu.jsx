import React, { useEffect, useState } from "react";
import PizzaCard from "./PizzaCard/PizzaCard";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../common/Pagination/Pagination";
import { usePagination } from "../../customhooks/usePagination";
import Button from "../../common/Button/Button"

export default function Menu() {
  const pizzaData = useSelector((state) => state.pizza);
  //const user=useSelector((state)=>state.login)
  const [pizzaList, setPizzaList] = useState(pizzaData);
  const [pizzas, setPizzas] = useState([]);
  const [sortBy, setSortBy] = useState("nameaz");
  const [searchValue, setSearchValue] = useState("");
  //const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isAdding, setIsAdding] = useState(true)

  const itemPerPage = 10;
  const { isLoading, handlePagi } = usePagination(pizzaList, itemPerPage, page);
  useEffect(() => {
    let a = handlePagi();
    setPizzas(a);
  }, [page, pizzaList])


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
      if (searchValue == '') {
        let a = handlePagi();
        setPizzas(a);
      } else {
        let result = pizzaList.filter((item) => item.name.includes(searchValue));
        setPizzas(result);
      }
    }, 1000);
    return () => clearTimeout(debounce);
  }, [searchValue]);

  return (
    <>
      <div className="menu p-10 relative">
        <h2 className="title mt-20 inline-block">Our menu</h2>
        <div className="flex justify-center items-center mt-20 w-full">
          <div>
            <label for="cars">Sort by:</label>
            <select
              className="mr-10 ml-10  h-16 rounded-lg p-4 text-gray-400 outline-none hover:cursor-pointer"
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
          </div>

          <input
            className="mr-10 h-16 rounded-lg p-4 outline-none hover:cursor-pointer inline-block"
            value={searchValue}
            placeholder="Search something..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button onClick={(e) => setIsAdding(true)} className="btnOrder">Add new pizza</Button>

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
            {pizzas.length > 0 && (
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
          total={pizzaList.length}
        ></Pagination>
        {isAdding &&
          <div className="z-10 absolute min-h-screen w-4/5 bg-white">
            <button onClick={() => setIsAdding(false)}>click</button>
          </div>
        }
      </div>
    </>
  );
}
