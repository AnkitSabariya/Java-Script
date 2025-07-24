// ✅✅✅ ----------------------------
// Example 1️⃣ : Manual Promise + Async/Await
// ----------------------------

// ⚡ 1️⃣ Ye function manually ek Promise banata hai:
function wait2seconds() {
  console.log("⏳ Waiting 2 seconds...");

  // ⚡ 2️⃣ Return karo ek new Promise
  // Yahan hum setTimeout se simulate kar rahe hain ki 2 second baad kuch hoga
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Done! Thanks for waiting."); // 2 sec baad resolve()
    }, 2000);
  });
}

// ⚡ 3️⃣ Ye async function us wait2seconds() ko call karta hai
async function showWait() {
  console.log("🔵 Start");

  // ⚡ 4️⃣ await = Promise ke settle hone tak wait karo
  let result = await wait2seconds();

  // ⚡ 5️⃣ Jab resolve() hoga tab ye chalega:
  console.log(result);

  console.log("🟢 End");
}

// ⚡ 6️⃣ Function ko call karo
showWait();


// ✅✅✅ ----------------------------
// Example 2️⃣ : Fetch API with Async/Await
// ----------------------------

// ⚡ API call + JSON parse karna + error handle karna
async function getUsers() {
  try {
    console.log("🌐 Fetching users...");

    // ✅ fetch() returns a Promise — so await karo
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    // ✅ res.json() bhi Promise hai — so usko bhi await karo
    const data = await res.json();

    console.log("✅ Users:", data);

  } catch (err) {
    // ⚡ Agar koi network ya parsing error ho to catch mein aayega
    console.error("❌ Error:", err);
  }
}

getUsers();


// ✅✅✅ ----------------------------
// Example 3️⃣ : SAME Fetch using only Promises (.then())
// ----------------------------

function getUsersPromiseWay() {
  console.log("🌐 Fetching users (Promise way)...");

  // ⚡ Yahan async/await nahi, only .then() & .catch()
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()) // ✅ First then: parse JSON
    .then((data) => {
      console.log("✅ Users (Promise way):", data);
    })
    .catch((err) => {
      console.error("❌ Error (Promise way):", err);
    });
}

getUsersPromiseWay();


// ✅✅✅ ----------------------------
// Example 4️⃣ : `Promise.all` + Async/Await — Multiple requests parallel
// ----------------------------

async function getMultipleData() {
  try {
    console.log("🌐 Fetching users & posts together...");

    // ⚡ Promise.all = multiple Promises ek sath execute karo
    const [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
    ]);

    console.log("✅ Users:", users);
    console.log("✅ Posts:", posts);

  } catch (err) {
    console.error("❌ Multi-fetch error:", err);
  }
}

getMultipleData();


// ✅✅✅ ----------------------------
// Example 5️⃣ : Custom Wait + Fetch Mix — 360°
// ----------------------------

// ⚡ 1️⃣ Custom wait function jo Promise return karta hai
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`✅ Waited ${ms} ms!`);
    }, ms);
  });
}

// ⚡ 2️⃣ Wait karo, fir API call karo
async function getDataWithDelay() {
  console.log("⌛ Waiting 3 sec before API call...");

  const msg = await wait(3000); // ⚡ custom wait
  console.log(msg);             // ✅ show wait msg

  console.log("🌐 Now fetching todo...");

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await res.json();

  console.log("✅ Todo:", todo);
}

getDataWithDelay();
