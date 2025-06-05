// forEach() method array ke har element pe ek function chalata hai, lekin koi naya array return nahi karta. Bas har element pe side effects ke liye (jaise printing, updating variables, DOM manipulation) use hota hai

let array = [10, 20, 30, 40, 50];
array.forEach((value,index,arr) => {
    console.log("Value:", value, "Index:", index, "Array:", arr);
});
let string = ["Hello", "World", "JavaScript"]
let ans=" "
string.forEach((value)=>{
    
    ans += value.toUpperCase() + " ";
  
    
    
    
})
console.log(ans.trim()); // Remove extra space