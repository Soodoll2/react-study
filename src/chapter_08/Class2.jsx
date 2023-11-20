import React from "react";

class Toggle extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }
  

  render() {
    return(
      // <button onClick={this.handleClick}>
      //   클릭
      // </button>
      <button onClick={() => this.handleClick()}>
        클릭
      </button>
    );
  }
}

export default Toggle;