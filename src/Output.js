import React, { useState, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./Redux/anotherSlice";

// import { switcher } from "./Redux/anotherSlice";
function Output() {
//   const input = useSelector((state) => state.another.value);
const apiData = useSelector((state)=>state.another.data)
  const dispatch = useDispatch()

//   const [chg, setChg] = useState();
  
useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  console.log(apiData);
  return (
  <>
  </>
  
//   <input type="text" onChange={(e)=>dispatch(switcher(e.target.value))} />
  )
}

export default Output;
