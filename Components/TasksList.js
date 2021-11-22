import React from "react";
import TaskItem from "./TaskItem";

const TasksList = (props) =>{

    const { tasks, removeItem, editItem } = props

    return <div>
        { tasks.length === 0 ? 
            <div>
                <h4>No tasks found</h4>
                <p>Add your first task</p>
            </div> : <div>
                <h1> My tasks - { tasks.length } </h1> 
                { tasks.map((task) =>{
                    return <TaskItem 
                        key = { task.id }
                        {...task}
                        removeItem = { removeItem }
                        editItem = { editItem }
                    /> 
                }) }
            </div>
        }
    </div>
}

export default TasksList