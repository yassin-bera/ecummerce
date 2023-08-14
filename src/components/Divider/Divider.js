import React from "react";
import "./Divider.css";
const Divider = (props) => {
    return(
        <div className="divider__container">
            <span className="divider__top__title">{props.dividerTopText}</span>
            <div className="divider__line"></div>
            <span className="divider__bottom__title">{props.dividerBottomText}</span>
        </div>
    );
}
export default Divider;