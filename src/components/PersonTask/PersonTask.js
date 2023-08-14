import React , {useState} from "react";
import "./PersonTask.css"
import Button from "../Button/Button";
import Assignment from "../Assignment/Assignment";
import Task from "../Task/Task"
const PersonTask = (props)=>{
    const [showValue , setShowValue] = useState(false)
   const clickHandler = ()=>{
    setShowValue(!showValue)
      
   }
    return(
    <div className={`task__box ${showValue ? 'active': ''}`}>
        <div className="task__top">
            <Assignment click={clickHandler} image={props.image} person={props.person} title={props.title}/>
            <div className="task__btn">
                <Button/>
            </div>
        </div>
        <div className={`row__task ${showValue ? "active2" : ""}`}>
            {props.task.map((item)=>{
                return(<Task singleTask={item}/>)
            })}
        </div>

     </div>
    );
   
}
export default PersonTask