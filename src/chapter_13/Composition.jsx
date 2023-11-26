
/// [1] Containment : 하위 컴포넌트를 포함하는 합성 방법 
// 1) 하나의 chlidren 사용
// Dialog > FancyBorder
function FancyBorder(props) {
  return(
    <div className={'Fancyborder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
// 2) 여러개의 chlidren 집합이 필요한 경우 별도의 props를 정의해서 사용 
// Dialog > SplitPane (props.left,props.right)
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
      {/* FancyBorder 컴포넌트의 props.children */}
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  );
}
// 특수화 시킨 컴포넌트
function WelcomeDialog(props){
  return (
    <Dialog title="어서오세요" message="우리 사이트에 방문하신 것을 환영합니다!" />
  );
}

// [3] Containment + Specialization


// [4] 상속 : 리액트에선 상속 사용 X / 컴포넌트의 조합으로 새로운 컴포넌트 만들기!


//