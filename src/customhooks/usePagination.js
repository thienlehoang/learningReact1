import { useState } from "react";
export function usePagination(list,itemPerPage,page){
  const [isLoading, setIsLoading] = useState(false);
  function handlePagi(){
    setIsLoading(true);
    var a=[];
    if(list.length>0){
      a = list.slice(
        (page - 1) * itemPerPage,
        (page - 1) * itemPerPage + itemPerPage,
      );
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return a;
  }
  return {isLoading,handlePagi};
}