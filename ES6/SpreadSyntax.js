//cho phép lặp lại các phần tử trong
//mảng hoặc đối tượng

var oldArr=[1,2,3]
var newArr=[oldArr,4,5];
console.log(newArr);

//cú pháp spread
newArr = [...oldArr,4,5]
console.log(newArr);

//
newArr=oldArr
newArr.push(4);
newArr.push(5);
console.log(newArr);
