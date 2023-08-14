import React from "react";
import { Link } from "react-router-dom";
import "./NewsCard.css";  

const NewsCard = (props) => {
    return (
        <div className="news__card">
            <div className="news__card__image">
                <img className="news__card__image__img" src={props.newsImage ?? ''} alt="newsImage"/>
            </div>
            <div className="news__card__text">
                <span className="news__card__text__title">{props.newsTitle}</span>
            </div>
            <div className="news__more__info">
                <Link to={`/news/${props?.newsId}`} className="news__card__text__description">بیشتر بخوانید</Link>
            </div>

        </div>
    );
}
export default NewsCard;