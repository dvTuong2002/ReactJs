import React, { useEffect, useState } from 'react'
import axios from "../api/api-data"

export default function ListUsers() {
    const [listUsers, setListUser] = useState([])

    //lấy dữ liệu từ api
    const getAllUser = async () =>{
        let respon = await axios.get("student")
        console.log("data api: ",respon);
        console.log("data api: ",respon.data);
        setListUser(respon.data)
    }

    useEffect(()=>{
        getAllUser();
    },[]);

    //map dữ liệu ra view
    const elementListUser = listUser.map((item,index) =>{
        return(
            <tr key={item.id} >
                <th scope="row">{item.id}</th>
                <td>{item.studentName}</td>
                <td>{item.age}</td>

            </tr>
        )
    })
    return (
        <div>
            <h2>List User</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Password</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {elementListUser}
                </tbody>
            </table>
        </div>
    )
}
