import React, { useEffect, useState } from "react";
import Square from "./Square";
import Move from './Move.js'
import "./Tictac.css";
import { mockComponent } from "react-dom/test-utils";
import axios from "axios";


function Tictac() {
  const [arr, setArr] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  const [history,setHistory] = useState([]);

  const updater = (a) => {
    if (arr[a] || winner(arr)) {
      return;
    }
    const newArr = [...arr];
    if (next) {
      newArr[a] = "X";
    } else {
      newArr[a] = "O";
    }

    setNext(!next);
    setArr(newArr);
    setHistory([...history,newArr])
    console.log(next);
  };

  const moveHandler = (i)=>
{
  setArr(history[i])
}
  const line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const winner = (square) => {
    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
  };

  const win = winner(arr);
  let status;
  if (win) {
    status = "The Winner is: " + win;
  } else {
    status = "Next turn: " + (next ? "X" : "O");
  }

  const [userData, setUserData]= useState('')

  const aaluFunction = ()=>{
    try
  {
    axios.get("http://localhost:5000/bpi").then((response)=>{
      // setUserData(response.data)
      console.log((response.data.user.length));
    })
  }
  catch(error){
    console.error('this is error', error)
  }
  }
 
  useEffect(()=>{
    aaluFunction()
  },[])

  // const [value, setValue] = useState('')

  // const [next,setNext] = useState(true)

  // const numberUpdater = (a)=>{

  //    setNext(!next) ;

  //    if(next){
  //     setValue('X')}
  //     else{
  //     setValue('O')
  //     }
  //     return

  // }




  return (
    <>
      <div className="winner"> {status}</div>
      
      <div className="bigbox">
        {arr.map((a, i) => (
          <Square key={i} index={i} updater={updater} arr={arr} />
        ))}
      </div>
      {/* <div className="bigbox">

        <Square/>
        </div> */}
        <div className="start" onClick={()=>{setArr(Array(9).fill(null));setHistory([]) } }>Startthegame</div>
        {history.map((value, index)=>
        <Move moveHandler = {moveHandler} index ={index} key={index} history = {history}/>
        )}
       
    </>
  );
}

export default Tictac;
