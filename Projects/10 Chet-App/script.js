let hour = 0;
let min = 0;
let clock1 = document.getElementById("timer1");
let clock2 = document.getElementById("timer2");

function getFormattedTime() {
  const now = new Date(); // ✅ yahi pe fresh Date()
  let hour = now.getHours();
  let min = now.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";
  let hour12 = hour % 12 || 12;
  return `${hour12}:${min.toString().padStart(2, "0")} ${ampm}`;
}


function updateClock() {
  clock1.innerText = getFormattedTime();
  clock2.innerText = getFormattedTime();
}


updateClock(); 
setInterval(updateClock, 1000);

// ========== Typing Indicator Logic ========== //
function iphonetyping() {
  let input = document.getElementById("appleinput").value.trim();
  let chat = document.getElementById("samsung-container");

  const typing = chat.querySelector(".typing");
  if (typing) typing.remove();

  if (input !== "") {
    const div = document.createElement("div");
    div.className = "message received typing";
    div.innerHTML = `
      <div class="typing-indicator">
        <span></span><span></span><span></span>
      </div>`;
    chat.appendChild(div);
  }
}

function samsungtyping() {
  let input = document.getElementById("samsunginput").value.trim();
  let chat = document.getElementById("iphone-container");

  const typing = chat.querySelector(".typing");
  if (typing) typing.remove();

  if (input !== "") {
    const div = document.createElement("div");
    div.className = "message received typing";
    div.innerHTML = `
      <div class="typing-indicator">
        <span></span><span></span><span></span>
      </div>`;
    chat.appendChild(div);
  }
}

// ============= Iphone Message ============== //
function iphone() {
  let msg = document.getElementById("appleinput").value.trim();
  if (msg === "") return alert("iPhone input empty!");

  let time = getFormattedTime();

  let chat = document.getElementById("iphone-container");
  let div = document.createElement("div");
  div.className = "message sent";
  div.innerHTML = `<p class="message-content">${msg}</p><span class="message-time">${time}</span>`;
  chat.appendChild(div);

  // Remove Samsung typing
  const typing = document.querySelector("#samsung-container .typing");
  if (typing) typing.remove();

  samsungreceived(msg, time);
  document.getElementById("appleinput").value = "";
}

function samsungreceived(msg, time) {
  let chat = document.getElementById("samsung-container");
  let div = document.createElement("div");
  div.className = "message received";
  div.innerHTML = `<p class="message-content">${msg}</p><span class="message-time">${time}</span>`;
  chat.appendChild(div);
}

// ============= Samsung Message ============== //
function samsung() {
  let msg = document.getElementById("samsunginput").value.trim();
  if (msg === "") return alert("Samsung input empty!");

  let time = getFormattedTime();

  let chat = document.getElementById("samsung-container");
  let div = document.createElement("div");
  div.className = "message sent";
  div.innerHTML = `<div class="message-content">${msg}</div><div class="message-time">${time}</div>`;
  chat.appendChild(div);

  // Remove iPhone typing
  const typing = document.querySelector("#iphone-container .typing");
  if (typing) typing.remove();

  iphonereceived(msg, time);
  document.getElementById("samsunginput").value = "";
}

function iphonereceived(msg, time) {
  let chat = document.getElementById("iphone-container");
  let div = document.createElement("div");
  div.className = "message received";
  div.innerHTML = `<div class="message-content">${msg}</div><div class="message-time">${time}</div>`;
  chat.appendChild(div);
}

// ================= Theme Logic ================ //
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.querySelector(".theme-icon");

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark-theme");
    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const themeIcon = document.querySelector(".theme-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.textContent = "☀️";
  }
});
