import React from "react";
import "./NewsBox.css";
const NewsBox = (props) => {
    return(
        <div className="news__box">
            <div className="news__box__img">
                <img src={props.newsImg}/>
            </div>
            <div className="news__box__text">
                <p className="news__title">{props.newsTitle}</p>
                <a className="read__more">بیشتر بخوانید</a>
            </div>
        </div>
    );
}
export default NewsBox;