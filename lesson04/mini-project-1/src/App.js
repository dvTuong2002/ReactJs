import React, { Component } from 'react'
import Control from './component/Control'
import Form from './component/Form'
import ListStudent from './component/ListStudent'



export default class App extends Component {
  constructor(props){
    super(props)
    //quản lý dữ liệu trong state
    this.state = {
      student :[
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
      ], //Mảng danh sách sinh viên
    }
  }



  render() {
    let {student} = this.state
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* ./control */}
              <Control />
              {/* ./control */}
             
             {/*ListStudent */}
             <ListStudent renderStudents = {student}/>
               {/*ListStudent */}
            </div>
          </div>
          <div className="col-5 grid-margin">
            <div className="card">
              {/*Form */}
              <Form />
              {/*Form */}
            </div>
          </div>
        </div>
      </div >
    )
  }
}
