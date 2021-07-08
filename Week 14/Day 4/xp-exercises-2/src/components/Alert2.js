import React from "react";

function Alert2(props) {
    const {text} = props;
  return (
      <>
        <p>Exercise 2: Conditional Rendering</p>
        <div className="alert alert-danger" role="alert" >
            {text}
        </div>
        <br></br>
    </>
  );
}

export default Alert2;
