import React, { useEffect, useState } from "react";
import PizzaCard from "./PizzaCard/PizzaCard";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../common/Pagination/Pagination";
import { usePagination } from "../../customhooks/usePagination";
import Button from "../../common/Button/Button"

export default function Menu() {
  const dispatch = useDispatch();
  const pizzaData = useSelector((state) => state.pizza);
  //const user=useSelector((state)=>state.login)
  const [pizzaList, setPizzaList] = useState(pizzaData);
  const [pizzas, setPizzas] = useState([]);
  const [sortBy, setSortBy] = useState("nameaz");
  const [searchValue, setSearchValue] = useState("");
  //const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [addObject, setAddObject] = useState({});

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

  function handleAddPizza(e) {
    e.preventDefault();
    if (isAdding) {
      dispatch({
        type: 'addPizza',
        payload: {
          name: addObject.name,
          ingredients: addObject.ingredients,
          price: [Number(...addObject.price1)].concat(Number(addObject.price2)).concat(Number(addObject.price3)),
          photoName: addObject.photoName,
          count: Number(addObject.count),
        }
      })
    } else if (isModify) {
      dispatch({
        type: 'modifyPizza',
        payload: {
          id: addObject.id,
          name: addObject.name,
          ingredients: addObject.ingredients,
          price: [Number(...addObject.price1)].concat(Number(addObject.price2)).concat(Number(addObject.price3)),
          photoName: addObject.photoName,
          count: Number(addObject.count),
        }
      })
    }
    handleAdding('close', false);
  }

  function handleAdding(option, value, id) {
    if (option == 'add') {
      setIsAdding(value);
    } else if (option == 'modify') {
      if (id) {
        setAddObject({ ...addObject, id });
      }
      setIsModify(value);
    } else if (option == 'close') {
      setIsAdding(value);
      setIsModify(value);
    }
    if (value == false) {
      setAddObject({})
    }
  }

  function handleImage(e) {
    let a = URL.createObjectURL(e.target.files[0]);
    setAddObject({ ...addObject, photoName: a })
  }
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
          <Button click={() => handleAdding('add', true)} className="btnOrder">Add new pizza</Button>

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
          handlePage={handlePageParent}
          total={pizzaList.length}
        ></Pagination>
        {(isAdding || isModify) &&
          <div className="z-50 fixed h-svh w-4/5 bg-white p-20 overflow-scroll top-16">
            <Button click={() => handleAdding('close', false)}>X</Button>
            <form>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-2xl font-semibold leading-7 text-gray-900">Infomation</h2>
                  <p className="mt-1 text-lg leading-6 text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label htmlFor="name" className="block text-lg font-medium leading-6 text-gray-900">
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) => setAddObject({ ...addObject, name: e.target.value })}
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label htmlFor="ingredients" className="block text-lg font-medium leading-6 text-gray-900">
                        Ingredients
                      </label>
                      <div className="mt-2">
                        <textarea
                          onChange={(e) => setAddObject({ ...addObject, ingredients: e.target.value })}
                          id="ingredients"
                          name="ingredients"
                          rows={2}
                          className="block text-xl w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                          defaultValue={''}
                        />
                      </div>
                      <p className="mt-3 text-lg leading-6 text-gray-600">Write a few sentences about yourself.</p>
                    </div>
                    <div className="sm:col-span-2 sm:col-start-1">
                      <label htmlFor="price1" className="block text-sm font-medium leading-6 text-gray-900">
                        Price 1
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) => setAddObject({ ...addObject, price1: e.target.value })}
                          type="number"
                          name="price1"
                          id="price1"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="price2" className="block text-sm font-medium leading-6 text-gray-900">
                        Price
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) => setAddObject({ ...addObject, price2: e.target.value })}
                          type="number"
                          name="price2"
                          id="price2"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="price3" className="block text-sm font-medium leading-6 text-gray-900">
                        Price 3
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) => setAddObject({ ...addObject, price3: e.target.value })}
                          type="number"
                          name="price3"
                          id="price3"
                          autoComplete="price3"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label htmlFor="count" className="block text-sm font-medium leading-6 text-gray-900">
                        Count
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) => setAddObject(prev => { return { ...prev, count: e.target.value } })}
                          type="number"
                          name="count"
                          id="count"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="cover-photo" className="block text-lg font-medium leading-6 text-gray-900">
                        Cover photo
                      </label>
                      <div className="mt-2 rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                          <div className="mt-4 text-lg leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className=" w-full h-3/6 relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input onChange={(e) => handleImage(e)} id="file-upload" name="file-upload" type="file" className="sr-only w-full h-full mb-5" />

                            </label>
                            {!addObject.photoName ?
                              <p className="pl-1">or drag and drop</p> :
                              <img className="w-full h-[400px] object-cover" src={addObject?.photoName} alt="" />
                            }
                          </div>
                          <p className="text-xs leading-5 text-gray-600 mt-5">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={() => handleAdding('close', false)} type="button" className=" text-lg font-semibold leading-6 text-gray-900">
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
        }
      </div>
    </>
  );
}
