import React from "react";
import "./SliderIcon.css";
const SliderIcon = (props) => {
    return (
            <a className="slider__icon__holder">
                <img src={props.sliderIconSrc} className="slider__icon__img"/>
                <span className="slider__icon__text">{props.sliderIconText}</span>
            </a>
    );
}
export default SliderIcon;