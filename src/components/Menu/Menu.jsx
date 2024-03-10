import React, { useEffect, useState } from 'react'
import PizzaCard from './PizzaCard/PizzaCard';
import { pizzaData } from '../../data';
import './Menu.css'

export default function Menu(){
  //const pizzas = pizzaData;
  const [pizzas,setPizzas]=useState(pizzaData)
  const [isLoading,setIsLoading]=useState(true);
  const [page,setPage] = useState(1);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
    let a= pizzaData.slice((page-1)*10,(page-1)*10+10);
    setPizzas(a);
  },[])
  useEffect(()=>{
    let a= pizzaData.slice((page-1)*10,(page-1)*10+10);
    setPizzas(a);
  },[page]);
  function handlePage(page){
    console.log(page);
    setPage(page);
  }
  return (
    <>
      {
        isLoading==true ?
        (
          <div className="loader-container">
                <div className="spinner"></div>
          </div>
        ) : (
        <div className="menu">
          <h2>Our menu</h2>
          {
            pizzas && (
              <>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
                <ul className="pizzas">
                  {pizzas.map((pizza)=>(
                    <PizzaCard key={pizza?.id} className="pizza" info={pizza}></PizzaCard>
                  ))}
                </ul>
              </>
            )
          }
          <Pagination handlePage={handlePage} total={pizzaData.length}></Pagination>
        </div>
        )
      }
    </>
  )
}

function Pagination({handlePage,total}){
  const [page,setPage]= useState(1);
  const [totalPage,setTotalPage]=useState([]);
  const [array,setArray]=useState([]);
  const handleClick=(e)=>{
    e.preventDefault();
    handlePage(e.target.innerText);
    setPage(e.target.innerText);
  }
  useEffect(()=>{
    for(let i=0;i<total.length;i++){
      setArray(...array,{});
    }
  },[total])
  return (
    <>
      <ul className='pagiList'>
        {
          array.map((value,index)=>(
            <button className={`pagiStep `+ ( page ==(index+1) ? 'active' : '' )} onClick={handleClick} >
              {index+1}
            </button>
          ))
        }
      </ul>
    </>
  )
}
