import React from "react";
import NumberBox from "../NumberBox/NumberBox";
import "./Duty.css"
const Duty = (props) => {
    return(
        <div className="duty__container">
            <div className="number__includer">
                <NumberBox number={props.number}/>
            </div>
            <div className="duty__box">
                <span>{props.title}</span>
            </div>
        </div>
    );
}
export default Duty;