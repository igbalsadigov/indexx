let students=[
    {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    ]


let topStudents = students.filter(student => student.grade === 100 || student.grade === 95);
topStudents.forEach(student => console.log(student.name));


let count = students.filter( student => student.name.length <= 5).length;  
console.log ("5 ve ya 5 den az herifli adlar: " + count);


let studentId8 = students.find(student => student.id === 8);
console.log(studentId8.name, studentId8.surname);