import React, { useContext } from 'react'
//sử dụng ngữ cảnh theme được tạo từ example
import { ThemeContext } from './ExampleContext'

function Infor() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h4>Infor - COmponents</h4>
            <p className={theme}>
                React Hook Form reduces the amount of code you need to write while removing unnecessary re-renders.
                Now dive in and explore with the following example
            </p>
        </div>
    )
}

export default Infor