const studentDetails = [
    { name: 'Alice', score: 25 },
    { name: 'John', score: 37 },
    { name: 'bean', score: 50 },
    { name: 'tean', score: 20 },
    { name: 'soan', score: 70 }

]
const passedStudents = studentDetails.filter(student => student.score >= 36)
console.log(passedStudents)
const upperNames = passedStudents.map(student => student.name.toUpperCase())
console.log(upperNames)
const totalMarks = passedStudents.reduce(function (acc, student) {
    return acc = acc + student.score;
}, 0)
console.log(totalMarks)
