import {useState, useRef, useEffect} from 'react';
import ThisChild from './ThisChild'

function App() {

  const arrowFunction = () => {
    console.log(this)
  }

  function normalFunction (){
    console.log(this)
  }


  return (
    <>
      <ThisChild />
      <div><button onClick={arrowFunction}>Arrow function</button></div>
      <div><button onClick={normalFunction}>Normal function</button></div>
    </>
  );
}

export default App;