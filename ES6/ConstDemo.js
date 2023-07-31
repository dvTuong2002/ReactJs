//khai báo biến hàm
const x=5;
console.log("gia tri x=",x);

// x=10
// console.log("gia tri x=",x);
//erro

/* erro
if (x==5){
    x=100; //khong dc gán lại
    console.log("gia tri x khi thay doi gia tri la:",x);
}
*/

if (x==5){
  let x=100;
    console.log("x ben trong if:",x);
}

