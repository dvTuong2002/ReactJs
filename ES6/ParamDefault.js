//tham số mặc định (2 cách khai báo)
//note: ds các tham số mặc định => phải đặt cuối danh sách

function add(a,b,c=10){
    //biến c là loại tham số mặc định
    let kq=a+b+c;
    console.log("ket qua:",kq);
}
//exec
add(10,20); //40
add(10,20,50); //70

//cách 2:
function display(name, company){
    company = company || "Devmaster Academy";

    console.log('======================================');
    console.log("xin chào",name);
    console.log(company);
    console.log('======================================');
}
display("Chung Trịnh"); //sử dụng company là mặc định
display("Dev","Viện công nghệ")
