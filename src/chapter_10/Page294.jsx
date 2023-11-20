import React, { useState } from "react";
//컴포넌트 만들기! 
function NumberList(props){
    const { numbers }  = props;
    //구조분해할당 ...어렵다....어려워
 
    // map 함수 : 배열의 첫 번째 아이템부터 순서대로 각 아이템에 어떠한 연산을 수행한 뒤에 최종 결과를 배열로 만들어서 리턴해준다.
    // listItems[0] = <li key={numbers[0].key}>{numbers.num[0]}</li>
    // listItems[1] = <li key={numbers[1].key}>{numbers.num[1]}</li>
    // listItems[2] = <li key={numbers[2].key}>{numbers.num[2]}</li>
    // listItems[3] = <li key={numbers[3].key}>{numbers.num[3]}</li>

    //매개변수/Parameter 전달인자/Argument
    //매개변수(parameter)는 함수 안에서의 정의 및 사용에 나열되어 있는 변수들을 의미하고요. 
    //전달 인자(argument)는 함수를 호출할 때 전달되는 실제 값을 의미해요.
    const listItems = numbers.map((aaa) =>
        <li key={aaa.key}>매개변수(parameter)는 함수 안에서의 정의 및 사용에 나열되어 있는 변수들을 의미{aaa.num}</li>
    )
    return (
        <ul>
            {listItems}
        </ul>
    );
}
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [
    {
        key : 1,
        num : 1,
    },
    {
        key : 2,
        num : 2,
    },
    {
        key : 3,
        num : 3,
    },
    {
        key : 4,
        num : 4,
    },
];

function LandingPage(props) {
    return (
        //numbers 라는 배열을 NumberList 컴포넌트에 props로 전달
        <NumberList numbers={numbers2} />
    );
}

export default LandingPage;