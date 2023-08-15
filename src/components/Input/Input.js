import React from "react";
import "./Input.css";
const Input = (props) => {
    return (
        <input onChange={props.onChange} className={props.inputStyle} type={props.type} placeholder={props.Placeholder} id={props.id} value={props.value} onClick={props.onClick} name ={props.name}/>
    );
}
export default Input;