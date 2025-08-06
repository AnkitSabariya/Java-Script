# 🚀 JavaScript Built-in Functions & Methods: The Hinglish Handbook

---

## 📚 Table of Contents


- [🚀 JavaScript Built-in Functions \& Methods: The Hinglish Handbook](#-javascript-built-in-functions--methods-the-hinglish-handbook)
  - [📚 Table of Contents](#-table-of-contents)
  - [🌍 Global Functions](#-global-functions)
  - [🔢 Number Methods](#-number-methods)
  - [🔤 String Methods](#-string-methods)
  - [📦 Array Methods](#-array-methods)
  - [📅 Date Methods](#-date-methods)
  - [🧮 Math Methods](#-math-methods)
  - [📜 JSON Methods](#-json-methods)
  - [💻 Console Methods](#-console-methods)
  - [🧾 Object Methods](#-object-methods)
  - [🗂 Map / Set](#-map--set)
  - [⏳ Promise Methods](#-promise-methods)
  - [🔑 Symbol \& Iterators](#-symbol--iterators)
  - [🕵️ Proxy \& Reflect](#️-proxy--reflect)
  - [🌐 Web APIs](#-web-apis)
  - [🛡 Error Handling \& Exceptions](#-error-handling--exceptions)
  - [⏳ Timers \& Scheduling](#-timers--scheduling)
  - [🌏 Intl API (Internationalization)](#-intl-api-internationalization)
  - [⚡ Performance API](#-performance-api)
  - [📋 Clipboard API](#-clipboard-api)
  - [📂 File Handling APIs](#-file-handling-apis)
  - [🎨 Canvas API Basics](#-canvas-api-basics)
  - [📌 Cheat Sheet (Quick Reference)](#-cheat-sheet-quick-reference)
  - [🚀 Future Enhancements (Aage Kya Aayega?)](#-future-enhancements-aage-kya-aayega)
  - [📄 License (Anumati)](#-license-anumati)

---

## 🌍 Global Functions

Yeh woh functions hain jo JavaScript runtime mein globally available hote hain aur aap unhe direct use kar sakte hain.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 🧩 **eval()** | String ko JS code ki tarah execute karta hai *(security reasons se kam use karein)* | `eval("2+3"); // 5` |
| 🔍 **isFinite()** | Check karta hai ki value ek finite number hai ya nahi | `isFinite(10); // true` |
| 🚫 **isNaN()** | Check karta hai ki value `NaN` (Not-a-Number) hai ya nahi | `isNaN("abc"); // true` |
| 🔢 **parseFloat()** | String ko floating-point number mein convert karta hai | `parseFloat("3.14"); // 3.14` |
| 🔢 **parseInt()** | String ko integer mein convert karta hai | `parseInt("42px"); // 42` |
| 🔓 **decodeURI()** | Encoded URI (Uniform Resource Identifier) ko decode karta hai | `decodeURI("https://site.com/page%20one");` |
| 🔓 **decodeURIComponent()** | Encoded URI component ko decode karta hai | `decodeURIComponent("page%20one");` |
| 🔒 **encodeURI()** | URI ko encode karta hai | `encodeURI("https://site.com/page one");` |
| 🔒 **encodeURIComponent()** | URI component ko encode karta hai | `encodeURIComponent("page one");` |

**💡 Yaad Rakhein:** `parseInt()` aur `parseFloat()` strings ko numbers mein badalte hain, jo user input handle karne ke liye bahut useful hain.

[⬆️ Back to Top](#-table-of-contents)

---

## 🔢 Number Methods

Numbers ke saath precise operations perform karne ke liye useful methods.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 🔢 **Number()** | Kisi bhi value ko number type mein convert karta hai | `Number("5"); // 5` |
| 📏 **toFixed()** | Number ko fixed decimal places tak format karta hai, string return karta hai | `(3.1415).toFixed(2); // "3.14"` |
| 🔬 **toExponential()** | Number ko exponential notation mein convert karta hai | `(1234).toExponential(); // "1.234e+3"` |
| 🎯 **toPrecision()** | Number ko specific precision (total digits) tak format karta hai | `(3.1415).toPrecision(3); // "3.14"` |
| 🚫 **isNaN()** | Check karta hai ki value `NaN` hai ya nahi (more robust than global `isNaN`) | `Number.isNaN(NaN); // true` |
| 🔢 **isInteger()** | Check karta hai ki value ek integer hai ya nahi | `Number.isInteger(4); // true` |

**💡 Yaad Rakhein:** `toFixed()` financial calculations ya display ke liye best hai, kyunki yeh string return karta hai.

[⬆️ Back to Top](#-table-of-contents)

---

## 🔤 String Methods

Strings ko manipulate, search, aur transform karne ke liye common methods.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 🔠 **charAt()** | Specific index par maujood character return karta hai | `"ankit".charAt(0); // "a"` |
| 🔢 **charCodeAt()** | Character ka Unicode value (UTF-16 code unit) return karta hai | `"A".charCodeAt(0); // 65` |
| ➕ **concat()** | Do ya do se zyada strings ko join karta hai | `"Hello".concat(" World"); // "Hello World"` |
| 🔍 **includes()** | Check karta hai ki substring string mein exist karta hai ya nahi | `"Hello".includes("ell"); // true` |
| 📍 **indexOf()** | Substring ke first occurrence ka index return karta hai | `"Hello".indexOf("l"); // 2` |
| 📍 **lastIndexOf()** | Substring ke last occurrence ka index return karta hai | `"Hello".lastIndexOf("l"); // 3` |
| 📝 **replace()** | String ke ek part ko doosre se replace karta hai | `"Hello".replace("H", "Y"); // "Yello"` |
| ✂️ **slice()** | String ka ek portion extract karta hai | `"JavaScript".slice(0,4); // "Java"` |
| 🔪 **split()** | String ko ek delimiter ke basis par array mein todta hai | `"a,b,c".split(","); // ["a","b","c"]` |
| 📏 **substring()** | Index range ke beech ka part return karta hai | `"Hello".substring(1,4); // "ell"` |
| 🔡 **toLowerCase()** | String ko lowercase mein convert karta hai | `"ANKIT".toLowerCase(); // "ankit"` |
| 🔠 **toUpperCase()** | String ko uppercase mein convert karta hai | `"ankit".toUpperCase(); // "ANKIT"` |
| ✂️ **trim()** | String ke start aur end se extra whitespace remove karta hai | `"  hi  ".trim(); // "hi"` |

**💡 Yaad Rakhein:** `split()` aur `join()` bahut powerful hain strings aur arrays ke beech data transform karne ke liye.

[⬆️ Back to Top](#-table-of-contents)

---

## 📦 Array Methods

Arrays ke saath data management aur transformation ke liye powerful methods.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| ➕ **push()** | Array ke end mein ek ya zyada elements add karta hai | `[1,2].push(3); // [1,2,3]` |
| ➖ **pop()** | Array ka last element remove karta hai aur use return karta hai | `[1,2,3].pop(); // [1,2]` |
| 🛫 **shift()** | Array ka first element remove karta hai aur use return karta hai | `[1,2,3].shift(); // [2,3]` |
| 🛬 **unshift()** | Array ke start mein ek ya zyada elements add karta hai | `[1,2].unshift(0); // [0,1,2]` |
| ✂️ **splice()** | Array mein elements add/remove/replace karta hai | `[1,2,3].splice(1,1); // [1,3]` |
| ✂️ **slice()** | Array ka ek shallow copy extract karta hai | `[1,2,3].slice(0,2); // [1,2]` |
| 🔗 **concat()** | Do ya do se zyada arrays ko merge karta hai | `[1,2].concat([3,4]); // [1,2,3,4]` |
| 🔤 **join()** | Array ke elements ko ek string mein join karta hai | `[1,2].join("-"); // "1-2"` |
| 📍 **indexOf()** | Element ke first occurrence ka index find karta hai | `[1,2,3].indexOf(2); // 1` |
| 🔍 **includes()** | Check karta hai ki element array mein exist karta hai ya nahi | `[1,2,3].includes(2); // true` |
| 🔄 **map()** | Har element par function apply karke ek naya array banata hai | `[1,2,3].map(x=>x*2); // [2,4,6]` |
| 🎯 **filter()** | Condition match karne wale elements ka naya array deta hai | `[1,2,3].filter(x=>x>1); // [2,3]` |
| 🧮 **reduce()** | Array elements ko single value mein reduce karta hai | `[1,2,3].reduce((a,b)=>a+b,0); // 6` |
| 🔁 **forEach()** | Har element par ek function execute karta hai | `[1,2].forEach(x=>console.log(x));` |
| 🔍 **find()** | Condition match karne wala first element return karta hai | `[1,2,3].find(x=>x>1); // 2` |
| 🗂 **sort()** | Array ko in-place sort karta hai | `[3,1,2].sort(); // [1,2,3]` |
| 🔃 **reverse()** | Array elements ka order reverse karta hai | `[1,2,3].reverse(); // [3,2,1]` |

**💡 Yaad Rakhein:** `map()`, `filter()`, aur `reduce()` functional programming ke pillars hain aur data transformation ke liye bahut use hote hain.

[⬆️ Back to Top](#-table-of-contents)

---

## 📅 Date Methods

Dates aur times ke saath kaam karne aur unhe format karne ke liye methods.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 📅 **new Date()** | Current date aur time ka naya Date object banata hai | `new Date();` |
| 📆 **getDate()** | Month ka day (1-31) return karta hai | `new Date().getDate();` |
| 📆 **getDay()** | Week ka day (0-6, Sunday is 0) return karta hai | `new Date().getDay();` |
| 📆 **getFullYear()** | Four-digit year return karta hai | `new Date().getFullYear();` |
| ⏰ **getHours()** | Hours (0-23) return karta hai | `new Date().getHours();` |
| ⏱ **getMinutes()** | Minutes (0-59) return karta hai | `new Date().getMinutes();` |
| ⏱ **getSeconds()** | Seconds (0-59) return karta hai | `new Date().getSeconds();` |
| 📅 **getMonth()** | Month (0-11, January is 0) return karta hai | `new Date().getMonth();` |
| ⏳ **getTime()** | Milliseconds since January 1, 1970, UTC return karta hai | `new Date().getTime();` |
| 📅 **toDateString()** | Date ka readable string representation deta hai | `new Date().toDateString();` |

**💡 Yaad Rakhein:** `getTime()` timestamps ke liye useful hai, khaas kar jab aap dates ko compare ya calculate kar rahe hon.

[⬆️ Back to Top](#-table-of-contents)

---

## 🧮 Math Methods

Mathematical operations perform karne ke liye static methods.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| ➕ **Math.abs()** | Number ka absolute (non-negative) value deta hai | `Math.abs(-5); // 5` |
| ⬆️ **Math.ceil()** | Number ko nearest greater integer tak round up karta hai | `Math.ceil(4.1); // 5` |
| ⬇️ **Math.floor()** | Number ko nearest smaller integer tak round down karta hai | `Math.floor(4.9); // 4` |
| 🔄 **Math.round()** | Number ko nearest integer tak round karta hai | `Math.round(4.5); // 5` |
| 🏆 **Math.max()** | Arguments mein se largest value return karta hai | `Math.max(1,2,3); // 3` |
| 🥈 **Math.min()** | Arguments mein se smallest value return karta hai | `Math.min(1,2,3); // 1` |
| ⚡ **Math.pow()** | Base ki power exponent calculate karta hai | `Math.pow(2,3); // 8` |
| √ **Math.sqrt()** | Number ka square root deta hai | `Math.sqrt(16); // 4` |
| 🎲 **Math.random()** | 0 (inclusive) aur 1 (exclusive) ke beech ek random floating-point number deta hai | `Math.random();` |
| ✂️ **Math.trunc()** | Number ke decimal part ko remove karke integer deta hai | `Math.trunc(4.9); // 4` |

**💡 Yaad Rakhein:** `Math.random()` games, OTP generation, ya unique IDs banane ke liye bahut use hota hai.

[⬆️ Back to Top](#-table-of-contents)

---

## 📜 JSON Methods

JSON (JavaScript Object Notation) data ko parse aur stringify karne ke liye methods.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 📄 **JSON.stringify()** | JavaScript object/value ko JSON string mein convert karta hai | `JSON.stringify({a:1}); // '{"a":1}'` |
| 📄 **JSON.parse()** | JSON string ko JavaScript object mein convert karta hai | `JSON.parse('{"a":1}'); // {a:1}` |

**💡 Yaad Rakhein:** `JSON.stringify()` aur `JSON.parse()` APIs ke saath data send/receive karne aur `localStorage` mein objects store karne ke liye essential hain.

[⬆️ Back to Top](#-table-of-contents)

---

## 💻 Console Methods

Debugging aur logging ke liye browser console mein available methods.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 💬 **console.log()** | Normal log message print karta hai | `console.log("Hello");` |
| ❌ **console.error()** | Error message print karta hai | `console.error("Error!");` |
| ⚠️ **console.warn()** | Warning message print karta hai | `console.warn("Warning!");` |
| 📊 **console.table()** | Data (array of objects) ko table format mein print karta hai | `console.table([{a:1,b:2}]);` |
| ⏱ **console.time()** | Ek timer start karta hai | `console.time("t");` |
| ⏱ **console.timeEnd()** | Timer stop karta hai aur elapsed time print karta hai | `console.timeEnd("t");` |

**💡 Yaad Rakhein:** `console.table()` objects ke arrays ko visualize karne ke liye bahut useful hai, debugging mein time bachata hai.

[⬆️ Back to Top](#-table-of-contents)

---

## 🧾 Object Methods

Objects ke saath interact, manipulate, aur unki properties ko manage karne ke liye methods.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 📋 **Object.keys()** | Object ki enumerable property names ka array deta hai | `Object.keys({a:1,b:2}); // ["a","b"]` |
| 📋 **Object.values()** | Object ki enumerable property values ka array deta hai | `Object.values({a:1,b:2}); // [1,2]` |
| 📋 **Object.entries()** | Object ki enumerable `[key, value]` pairs ka array deta hai | `Object.entries({a:1}); // [["a",1]]` |
| 📝 **Object.assign()** | Source objects se properties ko target object mein copy karta hai | `Object.assign({a:1},{b:2}); // {a:1,b:2}` |
| 🔒 **Object.freeze()** | Object ko immutable banata hai (properties add/remove/modify nahi ho sakte) | `Object.freeze({a:1});` |
| 🔓 **Object.seal()** | Object ko seal karta hai (new props add/remove nahi hote, par existing modify ho sakte) | `Object.seal({a:1});` |
| 🔍 **hasOwnProperty()** | Check karta hai ki specified property object ka direct property hai ya nahi | `{a:1}.hasOwnProperty("a"); // true` |

**💡 Yaad Rakhein:** `Object.keys()`, `Object.values()`, aur `Object.entries()` objects ko iterate karne aur unke data ko access karne ke liye fundamental hain.

[⬆️ Back to Top](#-table-of-contents)

---

## 🗂 Map / Set

Unique data structures `Map` (key-value pairs) aur `Set` (unique values) ke methods.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 🗺 **new Map()** | Key-value pairs store karne ke liye naya Map object banata hai | `let m=new Map(); m.set("a",1);` |
| 🗺 **set()** | Map mein ek key-value pair add ya update karta hai | `m.set("b",2);` |
| 🔍 **get()** | Specified key ka value return karta hai | `m.get("a"); // 1` |
| 🔍 **has()** | Check karta hai ki specified key Map mein exist karta hai ya nahi | `m.has("a"); // true` |
| ❌ **delete()** | Specified key aur uske associated value ko Map se remove karta hai | `m.delete("a");` |
| 🗑 **clear()** | Map se sabhi entries remove karta hai | `m.clear();` |
| 📦 **new Set()** | Unique values ka collection store karne ke liye naya Set object banata hai | `let s=new Set([1,2,2]); // {1,2}` |
| ➕ **add()** | Set mein ek naya value add karta hai | `s.add(3);` |
| ❌ **delete()** | Set se specified value remove karta hai | `s.delete(1);` |
| 🔍 **has()** | Check karta hai ki specified value Set mein exist karta hai ya nahi | `s.has(2); // true` |

**💡 Yaad Rakhein:** `Set` duplicate values ko automatically remove kar deta hai, jo unique items ki list maintain karne ke liye perfect hai.

[⬆️ Back to Top](#-table-of-contents)

---

## ⏳ Promise Methods

Asynchronous operations ko handle aur manage karne ke liye Promise methods.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| ⏳ **Promise.all()** | Sab promises resolve hone ka wait karta hai aur results ka array return karta hai | `Promise.all([p1,p2]);` |
| ⚡ **Promise.race()** | Sabse pehle resolve ya reject hone wale promise ka result/error return karta hai | `Promise.race([p1,p2]);` |
| 📋 **Promise.allSettled()** | Sab promises ka status (fulfilled/rejected) aur value/reason return karta hai | `Promise.allSettled([p1,p2]);` |
| ✅ **Promise.any()** | Pehla fulfill hone wala promise return karta hai, ya sab reject hone par AggregateError | `Promise.any([p1,p2]);` |

**💡 Yaad Rakhein:** `Promise.all()` multiple independent API calls ko parallel mein run karne ke liye best hai.

[⬆️ Back to Top](#-table-of-contents)

---

## 🔑 Symbol & Iterators

Unique identifiers aur iterable objects banane ke liye concepts.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 🔑 **Symbol()** | Ek unique aur non-string property key banata hai | `let id=Symbol("id");` |
| 🔄 **Symbol.iterator** | Object ko iterable banane ke liye default iterator method define karta hai | `[1,2][Symbol.iterator]();` |
| 🔄 **Symbol.asyncIterator** | Object ko async iterable banane ke liye default async iterator method define karta hai | `obj[Symbol.asyncIterator]();` |

**💡 Yaad Rakhein:** `Symbol` hidden object properties banane ke liye useful hain jo accidental overwriting se bachate hain.

[⬆️ Back to Top](#-table-of-contents)

---

## 🕵️ Proxy & Reflect

Advanced object manipulation aur meta-programming ke liye powerful features.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 🕵️ **new Proxy()** | Ek object ke operations (e.g., property lookup, assignment) ko intercept karta hai | `new Proxy(obj,handler);` |
| 🔍 **get** | Property read operation ko intercept karta hai (Proxy handler method) | |
| 📝 **set** | Property write operation ko intercept karta hai (Proxy handler method) | |
| 🔄 **Reflect.get()** | Object ki property read karta hai (Reflect API) | `Reflect.get(obj,"a");` |
| 🔄 **Reflect.set()** | Object ki property set karta hai (Reflect API) | `Reflect.set(obj,"a",10);` |

**💡 Yaad Rakhein:** `Proxy` objects validation, logging, ya data binding jaise advanced patterns ke liye use hote hain.

[⬆️ Back to Top](#-table-of-contents)

---

## 🌐 Web APIs

Browser environment mein available APIs jo DOM manipulation, storage, aur network requests ke liye use hote hain.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 📌 **document.querySelector()** | CSS selector ke basis par first matching element return karta hai | `document.querySelector("#id");` |
| 📌 **document.querySelectorAll()** | CSS selector ke basis par sabhi matching elements ka NodeList return karta hai | `document.querySelectorAll(".class");` |
| 🏷 **getElementById()** | ID attribute ke basis par element select karta hai | `document.getElementById("id");` |
| 🏷 **getElementsByClassName()** | Class name ke basis par elements ka HTMLCollection return karta hai | `document.getElementsByClassName("cls");` |
| 🏷 **getElementsByTagName()** | Tag name ke basis par elements ka HTMLCollection return karta hai | `document.getElementsByTagName("div");` |
| 🖱 **addEventListener()** | Element par ek event listener attach karta hai | `el.addEventListener("click",fn);` |
| 💾 **localStorage.setItem()** | Key-value pair ko web browser ke local storage mein store karta hai | `localStorage.setItem("key","val");` |
| 💾 **localStorage.getItem()** | Local storage se specified key ka value read karta hai | `localStorage.getItem("key");` |
| 🗑 **localStorage.removeItem()** | Local storage se specified key ko delete karta hai | `localStorage.removeItem("key");` |
| 🌍 **fetch()** | Network request (e.g., API calls) karne ke liye Promise-based interface | `fetch(url).then(r=>r.json());` |

**💡 Yaad Rakhein:** `fetch()` modern web development mein data retrieve karne ka standard tareeka hai.

[⬆️ Back to Top](#-table-of-contents)

---

## 🛡 Error Handling & Exceptions

Errors ko gracefully manage aur handle karne ke liye constructs.

| Function / Keyword | Kaam | Example |
| :----------------- | :--- | :------ |
| 🚫 **try...catch** | Code block ko execute karta hai aur errors ko catch karta hai | `try { throw "Error!"; } catch(e) { console.log(e); }` |
| 🔄 **finally** | `try...catch` block ke baad hamesha execute hone wala code block | `try {} catch(e) {} finally { console.log("done"); }` |
| ⚠️ **throw** | Custom error ya exception throw karta hai | `throw new Error("Something went wrong");` |
| 📝 **Error** | Ek generic error object banata hai | `new Error("msg");` |
| 📂 **TypeError, ReferenceError** | Specific error types (e.g., wrong type, undefined variable) | `throw new TypeError("Wrong type");` |

**💡 Yaad Rakhein:** `try...catch` aapke application ko unexpected errors se crash hone se bachata hai.

[⬆️ Back to Top](#-table-of-contents)

---

## ⏳ Timers & Scheduling

Code execution ko future mein schedule karne ya repeatedly run karne ke liye.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| ⏲ **setTimeout()** | Specified delay ke baad ek function ko ek baar execute karta hai | `setTimeout(()=>console.log("Hi"),1000);` |
| 🔁 **setInterval()** | Specified interval par repeatedly ek function ko execute karta hai | `setInterval(()=>console.log("Tick"),1000);` |
| ⏹ **clearTimeout()** | `setTimeout` dwara set kiye gaye timer ko cancel karta hai | `let id=setTimeout(...); clearTimeout(id);` |
| ⏹ **clearInterval()** | `setInterval` dwara set kiye gaye timer ko cancel karta hai | `let id=setInterval(...); clearInterval(id);` |

**💡 Yaad Rakhein:** `setTimeout` aur `setInterval` animations, notifications, ya data polling jaise tasks ke liye use hote hain.

[⬆️ Back to Top](#-table-of-contents)

---

## 🌏 Intl API (Internationalization)

Internationalization (i18n) ke liye methods, jaise date, number, aur string comparison ko locale-specific banana.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 📅 **Intl.DateTimeFormat()** | Date ko locale-specific format mein dikhata hai | `new Intl.DateTimeFormat("hi-IN").format(new Date());` |
| 💰 **Intl.NumberFormat()** | Number ko currency ya locale-specific format mein dikhata hai | `new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(2500);` |
| 🔡 **Intl.Collator()** | String comparison ko locale-specific rules ke according karta hai | `new Intl.Collator("de").compare("ä","z");` |

**💡 Yaad Rakhein:** `Intl` API global applications banane ke liye bahut important hai.

[⬆️ Back to Top](#-table-of-contents)

---

## ⚡ Performance API

Web application ki performance ko measure aur analyze karne ke liye.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| ⏱ **performance.now()** | High-resolution timestamp deta hai (milliseconds mein) | `let t=performance.now();` |
| ⏱ **performance.mark()** | Performance timeline par ek named timestamp mark create karta hai | `performance.mark("start");` |
| ⏱ **performance.measure()** | Do marks ke beech ka time duration measure karta hai | `performance.measure("duration","start","end");` |

**💡 Yaad Rakhein:** `performance.now()` code execution time ko precisely measure karne ke liye useful hai.

[⬆️ Back to Top](#-table-of-contents)

---

## 📋 Clipboard API

User ke system clipboard se text read aur write karne ke liye.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 📥 **navigator.clipboard.readText()** | Clipboard se text read karta hai (Promise return karta hai) | `navigator.clipboard.readText().then(console.log);` |
| 📤 **navigator.clipboard.writeText()** | Text ko clipboard mein copy karta hai (Promise return karta hai) | `navigator.clipboard.writeText("Hello");` |

**💡 Yaad Rakhein:** `navigator.clipboard` user experience ko enhance karta hai, jaise "Copy to Clipboard" buttons.

[⬆️ Back to Top](#-table-of-contents)

---

## 📂 File Handling APIs

Web applications mein files ko read aur manipulate karne ke liye.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 📄 **FileReader()** | User ke local system se files read karne ke liye object | `let r=new FileReader(); r.readAsText(file);` |
| 📦 **Blob()** | Immutable raw data (binary large object) represent karta hai | `new Blob(["Hello"],{type:"text/plain"});` |
| 🔗 **URL.createObjectURL()** | Blob ya File object ka temporary URL banata hai | `URL.createObjectURL(blob);` |
| ❌ **URL.revokeObjectURL()** | `createObjectURL` dwara banaye gaye temporary URL ko free karta hai | `URL.revokeObjectURL(url);` |

**💡 Yaad Rakhein:** `FileReader` user uploaded files ko process karne ke liye use hota hai.

[⬆️ Back to Top](#-table-of-contents)

---

## 🎨 Canvas API Basics

HTML `<canvas>` element par graphics aur animations draw karne ke liye.

| Function | Kaam | Example |
| :------- | :--- | :------ |
| 🖌 **getContext("2d")** | Canvas par 2D drawing context leta hai | `canvas.getContext("2d");` |
| 📏 **fillRect()** | Filled rectangle draw karta hai | `ctx.fillRect(10,10,50,50);` |
| 🖊 **strokeRect()** | Rectangle ki outline draw karta hai | `ctx.strokeRect(10,10,50,50);` |
| ✏️ **beginPath() / moveTo() / lineTo() / stroke()** | Custom shapes draw karne ke liye path define karta hai | `ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(50,50); ctx.stroke();` |
| 🎨 **fillText()** | Canvas par text draw karta hai | `ctx.fillText("Hello",10,50);` |

**💡 Yaad Rakhein:** Canvas API dynamic graphics, charts, aur games banane ke liye powerful hai.

[⬆️ Back to Top](#-table-of-contents)

---

## 📌 Cheat Sheet (Quick Reference)

**Most Frequently Used Methods ka Ek Nazar Mein Quick Reference**

*   **String** → `includes`, `slice`, `replace`, `split`, `toLowerCase`, `toUpperCase`
*   **Array** → `push`, `pop`, `map`, `filter`, `reduce`, `find`, `sort`
*   **Object** → `keys`, `values`, `entries`, `assign`
*   **Date** → `getDate`, `getMonth`, `getFullYear`, `getTime`
*   **Math** → `abs`, `round`, `max`, `min`, `random`
*   **JSON** → `stringify`, `parse`
*   **Web APIs** → `querySelector`, `addEventListener`, `localStorage`, `fetch`

[⬆️ Back to Top](#-table-of-contents)

---

## 🚀 Future Enhancements (Aage Kya Aayega?)

Hum is guide ko lagatar behtar banane ke liye committed hain! Future mein aap expect kar sakte hain:

*   **More Detailed Examples:** Kuch complex methods ke liye multi-line code snippets.
*   **Interactive Demos:** CodePen ya similar platforms par live examples.
*   **Common Pitfalls:** Har section mein aane wali common galtiyan aur unse bachne ke tips.
*   **Advanced Concepts:** Higher-order functions, closures, `this` keyword, etc. par sections.

---

## 📄 License (Anumati)

This project is licensed under the MIT License.

---
