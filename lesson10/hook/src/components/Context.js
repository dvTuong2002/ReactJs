import React, { useContext } from 'react'
//sử dụng tài nguyên chia sẻ từ components ExampleContext
import { ThemeContext } from './ExampleContext'
import Infor from './Infor';

function Context() {
    //sử dụng hàm useContext để truy cập đến theme
    const theme = useContext(ThemeContext);

  return (
    <div>
        <h3 className={theme}>Nội dung components Context</h3>
        <Infor />
    </div>
  )
}

export default Context