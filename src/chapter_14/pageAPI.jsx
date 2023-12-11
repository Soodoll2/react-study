import React, { Children } from "react";

//context 생성
// 만약 상위 레벨에 매칭되는 provider가 없다면 기본값이 사용 됨 (기본값으로 undefined를 넣으면 기본값이 사용되지 않음)
const MyContext = React.createContext("기본값!!!!");
MyContext.displayName ="MyDisplayName!!!"

function Page(props) {
  return (
    //Provider 로 감싼 컴포넌트의 하위 컴포넌트는 모두 context데이터에 접근할 수 있다.
    //PageLayout 컴포넌트에 props를 전달하지 않아도 하위 컴포넌트인 네이게이션 바에서 context데이터에 접근 가능
    <MyContext.Provider value="pink">
      <PageLayout />
    </MyContext.Provider>
  );
}

function PageLayout(){
  return (
    <div className="PageLayout">
      <NavigationBar />
    </div>
  );
}

function NavigationBar(){
  return (
    <div className="NavigationBar">
      {/* 컨텍스트의 데이터를 구독하는 컴포넌트 */}
      {/* 하위 컴포넌트가 contextr값을 사용할 때 consumer 컴포넌트 사용. consumer 컴포넌트는 Provider의 값이 변경 될 때마다 재랜더링 됨 */}
      <MyContext.Consumer>
        {value => 
          // 컨텍스트의 값에 따라서 컴포넌트들을 렌더링함
          // 랜더링하는 부분이라 한번 감싸야 하는듯? 안그럼 에러남ㅋ 
          <>{value}</>
        }
      </MyContext.Consumer>
    </div>
  );
}



export default Page;