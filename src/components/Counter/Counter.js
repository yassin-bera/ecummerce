import React from "react";
import "./Counter.css"
const Counter = (props) => {
    return(
            <div className="counter__box">
                <div className="counter__image__container">
                    <img src={props.counterImage}/>
                </div>
                <div className="counter__text__container">
                    <span>{props.counterNumber}</span>
                    <p>{props.counterText}</p>
                </div>
            </div>
    );
}
export default Counter;