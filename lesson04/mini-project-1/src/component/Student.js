import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    //Lấy dữ liệu từ props => hiện thị trên các element
    let {renderStudent,stt} = this.props;
    console.log("Student:",renderStudent);
    return (
      <>
       <tr>
                        <td>{stt}</td>
                        <td>{renderStudent.studentId}</td>
                        <td>{renderStudent.studentName}</td>
                        <td>{renderStudent.age}</td>
                        <td>{renderStudent.sex?"Nam":"Nữ"}</td>
                        <td>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-danger btn-icon-text"
                            >
                              Xem
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning btn-icon-text"
                            >
                              Sửa
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-icon-text"
                            >
                              Xóa
                            </button>
                          </div>
                        </td>
                      </tr>
      </>
    )
  }
}
