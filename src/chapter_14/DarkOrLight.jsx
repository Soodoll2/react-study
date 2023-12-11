import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

// 최상위 컴포넌트
function DarkOrLight(props) {
  //theme 값
  const [theme, setTheme] = useState("light");

  //toggleTheme 함수 관리
  const toggleTheme = useCallback(() => {
    //조건에 따라서 state값 변경
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]); //리턴

  return (
    //하위 컴폰넌트에서 context값을 자유롭게 사용 가능
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;