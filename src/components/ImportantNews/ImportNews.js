import React from "react";
import { Link } from "react-router-dom";
import "./ImportNews.css"
const ImportNews = (props) => {
    return(
        <Link className="import__news__container" to={`/news/${props?.id}`}>
            <img className="import__news__image" src={props.importImage}/>
            <div className="import__news__text__container">
                <div className="import__news__text__title__container">
                    <span>{props.importTitle}</span>
                </div>
                <div className="import__news__text__date__container">
                    <span>{props.importDate}</span>
                </div>
            </div>
        </Link>
    );
}
export default ImportNews;