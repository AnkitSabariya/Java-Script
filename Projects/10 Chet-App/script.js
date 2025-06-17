let hour = 0;
let min = 0;
let ampm = hour >= 12 ? "PM" : "AM";
let hour12 = hour % 12 || 12;

function iphone() {

  let appleinput = document.getElementById("appleinput").value;
  if (appleinput != "") {
    // Main container
    let chatmessages = document.getElementById("iphone-container");

    // Parent For Massage Sent
    let div = document.createElement("div");
    div.className = "message sent";

    // Child : 1
    let p = document.createElement("p");
    p.className = "message-content";
    p.innerText = `${appleinput}`;

    // Child : 2
    let span = document.createElement("span");
    span.className = "message-time";
    min++;
    if (min % 60 == 0) {
      hour++;
      min = 0;
    } else {
   span.innerText = `${hour12}:${min.toString().padStart(2, "0")} ${ampm}`;
    }
    time.innerText = `${hour12}:${min.toString().padStart(2, "0")} ${ampm}`

    // container in parent
    chatmessages.appendChild(div);

    // parent In child : 1
    div.appendChild(p);

    // parent In child : 2
    div.appendChild(span);

    function samsungrecived() {
      // Main container
      let chatmessages = document.getElementById("samsung-container");

      // Parent For Massage Sent
      let div = document.createElement("div");
      div.className = "message received";

      // Child : 1
      let p = document.createElement("p");
      p.className = "message-content";
      p.innerText = `${appleinput}`;

      // Child : 2
      let span = document.createElement("span");
      span.className = "message-time";

      span.innerText = `${hour12}:${min.toString().padStart(2, "0")} ${ampm}`;

      // container in parent
      chatmessages.appendChild(div);

      // parent In child : 1
      div.appendChild(p);

      // parent In child : 2
      div.appendChild(span);
    }

    samsungrecived();
  } else {
    alert("Iphone Invalid Input.......");
  }
}

// ======================= Samsung logic ==================================

function samsung() {
  let timer = document.getElementById("timer")
  let samsunginput = document.getElementById("samsunginput").value;
  if (samsunginput != "") {
    console.log(samsunginput);

    // Main container
    let chatmessages = document.getElementById("samsung-container");
  
    // Parent For Massage Sent
    let div = document.createElement("div");
    div.className = "message sent";
  
    // Child : 1
    let p = document.createElement("p");
    p.className = "message-content";
    p.innerText = `${samsunginput}`;
  
    // Child : 2
    let span = document.createElement("span");
    span.className = "message-time";
    min++;
    if (min % 60 == 0) {
      hour++;
      min = 0;
    } else {
      span.innerText = `${hour12}:${min.toString().padStart(2, "0")} ${ampm}`;
    }
     
  
    // container in parent
    chatmessages.appendChild(div);
  
    // parent In child : 1
    div.appendChild(p);
  
    // parent In child : 2
    div.appendChild(span);
  
    function iphonerecived() {
      // Main container
      let chatmessages = document.getElementById("iphone-container");
  
      // Parent For Massage Sent
      let div = document.createElement("div");
      div.className = "message received";
  
      // Child : 1
      let p = document.createElement("p");
      p.className = "message-content";
      p.innerText = `${samsunginput}`;
  
      // Child : 2
      let span = document.createElement("span");
      span.className = "message-time";
  
      span.innerText = `${hour12}:${min.toString().padStart(2, "0")} ${ampm}`;
  
      // container in parent
      chatmessages.appendChild(div);
  
      // parent In child : 1
      div.appendChild(p);
  
      // parent In child : 2
      div.appendChild(span);
    }
  
    iphonerecived();
  }
  else{
    alert("Samsung Invalid Input.......");
  }
  
}

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

// Load saved theme
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const themeIcon = document.querySelector(".theme-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.textContent = "☀️";
  }
});
