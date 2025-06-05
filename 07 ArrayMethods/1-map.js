
// map() method array ke har element pe ek function apply karta hai aur naya array return karta hai jisme transformed elements hote hain.

let array = [1,2,3,4,5];
// map method se har element ko 10 se multiply karke new array banta hai
let map = array.map((e) => e*10)


console.log("Old Array :",array);
console.log("New Array :",map);