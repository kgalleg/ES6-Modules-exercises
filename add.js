// 1) Make main/add/subtract js modules
// 2) Create a private variable of 10 in both add and subtract
// 3) Create add and subtract functions in their respective modules that act on a number passed into them and the private var
// 4) Import both modules into main.js
// 5) execute both function in main.js

let addVariable = 10 //this is our private variable 

function addingNumber(number) {
    return addVariable + number
}

export {addingNumber}

