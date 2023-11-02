import React, { useState } from "react";

// {scaleNames[props.scale]} <- 상위 컴포넌트에서 값 가져옴
const scaleNames = {
  c: '섭씨',
  f: '화씨'
};

// 1. 내부 state 사용 할 때
// function TemperatureInput(props) {
//   const [temperature, setTemperature] = useState(''); //온도값 state 
//   // 함수
//   const handleChage = (event) => {
//     setTemperature(event.target.value);
//   }
//   return (
//     <fieldset>
//       <legend>온도를 온도를 입력해 주세요 (단위: {scaleNames[props.scale]})</legend>
//       {/* 내부 state에서 값을 가져 옴. 값이 변경되면 handleChage 함수를 실행시켜 setTemperature 로 state 업데이트 */}
//       <input value={temperature} onChange={handleChage} />
//     </fieldset>
//   )
// }

// 2. Lifting State Up(state 끌어올리기) : 하위 컴포넌트의 스테이트를 공통된 부모 컴포넌트로 올려서 share state 적용 -> TemperatureInput에 있던 스테이트를 Calculator로 끌어 올림.
function TemperatureInput(props) {
  // 함수
  const handleChage = (event) => {
    props.onTemperatureChange(event.target.value);
  }
  return (
    <fieldset>
       {/* props를 통해 상위 컴포넌트에서 값을 가져오게 함. 단위 가져옴 */}
      <legend>온도를 온도를 입력해 주세요 (단위: {scaleNames[props.scale]})</legend>
      {/* props를 통해 상위 컴포넌트에서 값을 가져오게 함. 값이 변경되면 handleChage 함수를 실행시켜 onTemperatureChange() 함수를 통해 변경된 온도 값이 상위 컴포넌트로 전달 됨. */}
      <input value={props.temperature} onChange={handleChage} />
    </fieldset>
  )
}

export default TemperatureInput;