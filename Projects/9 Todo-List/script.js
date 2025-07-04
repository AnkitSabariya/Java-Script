// ==================== Animation and Dark/Light mode ==================================
document.addEventListener("DOMContentLoaded", function () {
  const frame = document.getElementById("iphoneFrame");
  const themeToggle = document.getElementById("themeToggle");
  const themeColor = document.getElementById("theme-color");

  // Check system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Check saved preference or use system preference
  const savedTheme = localStorage.getItem("darkMode");
  const isDark = savedTheme !== null ? savedTheme === "true" : prefersDark;

  // Apply theme
  if (isDark) {
    frame.classList.add("dark-mode");
    themeColor.setAttribute("content", "#111827");
  }

  // Theme toggle
  themeToggle.addEventListener("click", function () {
    frame.classList.toggle("dark-mode");
    const isDarkMode = frame.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
    themeColor.setAttribute("content", isDarkMode ? "#111827" : "#ffffff");

    // Add haptic feedback if supported
    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
  });

  // Handle system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (localStorage.getItem("darkMode") === null) {
        if (e.matches) {
          frame.classList.add("dark-mode");
          themeColor.setAttribute("content", "#111827");
        } else {
          frame.classList.remove("dark-mode");
          themeColor.setAttribute("content", "#ffffff");
        }
      }
    });

  // Fix 100vh on mobile
  function setAppHeight() {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  }

  window.addEventListener("resize", setAppHeight);
  setAppHeight();

  // Prevent pull-to-refresh
  document.body.addEventListener(
    "touchmove",
    function (e) {
      if (e.target.closest(".todo-list") === null) {
        e.preventDefault();
      }
    },
    { passive: false }
  );
});
// ==================== Todo- List Logic ==================================
let count = 0;


function addtodo() {

  
  count = document.querySelectorAll(".todo-item").length;
  console.log("my count" + count);
  const bar = document.getElementById("bar");
  bar.style.width = `${count+10}%`;

  console.log("Lenth : " + count);

  let userinput = document.getElementById("userinput").value.trim(); // main Input Value

  let removeinput = document.getElementById("userinput"); // remove input value
  let div = document.createElement(`div`);
  let newtask = document.getElementById("newtask"); // create new input with task
  if (userinput != "") {
    div.innerHTML += `   <div class="todo-item" id="div${count}">
                                        <button class="todo-checkbox checked" onclick="savetodo(${count})">✓</button>
                                        <span  class="todo-text" id="span${count}">${count} : ${userinput}</span>
                                        <div class="todo-actions">
                                            <button class="edit-button" onclick="edittodo(${count})">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                                </button>
                                                <button onclick="deleteinput(${count})" class="delete-button">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2">
                                                    <polyline points="3,6 5,6 21,6" />
                                                    <path
                                                    d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2" />
                                                    </svg>
                                                    </button>
                                                    </div>
                                                    </div>`;
    newtask.appendChild(div);
    removeinput.value = "";
   
  
 
    count++;
    
  } else {
    alert("Please add task sir jiiii");
  }
  updateEmptyState();
}
function deleteinput(count) {
  let ankit = document.getElementById(`div${count}`);

  console.log(count);

  ankit.remove();
  updateEmptyState();
}
function edittodo(count) {
  let span = document.getElementById(`span${count}`).innerText; // inner value
  console.log(span);

  let ankit = document.getElementById(`div${count}`);

  ankit.innerHTML = `<button class="todo-checkbox" onclick="savetodo(${count})">✓</button>
                                        <input type="text" id="newspan${count}" value="${span}"  style="width: 80%;
                                        background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
   
        font-size: min(18px, 4.5vw);
    color: var(--text-primary);
    transition: all 0.3s ease;
    border-bottom: 2px solid #3b82f6;
    padding-bottom: min(4px, 1vw);
   ;">
                                        <div class="todo-actions">
                                            <button class="edit-button" onclick="edittodo(${count})">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                                </button>
                                                <button onclick="deleteinput(${count})" class="delete-button">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2">
                                                    <polyline points="3,6 5,6 21,6" />
                                                    <path
                                                    d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2" />
                                                    </svg>
                                                    </button>
                                                    </div>
                                                    `;
}
function savetodo(count) {
  console.log("saved successfully");
  
  let ankit = document.getElementById(`div${count}`);
  let newspan = document.getElementById(`newspan${count}`).value;

  console.log(ankit);

  ankit.innerHTML = `<button class="todo-checkbox checked" onclick="savetodo(${count})">✓</button>
<span class="todo-text" id="span${count}">${newspan}</span>

  <div class="todo-actions">
      <button class="edit-button" onclick="edittodo(${count})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          </button>
          <button onclick="deleteinput(${count})" class="delete-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2">
              <polyline points="3,6 5,6 21,6" />
              <path
              d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2" />
              </svg>
              </button>
              </div>
              `;
            
}
function deleteAllTasks() {
  const allTodos = document.querySelectorAll(".todo-item");
  allTodos.forEach((todo) => todo.remove());
  updateEmptyState();
}
function updateEmptyState() {
  const tasks = document.querySelectorAll(".todo-item");
  const emptyState = document.getElementById("emptyState");
  const counter = document.getElementById("Tasks");
  const addbtn = document.getElementById("addbtn");

  if (tasks.length === 0) {
    emptyState.style.display = "block";
    addbtn.innerHTML = ""; // ✅ Clear All button remove
  } else {
    emptyState.style.display = "none";
    addbtn.innerHTML = `<button class="delete-all-button" id="deleteAllBtn" onclick="deleteAllTasks()" style="display: flex;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="3,6 5,6 21,6"></polyline>
                              <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"></path>
                          </svg>
                          Clear All
                        </button>`;
  }

  counter.innerText = `Total tasks : ${tasks.length}`;
}
