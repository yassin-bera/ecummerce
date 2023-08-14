import React from "react";
import "./TextBox.css"
const TextBox = (props)=>{
    return(
        <div className="row__box__container">
            <div className="row__box">
                <p>{props.text}</p>
                <img src={props.src} />
            </div>
        </div>
    )
}
export default TextBox