import React from 'react';

const Alert4 = (props) => {
    const {text, color} = props;
    const colorClasses = {
        red: 'alert-danger',
        orange: 'alert-warning',
        green: 'alert-success'
    }
    if (colorClasses[color] === undefined) {
        return (
            alert("The color blue is not in the List")
        )
    } else {
        return (
            <>
        <p>Exercise 4: More Alert Colors</p>
            <div className={`alert ${colorClasses[color]}`} role="alert">
            {text}
            </div>
            </>
            )
        }
    }

export default Alert4;
    