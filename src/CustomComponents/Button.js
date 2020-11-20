import React from 'react';

const Button = (props) => {
    const classNeime = "ui basic " + props.color + " button"
    console.log(classNeime)
    return (
        <div>
            <button className={classNeime}>
                {props.buttonText}
            </button>
        </div>
    );
}

export default Button;