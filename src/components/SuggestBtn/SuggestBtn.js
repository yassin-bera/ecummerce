import React from "react";
import "./SuggestBtn.css";
import {Link} from "react-router-dom";
const SuggestBtn = (props) => {
    
    return (
        <Link to={props.BtnLink} className={props.btnStyle} onClick={props.selectBtn}>{props.SuggestBtnText}</Link>

    );
}
export default SuggestBtn;