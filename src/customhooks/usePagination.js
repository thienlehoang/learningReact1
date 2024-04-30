import { useState } from "react";
export function usePagination(list,itemPerPage,page){
  const [isLoading, setIsLoading] = useState(false);
  function handlePagi(){
    setIsLoading(true);
    let a = list.slice(
      (page - 1) * itemPerPage,
      (page - 1) * itemPerPage + itemPerPage,
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return a;
  }
  return {isLoading,handlePagi};
}