
/*
const reducer = "Devmaster Academy";
console.log(reducer);
export default reducer;
*/

//1. createStore
import {createStore} from 'redux'
//2. Tạp reducer từ state, action
//input: old state, action
//output: new state

//initialState
const initialState = {
    userName:"Tưởng Đỗ",
    courseName:"Devmaster ReactJs"
}

const reducer = (state=initialState, action)=>{
    //dựa vào action, action.type để cập nhật state
    //tiếp nhận Action và thực hiện cập nhật state
    switch(action.type){
        case "CHANGE_USER_NAME":
            state.userName=action.userNameNew;
            break;
        case "CHANGE_COURSE_NAME":
            state.courseName=action.userNameNew;
            break;
        default:
            return state;
    }
    return state;
}
//3 tạo store từ reducer
const store = createStore (reducer);
//lấy dữ liệu từ store sử dụng getState()
console.log(store);
//lấy dữ liệu từ store sử dụng getState
console.log("Initial State");
console.log(store.getState());

export default reducer;

//4. thực hiện cập nhật state của store
//thực hiện cập nhật state của store (với userName)
const actChangeUserName = ()=>{
    return{
        type:"CHANGE_USER_NAME",
        userNameNew: "Đỗ Văn Dev"
    }
}
//bắn action từ component lên store để thực hiện cạp nhật state
store.dispatch(actChangeUserName());
console.log("Change course name");
console.log(store.getState());



