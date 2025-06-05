// Filter() ek JavaScript array method hai jo array ke andar se kuch elements ko condition ke basis par chun kar naya array banata hai
let array = [12,5,8,20,3]
let filter = array.filter((value)=> value > 10)
console.log("Without Filtered values", array);
console.log("Filtered values > 10 :", filter);


