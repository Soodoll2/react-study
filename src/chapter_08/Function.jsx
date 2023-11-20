import React, { useState } from "react";

function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);
  
  //함수형 컴포넌트 이벤트 핸들러 정의방법
  // 1. 함수컴포넌트 안에 함수로
  // function handleClick(){
  //   setIsToggleOn((isToggleOn) => !isToggleOn);
  // }
  // 2. arrow function 사용
  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  )
}

export default Toggle;