import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 let [counter , SetCounter]= useState(15)
 const addValue = () => {
  SetCounter(counter+1);
 }
 const removeValue = () => {
  if(counter===0){
    SetCounter(0)
  }else{
  SetCounter(counter-1);
  }}
  return (
    <>
    <h1>Chai or React</h1>
    {counter===0 && <h2>cannot be less then zero</h2>}
    <h2>counter value :{counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
