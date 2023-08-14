import React from "react";
import { Link } from "react-router-dom";
import "./IconBox.css";
const IconBox = (props) => {
    return (
        <Link className="icon__box__container" to={props.BoxLink}>
               <img src={props.IconSrc} className="box__icon__img"/>
               <span className="icon__box__text">{props.IconText}</span>
        </Link>
    );
}
export default IconBox;