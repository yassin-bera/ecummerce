import React from "react";
import "./Assignment.css"
const Assignment = (props)=>{
     return(
        <div className="person__container">
            <div className="person__image">
                <img src={props.image} onClick={props.click}/>
                <span className="person__name" onClick={props.click}>{props.person}</span>
            </div>
            <div className="person__task__container">
                <p className="person__task" onClick={props.click}>{props.title}</p>
            </div>
        </div>
     )
}
export default Assignment