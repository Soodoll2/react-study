import React, { Children } from "react";
import styled from "styled-components";

// const : 상수 

// 기본 형태 + props 사용하기
const Button = styled.button`
  color: ${props => props.dark ? "white" : "dark"};
  background: ${props => props.dark ? "black" : "white"};
  border: 1px solid black;
  margin: 10px;
`;

// 스타일 확장하기 : 기존 컴포넌트를 가져와서 컴포넌트 생성
const RoundButton = styled(Button)`
  border-radius: 10px;
`;


function Page(props) {
  return (
    <>
      <Button>Normal</Button>
      <Button dark>Dark</Button>

      <RoundButton>Round</RoundButton>
    </>
  );
}

export default Page;
