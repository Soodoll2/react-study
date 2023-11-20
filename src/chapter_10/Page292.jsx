import React, { useState } from "react";


function LandingPage(props) {
 //const doubled = numbers.map((number) => number * 2);

 const numbers = [1, 2, 3, 4, 5];
 const listItems = numbers.map((number) =>
    <li>{number}</li>
 )

    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default LandingPage;