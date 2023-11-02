import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";


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
  const rounded = Math.round(output * 10000) / 1000;
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
    setScale('c');
  }

  //화씨변환 함수
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  )
}
export default Calculator;
