import { useState } from "react";

/// [1] Containment : 하위 컴포넌트를 포함하는 합성 방법 
// 1) 하나의 chlidren 사용
// Dialog > FancyBorder
function FancyBorder(props) {
  return(
    <div style={{borderWidth: "10px", borderStyle: "solid",borderColor: props.color || "white",}}>
      {props.children}
    </div>
  );
}
// 2) 여러개의 chlidren 집합이 필요한 경우 별도의 props를 정의해서 사용 
// Dialog > SplitPane (props.left,props.right)
function Contacts() {}
function Chat() {}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}
function App() {
  return(
    <SplitPane left={ <Contacts /> } right={ <Chat /> } />
  );
}

// [2] Specialization : 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수화 시켜서 컴포넌트를 사용하는 합성 방식
// 범용적인 컴포넌트 Dialog를 만들어 WelcomeDialog 라는 컴포넌트로 특수화 시켜서 사용
// 범용적인 컴포넌트
function Dialog(props){
  return (
    <FancyBorder color="pink">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {/* Containment : 하위 컴포넌트를 포함하는 합성 방법  */}
      {props.children}
    </FancyBorder>
  );
}
// 특수화 시킨 컴포넌트
function WelcomeDialog(props){
  return (
    <>
    {/* Specialization  */}
    <Dialog title="어서오세요" message="우리 사이트에 방문하신 것을 환영합니다!" />
    </>
  );
}

// [3] Containment + Specialization
// Specialization : 화성 탐사 프로그램 닉네임 입력 특수화 컴포넌트
function SignUpDialog(props) {
  const [nickname, setNickname] = useState('');

  const handleChange = (event) => {
    setNickname(event.target.value);
  }

  const handleSignUp = () => {
    alert(`어서 오세요, ${nickname}님!`)
  }

  return (
    <Dialog title="화성 탐사 프로그램" message="닉넴임을 입력해주세요.">
      {/* Dialog 의 props.children */}
      <input value={nickname} onChange={handleChange} />
      <button onClick={handleSignUp}>가입하기</button>
    </Dialog>
  );
}
export default SignUpDialog;

// [4] 상속 : 리액트에선 상속 사용 X / 컴포넌트의 조합으로 새로운 컴포넌트 만들기!