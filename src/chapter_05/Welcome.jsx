import React from 'react';

function Welcome(props) {
    return (
        <h1>안녕 {props.name}</h1>
    )
}
function WelcomeLeander(){
    return(
        <Welcome name="수정" />
    )
}

export default WelcomeLeander;
