import React, { Component } from 'react'

export default class WelcometoRedux extends Component {
  render() {
    return (
        <div>
            <h2>
                Xin chào, <span className="btn btn-danger">{'redux-demo'}</span>
            </h2>
            <h2>
                Chào mừng bạn đến với khóa học,
                <span className="btn btn-success">{'redux-reactjs'}</span> tại Devmaster Academy
            </h2>
        </div>
    );
  }
}
