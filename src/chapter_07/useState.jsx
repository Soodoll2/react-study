import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(1);

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