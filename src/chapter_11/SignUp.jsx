import React, { useState } from "react";

function SignUp(props){
    const [name, setName] = useState('');
    const [gender, setGender] = useState('강아지');
    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }
    const handleSubmit = (event) => {
        if(name === ''){
            alert('이름을 입력 하라구요~~~~~');
        } else {
            alert( `이름 : ${name}, 성별 : ${gender}`);
        }
        
        event.preventDefault();
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                이름 : 
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label htmlFor="">
                성별 : 
                <select value={gender} onChange={handleChangeGender} >
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                    <option value="강아지">강아지</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default SignUp;