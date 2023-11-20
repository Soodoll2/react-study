import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    // 속성 3개를 받는다
    // {props.isLoggedIn, props.onClickLogin, props.onClickLogout}
    const { isLoggedIn, onClickLogin, onClickLogout } = props;


    return (
        <div style={styles.wrapper}>
            {/* 인라인 If 
              true && expresstion -> expresstion(표현)
              false && expresstion -> false 
            */}
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
            
            {/* 인라인 If-Else 
              조건문 ? 참일 경우 : 거짓일 경우
            */}
            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;