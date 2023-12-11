import React from "react";

//테마를 위한 컨텍스트 생성

const ThemeContext = React.createContext('light');

function App(props) {
  return (
    // 컨텍스트를 사용하려면 상위 컴포넌트를 Provider로 감싸줘야 함. 이러면 하위 컴포넌트드은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있음
    // Provider 를 사용하여 하위 컴포넌트에 현재 테마의 데이터 값을 전달
    // 현재 테마이 데이터 값을 dark로 전달
    //
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props){
  return (
    // App 컴포넌트에 있는 데이터를 하위 컴포넌트(중간 과정 컴포넌트)에 전달 할 필요 없음
    <div>
      <ThemeButton />
    </div>
  );
}

function ThemeButton(props){
  return (
    // 가장 가까운 상위 컴포넌트에서 Provider를 찾아 해당되는 값을 사용함
    // Provider가 없을 경우에는 기본값을 사용.
    <ThemeContext.Consumer>
      {value => <button theme={value}>{value} 버튼</button>}
    </ThemeContext.Consumer>
  );
}

export default App;