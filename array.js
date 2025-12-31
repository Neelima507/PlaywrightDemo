const dropdown = ["ale", "ble", "cle"]
console.log(dropdown)
dropdown.push("push added last")
console.log(dropdown)
dropdown.pop()
console.log(dropdown)
dropdown.unshift("1")
console.log(dropdown)
dropdown.shift()
console.log(dropdown)
dropdown.slice(0, 1)
console.log(dropdown)
dropdown.splice(0, 2)
console.log(dropdown)
const transactions = ["T1", "T2", "T3", "T4"];
const recent = transactions.slice(0, 2);
console.log(recent);
console.log(transactions);

const cart = ["Item1", "Item2", "Item3", "item4", "item5", "item6"];
cart.splice(2, 4);
console.log(cart);

let fruits = ["apple", "banana", "cherry", "dates"];
let copyFruits = fruits.slice(1, 3);
console.log(copyFruits); // ["banana", "cherry"]
console.log(fruits);     // ["apple", "banana", "cherry", "dates"]

for (let k = 1; k <= 10; k++) {
    if (k % 2 == 0) {
        console.log(k)
    }
}


