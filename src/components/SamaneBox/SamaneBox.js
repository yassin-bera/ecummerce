import React from "react";
import SuggestBtn from "../SuggestBtn/SuggestBtn"; 
import "./SamaneBox.css";
const SamaneBox = (props) => {
    return (
        <div className="samane__box__container">
                <div className="samane__box__right">
                    <div className="samane__box__right__title">
                        <span>{props.samaneBoxTitle}</span>
                    </div>
                    <div className="samane__box__right__text">
                        <span>{props.samaneBoxText}</span>
                    </div>
                    <div className="samane__box__right__button">
                        <SuggestBtn btnStyle={"samane__box__btn"} SuggestBtnText={"ثبت پیشنهاد و ایده"}/>
                    </div>
                </div>
                <div className="samane__box__left">
                    <img src={props.samaneImg} className="samaneImg"/>
                </div>
        </div>
    );
}
export default SamaneBox;