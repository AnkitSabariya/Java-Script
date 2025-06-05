let array = [1,2,3,4,5,6,7,8,9,10]
console.log("Array : ",array);

let filter = array.filter((value)=>value % 2 === 0)
console.log("Filter Array : ",filter);

let map = filter.map((value2)=>value2 * value2)
console.log("Map Array : ",map);