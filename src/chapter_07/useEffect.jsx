import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`
  }, [count]);

  return (
    <div>
      <p>
        total { count } click
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
}

export default Counter;