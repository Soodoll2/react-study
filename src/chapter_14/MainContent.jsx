import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
  // consumer 컴포넌트 대신 훅을 사용
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      // 기본 테마 현재 설정값으로 랜더링
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            {/* 버튼을 누르면 테마 변경 : toggleTheme 함수 호출  */}
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;
