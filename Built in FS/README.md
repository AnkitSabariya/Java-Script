# 📘 JavaScript Built-in Functions & Methods (Hinglish Guide)

> 🚀 **JavaScript 0 → Advanced** built-in methods & functions ka ek hi jagah par summary.  
> 📱 Mobile-friendly tables • 🎨 Icons • 💡 Hinglish explanations • 💻 One-line examples with output.  
> Perfect for **daily reference** & **fast lookup**.

---

## 📑 Table of Contents
- [📘 JavaScript Built-in Functions \& Methods (Hinglish Guide)](#-javascript-built-in-functions--methods-hinglish-guide)
  - [📑 Table of Contents](#-table-of-contents)
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
  - [📌 Cheat Sheet](#-cheat-sheet)

---

## 🌍 Global Functions
| Function | Kaam | Example |
|----------|------|---------|
| 🧩 **eval()** | String ko JS code ki tarah execute karta hai *(use kam karo)* | `eval("2+3"); // 5` |
| 🔍 **isFinite()** | Value finite number hai ya nahi check karta hai | `isFinite(10); // true` |
| 🚫 **isNaN()** | Value NaN hai ya nahi check karta hai | `isNaN("abc"); // true` |
| 🔢 **parseFloat()** | String ko floating number me convert karta hai | `parseFloat("3.14"); // 3.14` |
| 🔢 **parseInt()** | String ko integer me convert karta hai | `parseInt("42px"); // 42` |
| 🔓 **decodeURI()** | Encoded URI ko decode karta hai | `decodeURI("https://site.com/page%20one");` |
| 🔓 **decodeURIComponent()** | Encoded URI part ko decode karta hai | `decodeURIComponent("page%20one");` |
| 🔒 **encodeURI()** | URI ko encode karta hai | `encodeURI("https://site.com/page one");` |
| 🔒 **encodeURIComponent()** | URI component ko encode karta hai | `encodeURIComponent("page one");` |

---

## 🔢 Number Methods
| Function | Kaam | Example |
|----------|------|---------|
| 🔢 **Number()** | Value ko number me convert karta hai | `Number("5"); // 5` |
| 📏 **toFixed()** | Fixed decimal places me format karta hai | `(3.1415).toFixed(2); // "3.14"` |
| 🔬 **toExponential()** | Exponential notation me convert karta hai | `(1234).toExponential(); // "1.234e+3"` |
| 🎯 **toPrecision()** | Specific precision me format karta hai | `(3.1415).toPrecision(3); // "3.14"` |
| 🚫 **isNaN()** | NaN check karta hai | `Number.isNaN(NaN); // true` |
| 🔢 **isInteger()** | Integer check karta hai | `Number.isInteger(4); // true` |

---

## 🔤 String Methods
| Function | Kaam | Example |
|----------|------|---------|
| 🔠 **charAt()** | Specific index ka character deta hai | `"ankit".charAt(0); // "a"` |
| 🔢 **charCodeAt()** | Character ka Unicode value deta hai | `"A".charCodeAt(0); // 65` |
| ➕ **concat()** | Strings ko join karta hai | `"Hello".concat(" World"); // "Hello World"` |
| 🔍 **includes()** | Substring exist karta hai ya nahi | `"Hello".includes("ell"); // true` |
| 📍 **indexOf()** | First match ka index deta hai | `"Hello".indexOf("l"); // 2` |
| 📍 **lastIndexOf()** | Last match ka index deta hai | `"Hello".lastIndexOf("l"); // 3` |
| 📝 **replace()** | Part ko replace karta hai | `"Hello".replace("H", "Y"); // "Yello"` |
| ✂️ **slice()** | Part extract karta hai | `"JavaScript".slice(0,4); // "Java"` |
| 🔪 **split()** | String ko array me todta hai | `"a,b,c".split(","); // ["a","b","c"]` |
| 📏 **substring()** | Index range ka part deta hai | `"Hello".substring(1,4); // "ell"` |
| 🔡 **toLowerCase()** | Lowercase me convert karta hai | `"ANKIT".toLowerCase(); // "ankit"` |
| 🔠 **toUpperCase()** | Uppercase me convert karta hai | `"ankit".toUpperCase(); // "ANKIT"` |
| ✂️ **trim()** | Extra spaces remove karta hai | `"  hi  ".trim(); // "hi"` |

---

## 📦 Array Methods
| Function | Kaam | Example |
|----------|------|---------|
| ➕ **push()** | End me element add karta hai | `[1,2].push(3); // [1,2,3]` |
| ➖ **pop()** | Last element remove karta hai | `[1,2,3].pop(); // [1,2]` |
| 🛫 **shift()** | First element remove karta hai | `[1,2,3].shift(); // [2,3]` |
| 🛬 **unshift()** | Start me element add karta hai | `[1,2].unshift(0); // [0,1,2]` |
| ✂️ **splice()** | Add/remove elements karta hai | `[1,2,3].splice(1,1); // [1,3]` |
| ✂️ **slice()** | Part extract karta hai | `[1,2,3].slice(0,2); // [1,2]` |
| 🔗 **concat()** | Arrays merge karta hai | `[1,2].concat([3,4]); // [1,2,3,4]` |
| 🔤 **join()** | Elements ko string me join karta hai | `[1,2].join("-"); // "1-2"` |
| 📍 **indexOf()** | Index find karta hai | `[1,2,3].indexOf(2); // 1` |
| 🔍 **includes()** | Element exist karta hai ya nahi | `[1,2,3].includes(2); // true` |
| 🔄 **map()** | New array banata hai function apply karke | `[1,2,3].map(x=>x*2); // [2,4,6]` |
| 🎯 **filter()** | Condition match wale elements deta hai | `[1,2,3].filter(x=>x>1); // [2,3]` |
| 🧮 **reduce()** | Single value banata hai | `[1,2,3].reduce((a,b)=>a+b,0); // 6` |
| 🔁 **forEach()** | Har element pe kaam karta hai | `[1,2].forEach(x=>console.log(x));` |
| 🔍 **find()** | First match element deta hai | `[1,2,3].find(x=>x>1); // 2` |
| 🗂 **sort()** | Array sort karta hai | `[3,1,2].sort(); // [1,2,3]` |
| 🔃 **reverse()** | Order reverse karta hai | `[1,2,3].reverse(); // [3,2,1]` |

---

## 📅 Date Methods
| Function | Kaam | Example |
|----------|------|---------|
| 📅 **new Date()** | New date object banata hai | `new Date();` |
| 📆 **getDate()** | Month ka day deta hai | `new Date().getDate();` |
| 📆 **getDay()** | Week ka day deta hai (0–6) | `new Date().getDay();` |
| 📆 **getFullYear()** | Year deta hai | `new Date().getFullYear();` |
| ⏰ **getHours()** | Hours deta hai | `new Date().getHours();` |
| ⏱ **getMinutes()** | Minutes deta hai | `new Date().getMinutes();` |
| ⏱ **getSeconds()** | Seconds deta hai | `new Date().getSeconds();` |
| 📅 **getMonth()** | Month deta hai (0–11) | `new Date().getMonth();` |
| ⏳ **getTime()** | Timestamp deta hai | `new Date().getTime();` |
| 📅 **toDateString()** | Readable date deta hai | `new Date().toDateString();` |

---
## 🧮 Math Methods
| Function | Kaam | Example |
|----------|------|---------|
| ➕ **Math.abs()** | Absolute value deta hai | `Math.abs(-5); // 5` |
| ⬆️ **Math.ceil()** | Round up karta hai | `Math.ceil(4.1); // 5` |
| ⬇️ **Math.floor()** | Round down karta hai | `Math.floor(4.9); // 4` |
| 🔄 **Math.round()** | Nearest integer me round karta hai | `Math.round(4.5); // 5` |
| 🏆 **Math.max()** | Max value deta hai | `Math.max(1,2,3); // 3` |
| 🥈 **Math.min()** | Min value deta hai | `Math.min(1,2,3); // 1` |
| ⚡ **Math.pow()** | Power calculate karta hai | `Math.pow(2,3); // 8` |
| √ **Math.sqrt()** | Square root deta hai | `Math.sqrt(16); // 4` |
| 🎲 **Math.random()** | Random 0-1 deta hai | `Math.random();` |
| ✂️ **Math.trunc()** | Decimal remove karke integer deta hai | `Math.trunc(4.9); // 4` |

---

## 📜 JSON Methods
| Function | Kaam | Example |
|----------|------|---------|
| 📄 **JSON.stringify()** | Object ko JSON string me convert karta hai | `JSON.stringify({a:1}); // '{"a":1}'` |
| 📄 **JSON.parse()** | JSON string ko JS object me convert karta hai | `JSON.parse('{"a":1}'); // {a:1}` |

---

## 💻 Console Methods
| Function | Kaam | Example |
|----------|------|---------|
| 💬 **console.log()** | Normal log print karta hai | `console.log("Hello");` |
| ❌ **console.error()** | Error print karta hai | `console.error("Error!");` |
| ⚠️ **console.warn()** | Warning print karta hai | `console.warn("Warning!");` |
| 📊 **console.table()** | Data ko table format me print karta hai | `console.table([{a:1,b:2}]);` |
| ⏱ **console.time()** | Timer start karta hai | `console.time("t");` |
| ⏱ **console.timeEnd()** | Timer stop karta hai | `console.timeEnd("t");` |

---

## 🧾 Object Methods
| Function | Kaam | Example |
|----------|------|---------|
| 📋 **Object.keys()** | Keys ka array deta hai | `Object.keys({a:1,b:2}); // ["a","b"]` |
| 📋 **Object.values()** | Values ka array deta hai | `Object.values({a:1,b:2}); // [1,2]` |
| 📋 **Object.entries()** | [key,value] pairs ka array deta hai | `Object.entries({a:1}); // [["a",1]]` |
| 📝 **Object.assign()** | Objects ko merge karta hai | `Object.assign({a:1},{b:2}); // {a:1,b:2}` |
| 🔒 **Object.freeze()** | Object ko immutable banata hai | `Object.freeze({a:1});` |
| 🔓 **Object.seal()** | New props add/remove nahi hote, par modify ho sakte | `Object.seal({a:1});` |
| 🔍 **hasOwnProperty()** | Check karta hai key object me hai ya nahi | `{a:1}.hasOwnProperty("a"); // true` |

---

## 🗂 Map / Set
| Function | Kaam | Example |
|----------|------|---------|
| 🗺 **new Map()** | Key-value pairs store karta hai | `let m=new Map(); m.set("a",1);` |
| 🗺 **set()** | Key-value add/update karta hai | `m.set("b",2);` |
| 🔍 **get()** | Key ka value deta hai | `m.get("a"); // 1` |
| 🔍 **has()** | Key exist karta hai ya nahi | `m.has("a"); // true` |
| ❌ **delete()** | Key remove karta hai | `m.delete("a");` |
| 🗑 **clear()** | Sab entries remove karta hai | `m.clear();` |
| 📦 **new Set()** | Unique values ka collection | `let s=new Set([1,2,2]); // {1,2}` |
| ➕ **add()** | Value add karta hai | `s.add(3);` |
| ❌ **delete()** | Value remove karta hai | `s.delete(1);` |
| 🔍 **has()** | Value exist karta hai ya nahi | `s.has(2); // true` |

---

## ⏳ Promise Methods
| Function | Kaam | Example |
|----------|------|---------|
| ⏳ **Promise.all()** | Sab promises resolve hone ka wait karta hai | `Promise.all([p1,p2]);` |
| ⚡ **Promise.race()** | Sabse pehle resolve/reject hone wala return karta hai | `Promise.race([p1,p2]);` |
| 📋 **Promise.allSettled()** | Sab promises ka status return karta hai | `Promise.allSettled([p1,p2]);` |
| ✅ **Promise.any()** | Pehla fulfill hone wala return karta hai | `Promise.any([p1,p2]);` |

---

## 🔑 Symbol & Iterators
| Function | Kaam | Example |
|----------|------|---------|
| 🔑 **Symbol()** | Unique value banata hai | `let id=Symbol("id");` |
| 🔄 **Symbol.iterator** | Iterable banata hai | `[1,2][Symbol.iterator]();` |
| 🔄 **Symbol.asyncIterator** | Async iterable banata hai | `obj[Symbol.asyncIterator]();` |

---

## 🕵️ Proxy & Reflect
| Function | Kaam | Example |
|----------|------|---------|
| 🕵️ **new Proxy()** | Object ke operations ko intercept karta hai | `new Proxy(obj,handler);` |
| 🔍 **get** | Property read intercept karta hai | 
| 📝 **set** | Property write intercept karta hai | 
| 🔄 **Reflect.get()** | Property read karta hai | `Reflect.get(obj,"a");` |
| 🔄 **Reflect.set()** | Property set karta hai | `Reflect.set(obj,"a",10);` |

---

## 🌐 Web APIs
| Function | Kaam | Example |
|----------|------|---------|
| 📌 **document.querySelector()** | First matching element select karta hai | `document.querySelector("#id");` |
| 📌 **document.querySelectorAll()** | Sab matching elements select karta hai | `document.querySelectorAll(".class");` |
| 🏷 **getElementById()** | ID se element select karta hai | `document.getElementById("id");` |
| 🏷 **getElementsByClassName()** | Class se elements select karta hai | `document.getElementsByClassName("cls");` |
| 🏷 **getElementsByTagName()** | Tag name se elements select karta hai | `document.getElementsByTagName("div");` |
| 🖱 **addEventListener()** | Event attach karta hai | `el.addEventListener("click",fn);` |
| 💾 **localStorage.setItem()** | Data store karta hai | `localStorage.setItem("key","val");` |
| 💾 **localStorage.getItem()** | Data read karta hai | `localStorage.getItem("key");` |
| 🗑 **localStorage.removeItem()** | Key delete karta hai | `localStorage.removeItem("key");` |
| 🌍 **fetch()** | HTTP request karta hai | `fetch(url).then(r=>r.json());` |

---
## 🛡 Error Handling & Exceptions
| Function / Keyword | Kaam | Example |
|--------------------|------|---------|
| 🚫 **try...catch** | Error handle karta hai bina code crash kiye | `try { throw "Error!"; } catch(e) { console.log(e); }` |
| 🔄 **finally** | Always run hota hai try/catch ke baad | `try {} catch(e) {} finally { console.log("done"); }` |
| ⚠️ **throw** | Custom error throw karta hai | `throw new Error("Something went wrong");` |
| 📝 **Error** | Error object banata hai | `new Error("msg");` |
| 📂 **TypeError, ReferenceError** | Specific error types | `throw new TypeError("Wrong type");` |

---

## ⏳ Timers & Scheduling
| Function | Kaam | Example |
|----------|------|---------|
| ⏲ **setTimeout()** | Delay ke baad function chalata hai | `setTimeout(()=>console.log("Hi"),1000);` |
| 🔁 **setInterval()** | Repeatedly function chalata hai given interval me | `setInterval(()=>console.log("Tick"),1000);` |
| ⏹ **clearTimeout()** | setTimeout cancel karta hai | `let id=setTimeout(...); clearTimeout(id);` |
| ⏹ **clearInterval()** | setInterval cancel karta hai | `let id=setInterval(...); clearInterval(id);` |

---

## 🌏 Intl API (Internationalization)
| Function | Kaam | Example |
|----------|------|---------|
| 📅 **Intl.DateTimeFormat()** | Date ko locale format me dikhata hai | `new Intl.DateTimeFormat("hi-IN").format(new Date());` |
| 💰 **Intl.NumberFormat()** | Number ko currency/locale format me dikhata hai | `new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(2500);` |
| 🔡 **Intl.Collator()** | String comparison locale-specific karta hai | `new Intl.Collator("de").compare("ä","z");` |

---

## ⚡ Performance API
| Function | Kaam | Example |
|----------|------|---------|
| ⏱ **performance.now()** | High-resolution timestamp deta hai | `let t=performance.now();` |
| ⏱ **performance.mark()** | Performance mark create karta hai | `performance.mark("start");` |
| ⏱ **performance.measure()** | Do marks ke beech ka time measure karta hai | `performance.measure("duration","start","end");` |

---

## 📋 Clipboard API
| Function | Kaam | Example |
|----------|------|---------|
| 📥 **navigator.clipboard.readText()** | Clipboard se text read karta hai | `navigator.clipboard.readText().then(console.log);` |
| 📤 **navigator.clipboard.writeText()** | Text ko clipboard me copy karta hai | `navigator.clipboard.writeText("Hello");` |

---

## 📂 File Handling APIs
| Function | Kaam | Example |
|----------|------|---------|
| 📄 **FileReader()** | Files read karta hai | `let r=new FileReader(); r.readAsText(file);` |
| 📦 **Blob()** | Raw data represent karta hai | `new Blob(["Hello"],{type:"text/plain"});` |
| 🔗 **URL.createObjectURL()** | Blob/File ka temporary URL banata hai | `URL.createObjectURL(blob);` |
| ❌ **URL.revokeObjectURL()** | Object URL free karta hai | `URL.revokeObjectURL(url);` |

---

## 🎨 Canvas API Basics
| Function | Kaam | Example |
|----------|------|---------|
| 🖌 **getContext("2d")** | 2D drawing context leta hai | `canvas.getContext("2d");` |
| 📏 **fillRect()** | Filled rectangle draw karta hai | `ctx.fillRect(10,10,50,50);` |
| 🖊 **strokeRect()** | Rectangle outline draw karta hai | `ctx.strokeRect(10,10,50,50);` |
| ✏️ **beginPath() / moveTo() / lineTo() / stroke()** | Custom shapes draw karta hai | `ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(50,50); ctx.stroke();` |
| 🎨 **fillText()** | Text draw karta hai | `ctx.fillText("Hello",10,50);` |

---



## 📌 Cheat Sheet
**Quick Reference for Most Used Methods**
- String → `includes`, `slice`, `replace`, `split`, `toLowerCase`, `toUpperCase`
- Array → `push`, `pop`, `map`, `filter`, `reduce`, `find`, `sort`
- Object → `keys`, `values`, `entries`, `assign`
- Date → `getDate`, `getMonth`, `getFullYear`, `getTime`
- Math → `abs`, `round`, `max`, `min`, `random`
- JSON → `stringify`, `parse`
- Web APIs → `querySelector`, `addEventListener`, `localStorage`, `fetch`
