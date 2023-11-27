// 최상위 컴포넌트 :  Toolbar컴포넌트에 props로 테마값 전달
function App(props) {
  return <Toolbar theme="dark"/>
}

// App에서 받은 props를 ThemeButton에 넘겨주기 위해 props를 가짐
function Toolbar(props){
  return (
    <div>
      <ThemeButton theme={props.theme} />
    </div>
  );
}

// Toolbar 에서 받은 props를 Button에 넘겨줌
function ThemeButton(props){
  return <button>{props.theme} 버튼</button>
}

export default App;