import React, { useEffect, useState } from 'react'
import axios from 'axios'

import EditTask from './EditTask'

const TaskItem = (props) => {

    const { title, id, status, removeItem, editItem } = props

    const [toggle, setToggle] = useState(false)

    const handleRemove = (id) => {
        const confirmRemove = window.confirm(`Are you sure ?`)
        if(confirmRemove){
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
            .then((response)=>{
                const result = response.data
                removeItem(result.id)
            })
            .catch((err) =>{
                const error = err.message
                console.log(error)
            })
        }
    }

    const handleToggle = () =>{
        const result = !toggle
        setToggle(result)
    }

    return (
        <div>
            { toggle ? 
            <div>
                <EditTask 
                    id = { id }
                    status = { status }
                    title = { title }   
                    editItem = { editItem } 
                    handleToggle = { handleToggle }
                />
                <button onClick = { handleToggle } > cancel </button>
            </div> : 
                <div>
                    <h3> { title } </h3>
                    <button onClick = { handleToggle } > edit </button>
                    <button onClick = {() => { handleRemove(id) }} > remove </button>
                </div> 
            }
           
        </div>
    )
}

export default TaskItem
