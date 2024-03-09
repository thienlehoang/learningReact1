import React, { useEffect, useState } from 'react'
import PizzaCard from './PizzaCard/PizzaCard';
import { pizzaData } from '../../data';
import './Menu.css'

export default function Menu(){
  const pizzas = pizzaData;
  const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  },[])
  useEffect(()=>{
    
  },[])
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
          <Pagination list={pizzaData}></Pagination>
        </div>
        )
      }
    </>
  )
}

function Pagination(props){
  const [page,setPage]= useState(1);
  const [totalPage,setTotalPage]=useState([]);
  const itemPerPage=10;
  const {list}=props;
  const array=[1,2,3]
  const handleClick=(e)=>{
    setPage(e.target.innerText);
  }
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
