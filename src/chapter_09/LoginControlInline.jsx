import React, { useState } from "react";

function Greeting(props) {
  // isLoggedIn 은 Greeting 컴포넌트의 props.isLoggedIn(속성) 
  const isLoggedIn = props.isLoggedIn;

  // isLoggedIn이 참일 때 UserGreeting 아니면 GuestGreeting
  if (isLoggedIn) {
    return <UserGreeting /> //다시 오셨군요!
  } else {
    return <GuestGreeting /> // 회원 가입을 해주세요!
  }
}
function UserGreeting(props) {
  return <h1>다시 오셨군요!</h1>
 }
function GuestGreeting(props) {
  return <h1>회원 가입을 해주세요!</h1>
 }

function LoginButton(props){
  return(
    // 로그인 버튼 클릭하면 LoginButton 컴포넌트의 props.onClick 속성을 onClick한다
    <button onClick={props.onClick}>
      로그인
    </button>
  );
}
function LogoutButton(props){
  return(
    // 로그아웃 버튼 클릭하면 LogoutButton 컴포넌트의 props.onClick 속성을 onClick한다
    <button onClick={props.onClick}>
      로그아웃
    </button>
  );
}

function LoginControl(props) {
  // 로그인 상태 값 설정 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {/* 
        1. isLoggedIn 상태값이 최초에 false라 그에 따른 그리팅 문구와 버튼 출력
        2. 로그인 버튼 클릭시 상태갑시 true가 되고 재랜더링 되면서 문구와 버튼이 변경 됨
      */}
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn
        // 조건이 참일 때 리턴
        ? <LogoutButton onClick={handleLogoutClick} />
        // 조건이 거짓일 때 리턴
        : <LoginButton onClick={handleLoginClick} />
      }
      
    </div>
  );

}

export default LoginControl;