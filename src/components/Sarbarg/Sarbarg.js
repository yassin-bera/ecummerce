import React from "react";
import "./Sarbarg.css"
const Sarbarg = (props) => {
    return(
        <div className="sarbarg">
            <h1>{props.sarbargTitle}</h1>
            {/* <h2>{props.sarbargSubTitle}</h2> */}
        </div>
    );
};
export default Sarbarg;