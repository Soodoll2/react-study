import React, { useState } from "react";

// 비구조화 할당 : 배열이나 객체의 속성 혹은 값을 해체하여 그 값을 변수에 각각 담아 사용하는 자바스크립트 표현식 ㅋ ???
// 비구조화 할당 사용 전
// const colorList = ['red', 'yellow', 'green']
// const red = colorList[0];
// const yellow= colorList[1];
// const green = colorList[2];
// 비구조화 할당 사용 시
// const [red, yellow, green] = ['red', 'yellow', 'green']

function LandingPage(props){
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);
    const handleSubmit = (event) => {
        // - ES6
        // ＊ 백틱 or 억음 부호(``)와 ${}를 통해 한줄로 표현가능
        // ＊ '', ""를 자유롭게 사용할 수 있다. 
        alert( `아침식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest} `);
        event.preventDefault();
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                아침식사 여부 : 
                <input type="checkbox" checked={haveBreakfast} onChange={
                    (event) => {
                        setHaveBreakfast(event.target.checked)
                    }
                } />
            </label>
            <br />
            <label htmlFor="">
                방문객 수 : 
                <input type="number" value={numberOfGuest} onChange={
                    (event) => {
                        setNumberOfGuest(event.target.value)
                    }
                } />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default LandingPage;