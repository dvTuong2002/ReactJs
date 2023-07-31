//cài đặt oop trong js (es6)

class Person{
    constructor(){
        this.name = "Nguyen Duy Quang";
        this.age = 37
    }
    getName(){
        return this.name;
    }

    setAge(age){
        this.age = age;
    }
    getAge(){
        return this.age
    }
}
var person = new Person();
person.setAge(38);
console.log("Tên người:"+person.getName());
console.log("Tuổi:"+person.getAge());


class Student extends Person{
    constructor (name,age,studentId){
        super(name,age);
        this.studentId="SV001"
    }
    getStudentInfo(){
        return "tên:"+this.getName()+"Tuổi: "+this.getAge()+"-Mã SV: "+this.studentId
    }
}
var student = new Student();
console.log(student.getStudentInfo());
