import React, { Children } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex; // flex 선언
  //flex-direction: row; // 방향 선언 - main axis 정하기
  flex-direction: ${ props => props.direction ? props.direction : 'row'};
  justify-content: flex-start; // main axis 기준
  //align-items: flex-start; // cross axis 기준
  align-items: ${ props => props.align ? props.align : 'flex-start'};
  background-color: lightgray;
  flex-wrap: wrap;
  margin-bottom: 20px;
  p {
    width: 100%;
    margin: 0 0 10px 0;
    padding: 0;
  }
`;

const WrapperPink = styled(Wrapper)`
  background-color: pink;
`;

const Block = styled.div`
  //여기엔 왜 또 괄호가 들어가...?
  padding: ${ (props) => props.padding};
  // 괄호 안 해도 잘 나옴... 뭐죠? 스크립트 뿌셔버려
  background-color: ${ props => props.backgroundColor};
`;

//배열
const blockItems = [
  //blockItems[0]
  {
    label : "1",
    padding: "1rem",
    backgroundColor: "purple",
  },
  //blockItems[1]
  {
    label : "2",
    padding: "3rem",
    backgroundColor: "green",
  },
  //blockItems[2]
  {
    label : "3",
    padding: "2rem",
    backgroundColor: "orange",
  },
]

function Page(props) {
  return (
    <>
      <Wrapper>
        <p>align-items : flex-start</p>
        {/* 
          
          1. 정의
            map() 함수 : 배열을 처리해서 새로운 배열로 반환하기 위한 함수입니다.

          2. 구문
            arr.map(function(currentValue[, index[, array]]) {
              // 변환(mapping)할 로직: 변환된 결과를 반환해야 합니다.
            }[, thisArg]);

          3. 구조와 매개변수
            (1) arr: map() 함수에 적용할 배열입니다.
            (2) function: arr 배열의 각 요소에 적용할 때 호출되는 콜백 함수입니다. 이 함수는 세 개의 매개변수를 가질 수 있습니다.
              - currentValue (필수 값): 처리할 현재 요소. 이 매개변수를 통해 현재 요소에 접근할 수 있습니다.
              - index (선택 사항): 처리할 현재 요소의 인덱스. 이 매개변수를 사용하여 현재 요소의 인덱스에 접근할 수 있습니다.
              - array (선택 사항): map() 함수를 호출한 배열. 이 매개변수를 사용하여 원본 배열에 접근할 수 있습니다.
            (3) thisArg (선택 사항): function을 실행할 때 this로 사용할 객체. 이 매개변수는 필요에 따라 사용됩니다.

          4. 반환 값
            배열의 각 요소에 대해 실행한 function의 결과를 모은 새로운 배열.

          5. 구현 설명
            map() 함수는 arr 배열의 요소를 순서대로 한 번씩 순회하면서 function 함수를 호출하고, 함수의 반환 값을 새로운 배열에 모아서 반환합니다.
            이를 통해 각 요소를 변환하거나 조작하여 새로운 배열을 생성할 수 있습니다. map() 함수는 원본 배열을 변경하지 않으며, 변환 작업을 수행하여 새로운 배열을 생성하는 기능을 제공합니다.
         */}
        {blockItems.map((blockItemAAA) => {
          return (
            <Block padding={blockItemAAA.padding} backgroundColor={blockItemAAA.backgroundColor}>
              {blockItemAAA.label}
            </Block>
          )
        })}
      </Wrapper>

      <Wrapper align='baseline'>
        <p>align-items : baseline</p>
        {blockItems.map((blockItemAAA) => {
          return (
            <Block padding={blockItemAAA.padding} backgroundColor={blockItemAAA.backgroundColor}>
              {blockItemAAA.label}
            </Block>
          )
        })}
      </Wrapper>

      <Wrapper align='stretch'>
        <p>align-items : stretch</p>
        {blockItems.map((blockItemAAA) => {
          return (
            <Block padding={blockItemAAA.padding} backgroundColor={blockItemAAA.backgroundColor}>
              {blockItemAAA.label}
            </Block>
          )
        })}
      </Wrapper>

      <WrapperPink align='stretch' direction='column'>
        <p>align-items : stretch</p>
        <p>direction : column</p>
        {blockItems.map((blockItemAAA) => {
          return (
            <Block padding={blockItemAAA.padding} backgroundColor={blockItemAAA.backgroundColor}>
              {blockItemAAA.label}
            </Block>
          )
        })}
      </WrapperPink>
    </>
  );
}

export default Page;
