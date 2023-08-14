import React from "react";
import "./Person.css"
const Person = (props) => {
    return(
        <div className="manager__item">
            <div className="manager__information">
                <div className="manager__image">
                    <img  className="image__ass" src={props.image}/>
                </div>
                <div className="manager__phone">
                    <a className="phone_assis" href={`tel:${props.phone}`}>{props.phone}</a>
                </div>
                <div className="manager__name">
                    <p className="name__ass">{props.name}</p>
                </div>
            </div>
            <p className="manager__title">{props.dutyPerson}</p>
        </div>
    );
}
export default Person;