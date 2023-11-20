import React from "react";

class Toggle extends React.Component {
  constructor(props) { // 클래스 컴포넌트에는 요 생성자 함수가 존재함 . 이안에 state 정의
    super(props); // 요기까지 기본으로 써줘야함...ㅋ

    this.state = {isToggleOn : true}; // state 정의 - 함수형 컴포넌트에서는 setState사용 

    this.handleClick = this.handleClick.bind(this);
    // callback 에서 this를 사용하기 위해서는 바인딩을 필수적으로 해줘야 합니다.
  }

  handleClick() {
    // setState 사용하여 수정. state로 바로 수정할 수는 있지만 리액트가 수정된 것을 제대로 인지하지 못할 수 있기 때문에 setState사용하여 수정
    // state는 컴포넌트의 렌더링과 관련이 있기 때문에 직접적으로 수정하면 안됨! 그러므로 setState만 사용
    // state가 변경 될 때에는 컴포넌트가 재더링 되기 때문에 렌더링과 데이터흐름에 관련이 있는 값을 포함하여 사용해야 한다.
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? '켜짐' : '꺼짐'}
      </button>
    );
  }
}

export default Toggle;