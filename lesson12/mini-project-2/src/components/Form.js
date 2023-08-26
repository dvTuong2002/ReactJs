import React, { useEffect, useState } from 'react'

function Form({renderTask, onToggle, onSubmit}) {
    const [task, setTask]=useState(renderTask);
    const handleToggle = ()=>{
        onToggle(false);
    }
    const handleChange = (event)=>{
        let name=event.target.name;
        let value = event.target.value;
        setTask({
            ...task,
            [name]:value
        })
    }
    let elementLevel = '';
    if(task.label===0 || task.label==="0"){
        elementLevel=
        <>
            <option value={0} selected>Small</option>
            <option value={1} >Medium</option>
            <option value={2}>High</option> 
        </>
    }else if(task.label===1 || task.label==="1"){
        elementLevel=
        <>
            <option value={0} >Small</option>
            <option value={1} selected>Medium</option>
            <option value={2}>High</option> 
        </>
    }else{
        elementLevel=
        <>
            <option value={0} >Small</option>
            <option value={1} >Medium</option>
            <option value={2} selected>High</option> 
        </>
    }

    // Submit
    const handleSubmit=(event)=>{
        event.preventDefault()
        onSubmit(false,task);
    }
    return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form action="" method="POST" className="form-inline">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <input
                            type="text" className="form-control"  placeholder="Task Name"
                            name='taskName'
                            value={task.taskName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <select
                            
                            id="inputDs"
                            className="form-control"
                            required="required"
                            name="level"
                            value={task.level}
                            onChange={handleChange}
                        >
                           {elementLevel}
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                    <button type="button" className="btn btn-default" onClick={handleToggle}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Form