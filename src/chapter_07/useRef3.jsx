import {useState, useRef, useEffect} from 'react';

function App() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus(); //DOM요소인 input에 포커스 보내기
  }, []);

  const loginAlert = () => {
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder='id' />
      <button onClick={loginAlert}>로그인</button>
    </div>
  );
}

export default App;