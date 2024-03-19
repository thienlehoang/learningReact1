import React, { useEffect, useState } from "react";
import PizzaCard from "./PizzaCard/PizzaCard";
import { pizzaData, likeList } from "../../data";
import { AiOutlineDislike } from "react-icons/ai";
import "./Menu.css";
import PizzaLikeList from "../LikeList/Likelist";
import { useDispatch } from "react-redux";
import Pagination from "../Pagination/Pagination";

export default function Menu() {
  //const pizzas = pizzaData;
  const [pizzas, setPizzas] = useState(pizzaData);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const itemPerPage = 10;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    let a = pizzaData.slice(
      (page - 1) * itemPerPage,
      (page - 1) * itemPerPage + itemPerPage
    );
    setPizzas(a);
  }, []);
  useEffect(() => {
    let a = pizzaData.slice(
      (page - 1) * itemPerPage,
      (page - 1) * itemPerPage + itemPerPage
    );
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setPizzas(a);
  }, [page]);
  function handlePageParent(page) {
    setPage(page);
  }


  return (
    <>
      <div className="menu">
        <h2>Our menu</h2>
        {isLoading == true ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            {pizzas && (
              <>
                <p>
                  Authentic Italian cuisine. 6 creative dishes to choose from.
                  All from our stone oven, all organic, all delicious.
                </p>
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

        <PizzaLikeList></PizzaLikeList>
      </div>
    </>
  );
}


