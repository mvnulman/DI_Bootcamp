import React from "react";

function Alert(props) {
    const {text} = props;
  return (
      <>
        <p>Exercise 1: Alert</p>
        <div className="alert alert-danger" role="alert" >
            {text}
        </div>
        <br></br>        
    </>
  );
}

export default Alert;
