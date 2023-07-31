import React, { Component } from 'react'
import Student from '../../../mini-project-1/src/component/Student';

export default class ListStudent extends Component {
  render() {
    let list = this.props.renderStudents;
    let elementStudent = list.map((item,index)=>{
        return <Student key={index} renderStudent = {item} stt={index+1}/>
    })
    return (
      <>
      <table border={"1px"} cellPadding={"5"} cellSpacing={"0"} width={"80%"}>
          <thead>
              <tr>
                <th>STT</th>
                <th>Mã Sinh Viên</th>
                <th>Họ và Tên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
              </tr>
          </thead>
          <tbody>
            {elementStudent}
          </tbody>
      </table>
      </>
    )
  }
}
