import React, { useState } from "react";

function WarningBanner(props) {
  if(!props.warning){
    //props.warning 값이 false일 경우 null 리턴 -> 렌더링 되지 않음.
    return null;
  }
  return(
    <div>경고!</div>
  )
}

export default WarningBanner;