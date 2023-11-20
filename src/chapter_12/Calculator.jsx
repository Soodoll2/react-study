import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
// import BoilingVerdict from "./BoilingVerdict";


// props 로 값을 입력받고 조건에 따라서 문구를 다르게 출력함
function BoilingVerdict(props) {
  if (props.celsius >= 100){
    return <p>물이 끓습니다.</p>;
  } else if (props.celsius < 100) {
    return <p>물이 끓지 않습니다.</p>;
  }
  return <p>온도가 입력되지 않았습니다.</p>;
}

//화씨온도와 섭씨온도의 값을 동기화 시키기 위해서 각각 변환하는 함수를 작성해야 함

// 1-1. 화씨를 섭씨로 변환하는 함수 : 파라미터를 받아서 계산
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
// 1-2. 섭씨를 화씨로 변환하는 함수 : 파라미터를 받아서 계산
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// 2. 온도 값과 변환하는 함수를 파라미터로 받아서 값을 변환시켜 리턴해주느 함수
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  //숫자가 아닌 값을 입력하면 empty string을 리턴하도록 예외처리
  if(Number.isNaN(input)) {
    return '';
  }
  // convert(함수)에 input을 파라미터로 받음
  const output = convert(input);
  // 계산
  const rounded = Math.round(output * 1000) / 1000;
  // 값 리턴
  return rounded.toString();
}

function Calculator(props) {
  // 온도와 단위 상태값
  const [temperature, setTemperature] = useState(''); //온도값 state (TemperatureInput으로부터 끌어옴. share state)
  const [scale, setScale] = useState('c'); //섭씨 화씨 세팅. 기본 값 c(섭씨)

  //섭씨변환 함수
  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature); 
    setScale('c'); //섭씨 세팅
    // step1. TemperatureInput 컴포넌트에 있는 값 temperature={celsius}
    // step2. const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  }

  //화씨변환 함수
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f'); //화씨 세팅
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  // 입력 시 스케일이 화씨(f)면 섭씨로 변환(toCelsius)하고 스케일이 화씨가 아니면 입력 값 그대로 사용
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  // 입력 시 스케일이 섭씨(c)면 화씨로 변환(toFahrenheit)하고 스케일이 섭씨가 아니면 입력 값 그대로 사용

  return (
    <div>
      {/* 두개의 컴포넌트가 동시에 변경 되는 이유는 스테이트가 변경되면서 랜딩이 다시 되는데 둘이 같은 스테이트를 사용하기 때문이다 */}
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      {/* 
      onTemperatureChange 는 TemperatureInput 컴포넌트의 함수 사용
          const handleChage = (event) => {
            props.onTemperatureChange(event.target.value);
          }
      */}
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  )
}
export default Calculator;
