import React from "react";
import "./Input.css";
const Input = (props) => {
    return (
        <input className={props.inputStyle} type={props.type} placeholder={props.placeholder} id={props.id} value={props.value}/>
    );
}
export default Input;