const { log } = require("node:console");


function varExample() {
    var x = 1
    if (true) {
        var x = 2
        console.log("Inside if block:", x);
    }

    console.log("Outside if block:", x);
}

varExample();
function letExample() {
    let y = 3
    console.log("Outside if block:", y);
    if (true) {
        let y = 2
        z = 1
        console.log("Inside if block:", y);
    }
    y = 4

    console.log("Outside if block:", y);
    console.log("Outside if block:", z);
}

letExample();
function constExample() {
    const a = 22
    console.log(a)
    if (true) {
        const a = 11
        console.log(a)
    }
    console.log(a)
}
constExample()