import React from "react";

//컨텍스트 사용 : 초깃값 설정 X -> 이후에 provider에서 설정 할 예정
const ThemeContext = React.createContext();
//개발자 도구에 보여질 이름
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;