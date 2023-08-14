import Reactm  from "react";
import "./Manager.css"
const Manager = (props) => {
    return (
        <div className="manager__container">
            <div className="manager__top">
                <div className="manager__right__box">
                    <a className="manager__btn">دانلود رزومه</a>
                </div>
                <div className="manager__left__box">
                    <span className="manager__style">{props.managerName}</span>
                </div>
            </div>
            <div className="manager__bottom">
                <div className="manager__title">
                    <span className="manager__title__text">
                        {props.managerTitle}
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Manager;