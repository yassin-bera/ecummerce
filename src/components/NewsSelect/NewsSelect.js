import React  , {useState}from "react";
import "./NewsSelect.css";
const NewsSelect = () => {
    const [activeItem, setActiveItem] = useState(null);

    const selectHandler = (className) => {
        setActiveItem(className);
    };
    return (
        <ul className="news__mode">
           <li 
               className={activeItem === "all" ? "all active" : "all"}
               onClick={() => selectHandler("all")}>همه
            </li>
           <li
                className={activeItem === "news" ? "news active" : "news"}
                onClick={() => selectHandler("news")}
           >اخبار
           </li>
           <li
                className={activeItem === "information" ? "information active" : "information"}
                onClick={() => selectHandler("information")}
           >اطلاعیه
           </li>
        </ul>
    );
}
export default NewsSelect;