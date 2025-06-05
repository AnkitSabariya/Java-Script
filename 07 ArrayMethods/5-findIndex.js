//  findIndex Array ko left se right iterate karna, aur jaise hi condition true ho, wahi index return kar dena aur iteration rok dena.
let array = [7, 14, 21, 28, 35];
let temp = array[0];
let a;

let find = array.findIndex((value) => value % temp === 0 && value > 20);

console.log("Index Found:", find); // Output: 2
