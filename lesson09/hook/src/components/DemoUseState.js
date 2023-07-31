import React, {useState} from 'react'

export default function DemoUseState() {
    //truyền 1 giá trị với hàm useState
    const [count, setCount] = useState(10); //khởi tạo biến state count = 10

    //change count
    const handleChangeCount = (param)=>{
        switch (param){
            case "Up":
                setCount(prev => prev+1);
                break;
            case "Down":
                setCount(prev => prev-1);
                break;
        }   
    }

//truyền mảng
 const arr = ["Dev","Master"] //khai báo biến mảng
 const [lists, setLists] = useState(arr) //truyền giá trị đầu vào là 1 mảng

 //event function cập nhật thêm phần tử vào mảng
 const handleAddList = ()=>{
    setLists([
        ...lists,
        parseInt(Math.random()*100)
    ])
 }
  return (
    <div className='mx-3'>
        <h2>Demo useState - Hook</h2>
        <p>Giá trị count: {count}</p>
        <button className='btn btn-success mx-1' onClick={()=>handleChangeCount("Up")}>Tăng</button>
        <button className='btn btn-danger mx-1' onClick={()=>handleChangeCount("Down")}>Giảm</button>

        <hr/>
        <div>Mảng giá trị: {lists.toString()}</div>
        <button className='btn btn-primary m-1' onClick = {handleAddList}>
            Thêm giá trị ngẫu nhiên vào mảng</button>
    </div>
  )
}
