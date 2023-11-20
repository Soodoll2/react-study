import {useState, useRef, useEffect} from 'react';


function App() {

  const arrowFunction = () => {
    console.log(this)
  }

  function normalFunction (){
    console.log(this)
  }


  return (
    <>
      <div><button onClick={arrowFunction}>Arrow function</button></div>
      <div><button onClick={normalFunction}>Normal function</button></div>
    </>
  );
}

export default App;