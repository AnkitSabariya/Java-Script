
/* ========================================
   📅 DATE FUNCTIONS
======================================== */
console.log("=== DATE FUNCTIONS ===");

let now = new Date();
console.log("Current Date:", now);
console.log("ISO String:", now.toISOString());
console.log("Locale String:", now.toLocaleString());
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Day:", now.getDay());
console.log("Time in ms:", now.getTime());
console.log("Custom Time:", now.getHours() + ":" + now.getMinutes());

/* ========================================
   🔢 NUMBER FUNCTIONS + CONVERTERS
======================================== */
console.log("\n=== NUMBER FUNCTIONS ===");

console.log("Number() from string:", Number("42"));
console.log("parseInt:", parseInt("42px"));
console.log("parseFloat:", parseFloat("42.56px"));
console.log("toFixed(2):", (12.3456).toFixed(2));
console.log("toPrecision(4):", (12.3456).toPrecision(4));
console.log("isNaN:", isNaN("abc"));
console.log("isFinite:", isFinite(100));

/* ========================================
   🧵 STRING FUNCTIONS + CONVERTERS
======================================== */
console.log("\n=== STRING FUNCTIONS ===");

let str = "  Hello JavaScript!  ";
console.log("Trim:", str.trim());
console.log("Upper:", str.toUpperCase());
console.log("Lower:", str.toLowerCase());
console.log("Includes:", str.includes("Java"));
console.log("StartsWith:", str.startsWith("  He"));
console.log("EndsWith:", str.endsWith("!  "));
console.log("Split:", str.trim().split(" "));
console.log("Replace:", str.replace("JavaScript", "JS"));
console.log("String() from number:", String(123));

/* ========================================
   📋 ARRAY FUNCTIONS
======================================== */
console.log("\n=== ARRAY FUNCTIONS ===");

let arr = [1, 2, 3, 4, 5];
console.log("Push:", arr.push(6), arr);
console.log("Pop:", arr.pop(), arr);
console.log("Shift:", arr.shift(), arr);
console.log("Unshift:", arr.unshift(0), arr);
console.log("Map:", arr.map(x => x * 2));
console.log("Filter:", arr.filter(x => x > 2));
console.log("Reduce:", arr.reduce((a, b) => a + b, 0));
console.log("Array.isArray:", Array.isArray(arr));
console.log("Array.from string:", Array.from("Hello"));

/* ========================================
   📦 OBJECT FUNCTIONS
======================================== */
console.log("\n=== OBJECT FUNCTIONS ===");

let obj = { name: "Ankit", age: 25 };
console.log("Keys:", Object.keys(obj));
console.log("Values:", Object.values(obj));
console.log("Entries:", Object.entries(obj));
console.log("FromEntries:", Object.fromEntries([["a", 1], ["b", 2]]));
console.log("Assign:", Object.assign({}, obj, { city: "Delhi" }));

/* ========================================
   🧮 MATH FUNCTIONS
======================================== */
console.log("\n=== MATH FUNCTIONS ===");

console.log("PI:", Math.PI);
console.log("Random:", Math.random());
console.log("Floor:", Math.floor(4.9));
console.log("Ceil:", Math.ceil(4.1));
console.log("Round:", Math.round(4.5));
console.log("Abs:", Math.abs(-7));
console.log("Pow:", Math.pow(2, 3));
console.log("Sqrt:", Math.sqrt(16));
console.log("Max:", Math.max(5, 9, 1));
console.log("Min:", Math.min(5, 9, 1));

/* ========================================
   🔄 JSON FUNCTIONS
======================================== */
console.log("\n=== JSON FUNCTIONS ===");

let jsonObj = { name: "Ankit", skill: "JS" };
let jsonStr = JSON.stringify(jsonObj);
console.log("Stringify:", jsonStr);
console.log("Parse:", JSON.parse(jsonStr));

/* ========================================
   🔍 TYPE CHECKING
======================================== */
console.log("\n=== TYPE CHECKING ===");

console.log("typeof:", typeof 123);
console.log("instanceof Array:", arr instanceof Array);

/* ========================================
   🌐 URL & ENCODING
======================================== */
console.log("\n=== URL & ENCODING ===");

let url = "https://example.com?name=Ankit Kumar";
let encoded = encodeURIComponent(url);
console.log("Encoded:", encoded);
console.log("Decoded:", decodeURIComponent(encoded));

/* ========================================
   📢 CONSOLE FUNCTIONS
======================================== */
console.log("\n=== CONSOLE FUNCTIONS ===");

console.error("Error message");
console.warn("Warning message");
console.table([{ name: "Ankit" }, { name: "Rohit" }]);

/* ========================================
   ⏱ TIMING FUNCTIONS
======================================== */
console.log("\n=== TIMING FUNCTIONS ===");

setTimeout(() => console.log("After 1 sec"), 1000);

let count = 0;
let timer = setInterval(() => {
    count++;
    console.log("Interval count:", count);
    if (count === 3) clearInterval(timer);
}, 500);

/* ========================================
   🖥 WINDOW OBJECT METHODS (Browser only)
======================================== */
if (typeof window !== "undefined") {
    console.log("\n=== WINDOW FUNCTIONS ===");
    console.log("Inner Width:", window.innerWidth);
    console.log("Inner Height:", window.innerHeight);
    console.log("Location HREF:", window.location.href);
    // window.alert("Hello from JS!");
    // window.confirm("Are you sure?");
    // window.prompt("Enter your name:");
}

/* ========================================
   📜 DOCUMENT BASICS (Browser only)
======================================== */
if (typeof document !== "undefined") {
    console.log("\n=== DOCUMENT FUNCTIONS ===");
    console.log("Title:", document.title);
    console.log("Body Children Count:", document.body.children.length);
}
