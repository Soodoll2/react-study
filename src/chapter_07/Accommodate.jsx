import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props){
  const [isFull, setIsFull] = useState(false); // 
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("=========시작=============");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`);
    console.log("나는 의존성 배열이 없는 훅이라서 랜딩 시 계속 실행 됩니다요~");
    console.log("=========끝=============");
  }); // 의존성 배열이 없는 훅 : 랜딩 시 항상 작동함
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log("~~~~~~~~시작~~~~~~~~~~");
    console.log(`Current count value: ${count}`);
    console.log("나는 의존성 배열이 있는 훅이라서 의존성 배열 값이 변경 되면 실행 되유");
    console.log("~~~~~~~~끝~~~~~~~~~~");
  }, [count]); // 의존성 배열이 있는 훅 : 의존성 배열 값이 변경 될 경우에만 실행

  // ** 빈 배열을 넣은 훅 : 마운트와 언마운트 시 한번 실행 됨

  return (
      <div style={{ padding: 16 }}>
          <p>{`총 ${count}명 수용했습니다.`}</p>

          <button onClick={increaseCount} disabled={isFull}>
              입장
          </button>
          <button onClick={decreaseCount}>퇴장</button>
          

          {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
      </div>
  );
  
}

export default Accommodate;

