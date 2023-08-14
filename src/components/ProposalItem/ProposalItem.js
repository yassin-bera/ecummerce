import React from "react";
import "./ProposalItem.css";

const ProposalItem = (props) => {
    return (
        <div className="proposal__item__container">
            <img src={props.itemImage}/>
            <p className="proposal__item__text">{props.itemTitle}</p>
            <p className="proposal__item__number">{props.itemNumber}</p>
        </div>
    );
}
export default ProposalItem;