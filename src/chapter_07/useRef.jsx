import React, { useState, useEffect, useRef } from "react";

function TextInputWithFocusButton(props) {
  const inputElem = useRef(null);

  const onButtonClick = () => {
    // current는 마운틴 된 input element를 가리킴
    inputElem.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputElem} />
      <button onClick={onButtonClick}>Focus the Input</button>
    </div>
  );
}

export default TextInputWithFocusButton;