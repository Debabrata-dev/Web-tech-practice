let Student={
    id:90,
    name:"Debabrata",
    mark:[89,90],
    subject:{web:80,java:90},
    isPresent:true
}

console.log(Student.name);
console.log(Student);
console.log(Student.mark);
console.log(Student.subject.java);
Student.isPresent="flase";
console.log(Student.isPresent);
Student.age=22;
console.log(Student);
delete Student.mark;
console.log(Student);


