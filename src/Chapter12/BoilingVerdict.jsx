import React from "react";

// props 로 값을 입력받고 조건에 따라서 문구를 다르게 출력함
function BoilingVerdict(props) {
  if (props.celsius >= 100){
    return <p>물이 끓습니다.</p>;
  } else if (props.celsius < 100) {
    return <p>물이 끓지 않습니다.</p>;
  }
  return <p>온도가 입력되지 않았습니다.</p>;
}

export default BoilingVerdict;