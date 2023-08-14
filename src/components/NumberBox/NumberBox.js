import React from "react";
import "./NumberBox.css";
const NumberBox = (props) => {
    return(
        <div className="number__box__container">
            <span className="number__box__number">{props.number}</span>
        </div>
    );
}
export default NumberBox;