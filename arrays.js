let marks = [10, 202, 302, 402, 777, 7779]
console.log(marks)
console.log(marks[2])
marks[1] = 111
console.log(marks)
console.log(marks.length)
console.log("***********")
marks.push(1010) //adds number at last
//marks.pop() //deletes number at last
console.log(marks.indexOf(777))
marks.unshift(11)


for (const mark of marks) {
    console.log(mark)

}
console.log(marks.indexOf(777))
console.log(marks.includes(100))
// verify any element whether present or not by includes method
//console.log(marks.slice(2, 6)) //print sub array
var sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}
console.log(sum)

