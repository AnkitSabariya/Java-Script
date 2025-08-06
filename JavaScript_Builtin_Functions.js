
/* ========================================
   📅 DATE FUNCTIONS
======================================== */
console.log("=== DATE FUNCTIONS ===");

let now = new Date();
console.log("Current Date & Time:", now);
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day (0-6):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Timestamp (ms):", now.getTime());
console.log("Locale Time:", now.toLocaleTimeString());
console.log("Locale Date:", now.toLocaleDateString());

/* ========================================
   🔢 NUMBER FUNCTIONS
======================================== */
console.log("\n=== NUMBER FUNCTIONS ===");

let num = 123.456;
console.log("isNaN:", isNaN(num));
console.log("isFinite:", isFinite(num));
console.log("toFixed(2):", num.toFixed(2));
console.log("toPrecision(4):", num.toPrecision(4));
console.log("parseInt:", parseInt("42px"));
console.log("parseFloat:", parseFloat("42.56px"));

/* ========================================
   🧵 STRING FUNCTIONS
======================================== */
console.log("\n=== STRING FUNCTIONS ===");

let str = "   Hello JavaScript!   ";
console.log("Length:", str.length);
console.log("Trim:", str.trim());
console.log("To UpperCase:", str.toUpperCase());
console.log("To LowerCase:", str.toLowerCase());
console.log("Substring(0,5):", str.substring(0, 5));
console.log("Slice(-6):", str.slice(-6));
console.log("Replace:", str.replace("JavaScript", "JS"));
console.log("Includes 'Hello':", str.includes("Hello"));
console.log("Split by space:", str.trim().split(" "));

/* ========================================
   📋 ARRAY FUNCTIONS
======================================== */
console.log("\n=== ARRAY FUNCTIONS ===");

let arr = [1, 2, 3, 4, 5];
console.log("Length:", arr.length);
console.log("Push:", arr.push(6), arr);
console.log("Pop:", arr.pop(), arr);
console.log("Shift:", arr.shift(), arr);
console.log("Unshift:", arr.unshift(0), arr);
console.log("IndexOf 3:", arr.indexOf(3));
console.log("Includes 4:", arr.includes(4));
console.log("Map x2:", arr.map(x => x * 2));
console.log("Filter > 2:", arr.filter(x => x > 2));
console.log("Reduce sum:", arr.reduce((a, b) => a + b, 0));
console.log("Sort Desc:", arr.sort((a, b) => b - a));

/* ========================================
   📦 OBJECT FUNCTIONS
======================================== */
console.log("\n=== OBJECT FUNCTIONS ===");

let obj = { name: "Ankit", age: 25 };
console.log("Keys:", Object.keys(obj));
console.log("Values:", Object.values(obj));
console.log("Entries:", Object.entries(obj));
console.log("Assign:", Object.assign({}, obj, { city: "Delhi" }));
console.log("HasOwnProperty name:", obj.hasOwnProperty("name"));

/* ========================================
   🧮 MATH FUNCTIONS
======================================== */
console.log("\n=== MATH FUNCTIONS ===");

console.log("PI:", Math.PI);
console.log("Round:", Math.round(4.6));
console.log("Floor:", Math.floor(4.9));
console.log("Ceil:", Math.ceil(4.1));
console.log("Abs:", Math.abs(-5));
console.log("Pow:", Math.pow(2, 3));
console.log("Sqrt:", Math.sqrt(16));
console.log("Random (0-1):", Math.random());
console.log("Max:", Math.max(1, 5, 9));
console.log("Min:", Math.min(1, 5, 9));

/* ========================================
   🔄 JSON FUNCTIONS
======================================== */
console.log("\n=== JSON FUNCTIONS ===");

let jsonObj = { name: "Ankit", skill: "JS" };
let jsonStr = JSON.stringify(jsonObj);
console.log("Stringify:", jsonStr);
console.log("Parse:", JSON.parse(jsonStr));

/* ========================================
   🕹 CONSOLE FUNCTIONS
======================================== */
console.log("\n=== CONSOLE FUNCTIONS ===");

console.error("This is an error!");
console.warn("This is a warning!");
console.table([{ name: "Ankit" }, { name: "Rohit" }]);

/* ========================================
   ⏱ TIMING FUNCTIONS
======================================== */
console.log("\n=== TIMING FUNCTIONS ===");

setTimeout(() => {
    console.log("Executed after 1 second");
}, 1000);

let counter = 0;
let intervalId = setInterval(() => {
    counter++;
    console.log("Interval:", counter);
    if (counter === 3) clearInterval(intervalId);
}, 500);
