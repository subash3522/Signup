import {useEffect, useState} from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import Tictac from './Tictac'
import Complete from './Complete.js'
import axios from 'axios'
import './App.css'
import Marvel from './Marvel'

function App() {

const [values, setValues] = useState({
  name: '',
  email: '',
  password:''
})


const handleChange = (e)=>{
setValues({...values,[e.target.name]:e.target.value})
}

const onSubmit = (e)=>{
  e.preventDefault();
  axios.post('http://localhost:5000/spi', values)
  .then((req,res)=>console.log('donenanadan'))
  .catch(err=>console.log(err))
}

const seefun = ()=>{
  try
  {
    axios.get('http://localhost:5000/spi').then((res)=>
    {console.log(res.data[2].name);}
    )
  }
  catch(err){
  console.error(err);
}
}

useEffect(()=>{
  seefun()
},[])




  return (
    <>
     {/* <div><input type="text" name='name' onChange={handleChange}/></div>
     <div><input type="text" name='user' onChange={handleChange}/></div>
     <div> <input type="text" name='password' onChange={handleChange}/></div>
     <button onClick={onSubmit}>SUbmit</button> */}

<div><input type="text" name="email" onChange={handleChange}  /></div>
      <div><input type="text" name="name" onChange={handleChange}  /></div>
      <div> <input type="text" name="password" onChange={handleChange}  /></div>
      <button onClick={onSubmit}>Submit</button>

      {/* <div className='formarvel'><img src={marvel+'.jpg'} alt="" /></div> */}

    {/* <Navbar/>
    <Tictac/>
    <Complete/> */}

    <Marvel/>

    </>
  )
}

export default App