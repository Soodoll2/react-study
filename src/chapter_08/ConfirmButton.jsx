import React, { useState } from "react";

function ConfirmButton(props) {
  // state 정의
  const [isConfirmed, setIsConfirmed] = useState(false);

  // step2 버튼 클릭 이벤트 처리를 위한 이벤트 핸들러
  const handleConfirm = () => {
    // setState 사용하여 수정. state로 바로 수정할 수는 있지만 리액트가 수정된 것을 제대로 인지하지 못할 수 있기 때문에 setState사용하여 수정
    // state는 컴포넌트의 렌더링과 관련이 있기 때문에 직접적으로 수정하면 안됨! 그러므로 setState만 사용
    // state가 변경 될 때에는 컴포넌트가 재더링 되기 때문에 렌더링과 데이터흐름에 관련이 있는 값을 포함하여 사용해야 한다.
    setIsConfirmed(prevIsConfirmed => !prevIsConfirmed);
  };

  return(
    <button 
      onClick={handleConfirm}
      disabled={isConfirmed}
    >
      {isConfirmed ? '확인됨' : '확인하기'}
    </button>
  )
}

export default ConfirmButton;