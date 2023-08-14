import React from "react";
import "./NewsLine.css"
import SuggestBtn from "../SuggestBtn/SuggestBtn";
import { Link } from "react-router-dom";
const NewsLine = (props) => {
    return(
        <Link className="news__line__container" to={`/news/${props?.id}`}>
            <img src={props.NewsLineImage}/>
            <div className="news__line__left__container">
                    <div className="news__line__title__container">
                        <span>{props.NewsLineTitle}</span>
                        <span>{props.NewsLineMode}</span>
                    </div>
                    <div className="news__line__subTitle__container">
                        <span>{props.NewsLineSubTitle}</span>
                    </div>
                    <div className="news__line__time__container">
                        <span>{props.NewsLineDate}</span>
                        <span>{props.NewsLineTime}</span>
                        <SuggestBtn btnStyle={"news__line__btn"} SuggestBtnText={"متن کامل"}/>
                    </div>
            </div>
        </Link>
    );
}
export default NewsLine;