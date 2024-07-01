import React, { useEffect, useState } from "react";
import PizzaCard from "./PizzaCard/PizzaCard";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../common/Pagination/Pagination";
import { usePagination } from "../../customhooks/usePagination";
import Button from "../../common/Button/Button";
import FileBase from "react-file-base64";
import { json } from "react-router-dom";

export default function Menu() {
  const dispatch = useDispatch();
  const pizzaData = useSelector((state) => state.pizza);
  const [totalCount, setTotalCount] = useState(0);
  const [sortBy, setSortBy] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [addObject, setAddObject] = useState({});

  const itemPerPage = 4;
  async function getData(sort,search,page) {
    try {
      setIsLoading(true);
      const data = await fetch(
        `http://localhost:4000/api/v1/pizza/pizzaList?search=${search}&sort=${sort}&limit=${itemPerPage}&page=${page}`,
      );
      const res = await data.json();
      setIsLoading(false);
      setTotalCount(res.count);
      dispatch({
        type: "getAll",
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData(sortBy,searchValue,page);
  }, [page,sortBy]);

  useEffect(()=>{
    const id = setTimeout(()=>{
      getData(sortBy,searchValue,page);
    },2000)
    return ()=>clearTimeout(id);
  },[searchValue])


  async function handleAddPizza(e) {
    e.preventDefault();
    if (isAdding) {
      const response = await fetch(
        "http://localhost:4000/api/v1/pizza/create",
        {
          method: "POST",
          body: JSON.stringify({
            name: addObject.name,
            ingredients: addObject.ingredients,
            price: [Number(...addObject.price1)]
              .concat(Number(addObject.price2))
              .concat(Number(addObject.price3)),
            photoName: addObject.photoName,
            count: Number(addObject.count),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      response.json().then((data) =>
        dispatch({
          type: "addPizza",
          payload: data,
        }),
      );
    } else if (isModify) {
      try {
        const response = await fetch(
          `http://localhost:4000/api/v1/pizza/update/${addObject.id}`,
          {
            method: "PATCH",
            body: JSON.stringify({
              name: addObject?.name,
              ingredients: addObject?.ingredients,
              price:
                addObject?.price1 &&
                [Number(addObject?.price1)]
                  .concat(Number(addObject?.price2))
                  .concat(Number(addObject?.price3)),
              photoName: addObject?.photoName,
              count: addObject?.count && Number(addObject?.count),
            }),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        dispatch({
          type: "modifyPizza",
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    }
    handleAdding("close", false);
  }

  function handleAdding(option, value, id) {
    if (option == "add") {
      setIsAdding(value);
    } else if (option == "modify") {
      if (id) {
        setAddObject({ ...addObject, id });
      }
      setIsModify(value);
    } else if (option == "close") {
      setIsAdding(value);
      setIsModify(value);
    }
    if (value == false) {
      setAddObject({});
    }
  }

  function handleImage(obj) {
    setAddObject({ ...addObject, photoName: obj.base64 });
  }

  function handleSearchValue(value){
    setSearchValue(value);
  }

  return (
    <>
      <div className="menu relative p-10">
        <h2 className="title mt-20 inline-block">Our menu</h2>
        <div className="mt-20 flex w-full items-center justify-center">
          <div>
            <label for="cars">Sort by:</label>
            <select
              className="ml-10 mr-10  h-16 rounded-lg p-4 text-gray-400 outline-none hover:cursor-pointer"
              name="cars"
              id="cars"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Name(A→Z)</option>
              <option value="-name">Name(Z→A)</option>
              <option value="price">Price(Lowest to Highest)</option>
              <option value="-price">Price(Highest to Lowest)</option>
            </select>
          </div>

          <input
            className="mr-10 inline-block h-16 rounded-lg p-4 outline-none hover:cursor-pointer"
            value={searchValue}
            placeholder="Search something..."
            onChange={(e) => handleSearchValue(e.target.value)}
          />
          <Button click={() => handleAdding("add", true)} className="btnOrder">
            Add new pizza
          </Button>
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
            {pizzaData.length > 0 && (
              <>
                <ul className="pizzas">
                  {pizzaData.map((pizza) => (
                    <>
                      <PizzaCard
                        handleAdding={handleAdding}
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
          handlePage={setPage}
          total={totalCount}
        ></Pagination>
        {(isAdding || isModify) && (
          <div className="fixed top-16 z-50 h-svh w-4/5 overflow-scroll bg-white p-20">
            <Button click={() => handleAdding("close", false)}>X</Button>
            <form>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                    Infomation
                  </h2>
                  <p className="mt-1 text-lg leading-6 text-gray-600">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="name"
                        className="block text-lg font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setAddObject({ ...addObject, name: e.target.value })
                          }
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="ingredients"
                        className="block text-lg font-medium leading-6 text-gray-900"
                      >
                        Ingredients
                      </label>
                      <div className="mt-2">
                        <textarea
                          onChange={(e) =>
                            setAddObject({
                              ...addObject,
                              ingredients: e.target.value,
                            })
                          }
                          id="ingredients"
                          name="ingredients"
                          rows={2}
                          className="block w-full rounded-md border-0 p-1.5 text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-3 text-lg leading-6 text-gray-600">
                        Write a few sentences about yourself.
                      </p>
                    </div>
                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="price1"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Price 1
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setAddObject({
                              ...addObject,
                              price1: e.target.value,
                            })
                          }
                          type="number"
                          name="price1"
                          id="price1"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="price2"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Price
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setAddObject({
                              ...addObject,
                              price2: e.target.value,
                            })
                          }
                          type="number"
                          name="price2"
                          id="price2"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="price3"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Price 3
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setAddObject({
                              ...addObject,
                              price3: e.target.value,
                            })
                          }
                          type="number"
                          name="price3"
                          id="price3"
                          autoComplete="price3"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="count"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Count
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setAddObject((prev) => {
                              return { ...prev, count: e.target.value };
                            })
                          }
                          type="number"
                          name="count"
                          id="count"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-lg font-medium leading-6 text-gray-900"
                      >
                        Cover photo
                      </label>
                      <div className="mt-2 rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                          <div className="mt-4 text-lg leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className=" relative h-3/6 w-full cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a image</span>
                              {/*<input
                                onChange={(e) => handleImage(e)}
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only mb-5 h-full w-full"
                              />*/}
                              <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => handleImage({ base64 })}
                              />
                            </label>
                            {!addObject.photoName ? (
                              <p className="pl-1">or drag and drop</p>
                            ) : (
                              <img
                                className="h-[400px] w-full object-cover"
                                src={addObject?.photoName}
                                alt=""
                              />
                            )}
                          </div>
                          <p className="mt-5 text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  onClick={() => handleAdding("close", false)}
                  type="button"
                  className=" text-lg font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => handleAddPizza(e)}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
            <div></div>
          </div>
        )}
      </div>
    </>
  );
}
