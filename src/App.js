import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import Tictac from "./Tictac";
import Complete from "./Complete.js";
import axios from "axios";
import "./App.css";
import Marvel from "./Marvel";
import Forbootstrap from "./Forbootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  togglerSwitch,
} from "./Redux/counterSlice.js";
import Output from "./Output.js";
import { switcher } from "./Redux/anotherSlice.js";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const toggler = useSelector((state) => state.counter.valueToggler);
  const trueFalseSwitch = useSelector((state) => state.another.value);

  console.log(trueFalseSwitch);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/spi", values)
      .then((req, res) => console.log("donenanadan"))
      .catch((err) => console.log(err));
  };

  // const seefun = ()=>{
  //   try
  //   {
  //     axios.get('http://localhost:5000/spi').then((res)=>
  //     {console.log(res.data[2].name);}
  //     )
  //   }
  //   catch(err){
  //   console.error(err);
  // }
  // }

  // useEffect(()=>{
  //   seefun()
  // },[])

  return (
    <>
      {/* <div><input type="text" name='name' onChange={handleChange}/></div>
     <div><input type="text" name='user' onChange={handleChange}/></div>
     <div> <input type="text" name='password' onChange={handleChange}/></div>
     <button onClick={onSubmit}>SUbmit</button> */}

      {/* <div><input type="text" name="email" onChange={handleChange}  /></div>
      <div><input type="text" name="name" onChange={handleChange}  /></div>
      <div> <input type="text" name="password" onChange={handleChange}  /></div>
      <button onClick={onSubmit}>Submit</button> */}

      {/* <div className='formarvel'><img src={marvel+'.jpg'} alt="" /></div> */}

      <Navbar />
      {/* <button className="btn btn-danger" onClick={() => dispatch(increment())}>
        +r
      </button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <button className="btn btn-danger" onClick={() => dispatch(switcher())}>
        a
      </button> */}

      {/* <Tictac/>
    <Complete/> */}

      {/* <Marvel/> */}
      <Output />
      <Forbootstrap />
    </>
  );
}

export default App;
