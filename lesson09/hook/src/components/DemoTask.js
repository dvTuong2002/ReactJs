import React, { useState } from 'react'

export default function DemoTask() {
    //mock data
    const listTask = [
        { taskId: 1, taskName: "Học useState" },
        { taskId: 2, taskName: "Lab useState" },
    ]
    //useState
    const [list, setList] = useState(listTask)
    const taskObject = { taskId: 0, taskName: "" }
    const [task, setTask] = useState(taskObject);

    const handleChange = (event) => {
        let value = event.target.value;
        let taskIdMax = list[list.length-1].taskId;
        setTask({
           taskId:taskIdMax+1,
           taskName:value
        });
        // console.log(task);
    };
    //Hiển thị dữ liệu listTask
    let elementTask = list.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.taskId}</td>
                <td>{item.taskName}</td>
            </tr>
        )
    })

    //thêm
    const handleSubmit = (event) => {
        event.preventDefault();
        //lấy task lớn nhất
        let taskIdMax = list[list.length - 1].taskId;
        setTask({
            ...task,
            taskId: taskIdMax + 1,
        })
        // thêm vào list
        setList([
            ...list,
            task
        ])
    }


    return (
        <div>
            <form>
                <label>Nhập Task:</label>
                <input className='mx-2' name='taskName' value={task.taskName} onChange={handleChange} />
                <button
                    className='btn btn-primary mx-2'
                    onClick={handleSubmit}>Add New</button>
            </form>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task Name</th>
                    </tr>
                </thead>
                <tbody>
                    {elementTask}
                </tbody>
            </table>
        </div>
    )
}
