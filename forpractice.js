let f = ["apple", "banana", "cherry"];
f.forEach(item => console.log(item)

)
let f1 = ["apple", "banana", "cherry"];
f1.forEach((fruits, index) => {
    console.log(`${fruits}:${index}`)
}
)
let f2 = ["apple", "banana", "cherry"];
f1.forEach((index, fruits) => {
    console.log(`${index}:${fruits}`)
}

)
//forEach to sum values
let prices = [100, 200, 300];
let total = 0;
prices.forEach(price => total += price);
console.log("Total:", total);

console.log("start")
setTimeout(() => { console.log("middle") }, 2000)
console.log("end")

