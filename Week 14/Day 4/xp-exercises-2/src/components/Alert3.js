import React from 'react';

const Alert3 = (props) => {
    const {text, color} = props;
    const colorClasses = {
        red: 'alert-danger',
        orange: 'alert-warning',
        green: 'alert-success'
    }
    if (colorClasses[color] === undefined) {
        return (
            alert("I don't know this color. I'm confuse...")
        )
    } else {
        return (
            <>
        <p>Exercise 3: Smart Alert</p>
            <div className={`alert ${colorClasses[color]}`} role="alert">
            {text}
            </div>
            </>
            )
        }
    }

export default Alert3;
    