//trích xuất thành phần
// array / object
var arr=[1,3,5,7];
const [a,b]=arr;
console.log("a=",a);
console.log("b=",b);

var ojb = {
    name:"Chung Trịnh",
    age:44,
    address:"25 vũ ngọc phan",
    skill:"All"
}
//des
var {name,age} = ojb;
console.log("Xin chào",name,age);

var {name,address} = ojb;
console.log("Xin chào",name,address);
