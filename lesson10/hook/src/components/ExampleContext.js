import React, { createContext, useState } from 'react'
import Context from './Context';

 //tạo ngữ cảnh
 export const ThemeContext = createContext();

function ExampleContext() {

    //useCOntext
    const [theme, setTheme] = useState('blue'); //khởi tạo state là lớp css có tên .blue

    //hàm xử lý thay đổi style từ theme
    const toggleTheme =()=>{
        setTheme(theme==='blue'?'red':'blue');
    }
   
  return (
    <ThemeContext.Provider value={theme}>
    <div>
        <h2>Demo Context: createContext, useContext</h2>
        <button className='btn btn-success' 
         onClick={toggleTheme}>
            Toggle Theme
        </button>
        <Context />
    </div>
    </ThemeContext.Provider>
  )
}

export default ExampleContext