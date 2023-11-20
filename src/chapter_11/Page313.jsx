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
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    // const value = useState('');
    // const setValue = useState('');

    const handleChange = (event) => {
        // 파라미터(매개변수) event는 이벤트 객체를 나타냄
        // event.target : 현재 발생한 이벤트의 타겟을 나타냄.
        // event.target.value : 현재 선택 된 타겟의 value 속성값  
        setValue(event.target.value);

        // 입력제어 
        //setValue(event.target.value.toUpperCase());
    }
    const handleSubmit = (event) => {
        alert('입력한 이름:' + value);
        // - ES6
        // ＊ 백틱 or 억음 부호(``)와 ${}를 통해 한줄로 표현가능
        // ＊ '', ""를 자유롭게 사용할 수 있다. 
        alert( `'입력한 이름: ${value}' `);
        event.preventDefault();
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                이름 : <input type="text" value={value} onChange={handleChange} />
                {/* value={value} <- 리액트 컴포넌트의 state에서 값을 가져다 넣어 주는 것 */}
                자기소개 : <textarea></textarea>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default LandingPage;