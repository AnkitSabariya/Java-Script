// some() check karta hai ki array mein kam se kam ek element kisi condition ko satisfy karta hai ya nahi.
// anwser true / false
let array = [3,7,11,15,19]
let some = array.some((value)=> value % 2 === 0)
console.log(some);
