import React from "react";

const students = [
    {
        key : 1,
        name : "김수정",
    },
    {
        key : 2,
        name : "안수연",
    },
    {
        key : 3,
        name : "정지은",
    },
    {
        key : 4,
        name : "조봉구",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.key}>{student.name}</li>
            })}

{/* 
    위 화살표 함수는 아래 함수의 축약 버전입니다. 
    
    function(student) {
        return <li key={student.key}>{student.name}</li>
    }

    1)   (매개변수) => { 본문 }
    2)   매개변수가 하나뿐인 경우 괄호 생략 가능 a => a+b
    3)   매개변수가 없을 경우에는 괄호 필수 () => a+b
    4)   본문이  return [식 or 값] 뿐인 경우  { } 와  return 키워드 생략 가능   a = > a+b
    5)   위 4) 에서  return 할 값이  객체인 경우네는 괄호 필수 
*/}

        </ul>
    );
}

export default AttendanceBook;