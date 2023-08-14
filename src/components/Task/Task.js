import React from "react"
import "./Task.css"
const Task = (props)=>{
     return(
        <div className="task__container">
             <a>{props.singleTask}</a>
        </div>
     );
}
export default Task