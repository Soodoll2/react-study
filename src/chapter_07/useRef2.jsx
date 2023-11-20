import {useState, useRef} from 'react';

function App() {
  const [render, setRender] = useState(false);
  const countRef = useRef(0);
  let countVar = 0;

  console.log('***** 렌더링 후 Ref:', countRef.current);
  console.log('***** 렌더링 후 Var:', countVar);

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref Up! ------->', countRef.current);
  }

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('Var Up! ------->', countVar);
  }

  const deRender = () => {
    setRender(!render);
  }

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <div>
        <button onClick={increaseRef}>Ref Up!</button>
        <button onClick={increaseVar}>Var Up!</button>
        <button onClick={deRender}>Render!</button>
      </div>
    </div>
  );
}

export default App;