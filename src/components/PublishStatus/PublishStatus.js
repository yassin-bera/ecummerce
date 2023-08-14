import React from "react";
import "./PublishStatus.css";
import SuggestBtn from "../SuggestBtn/SuggestBtn"
const PublishStatus = (props) => {
    return (
              <div className="publish__container">
                    <div className="publish__time__container">
                        <p className="">{props.publishTime}</p>
                    </div>
                    <div className="publish__data__container">
                        <p className="">{props.publishDate}</p>
                    </div>
                    <div className="publish__number__container">
                        <span>شماره :</span>
                        <p className="">{props.publishNumber}</p>
                    </div>
                    <div className="publish__view__container">
                        <span>بازدید :</span>
                        <p className="">{props.publishView}</p>
                    </div>
                    <div className="publish__url__container">
                        <div className="publish__input__url">{props.publishUrl}</div>
                        <SuggestBtn btnStyle={"publish__input__copy__style"} SuggestBtnText={"کپی"}/>
                    </div>
                    <div className="publish__print__container">
                        <SuggestBtn btnStyle={"publish__print__btn__style"} SuggestBtnText={"چاپ"}/>
                    </div>
              </div>
    );
}
export default PublishStatus;