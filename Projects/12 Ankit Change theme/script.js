
var body = document.getElementById("body")
function dark() {
    body.style.background = "black"
    body.innerHTML = ` 
        <!-- Morning Text -->
        <div class="morning-text">Good Morning!</div>
        
        <!-- Night Text -->
        <div class="night-text">Good Night!</div>
        
        <!-- Cartoon Sun -->
        <div class="cartoon-sun"></div>
        
        <!-- Cartoon Moon -->
        <div class="cartoon-moon"></div>
        
        <!-- Ground -->
        <div class="ground"></div>
        
        <!-- Cartoon House -->
        <div class="cartoon-house">
            <div class="house-roof"></div>
            <div class="house-base"></div>
            <div class="house-door"></div>
            <div class="house-window"></div>
            <div class="house-window"></div>
            <div class="house-chimney"></div>
        </div>
        
        <!-- Trees -->
        <div class="trees"></div>
        
        <!-- Cartoon Clouds -->
        <div class="cartoon-clouds">
            <div class="cartoon-cloud"></div>
            <div class="cartoon-cloud"></div>
            <div class="cartoon-cloud"></div>
        </div>
        
        <!-- Cartoon Stars -->
        <div class="cartoon-stars">
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
        </div>

        <button onclick="light()">Switch to Morning</button>
    `
    localStorage.setItem("theme", "black")
}

function light() {
    body.style.background = "white"
    body.innerHTML = `
        <!-- Morning Text -->
        <div class="morning-text">Good Morning!</div>
        
        <!-- Night Text -->
        <div class="night-text">Good Night!</div>
        
        <!-- Cartoon Sun -->
        <div class="cartoon-sun"></div>
        
        <!-- Cartoon Moon -->
        <div class="cartoon-moon"></div>
        
        <!-- Ground -->
        <div class="ground"></div>
        
        <!-- Cartoon House -->
        <div class="cartoon-house">
            <div class="house-roof"></div>
            <div class="house-base"></div>
            <div class="house-door"></div>
            <div class="house-window"></div>
            <div class="house-window"></div>
            <div class="house-chimney"></div>
        </div>
        
        <!-- Trees -->
        <div class="trees"></div>
        
        <!-- Cartoon Clouds -->
        <div class="cartoon-clouds">
            <div class="cartoon-cloud"></div>
            <div class="cartoon-cloud"></div>
            <div class="cartoon-cloud"></div>
        </div>
        
        <!-- Cartoon Stars -->
        <div class="cartoon-stars">
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
        </div>

        <button onclick="dark()">Switch to Night</button>
    `
    localStorage.setItem("theme", "white")
}

let get = localStorage.getItem("theme")
if (get == "white") {
    body.style.background = `${get}`
    body.innerHTML = `
        <!-- Morning Text -->
        <div class="morning-text">Good Morning!</div>
        
        <!-- Night Text -->
        <div class="night-text">Good Night!</div>
        
        <!-- Cartoon Sun -->
        <div class="cartoon-sun"></div>
        
        <!-- Cartoon Moon -->
        <div class="cartoon-moon"></div>
        
        <!-- Ground -->
        <div class="ground"></div>
        
        <!-- Cartoon House -->
        <div class="cartoon-house">
            <div class="house-roof"></div>
            <div class="house-base"></div>
            <div class="house-door"></div>
            <div class="house-window"></div>
            <div class="house-window"></div>
            <div class="house-chimney"></div>
        </div>
        
        <!-- Trees -->
        <div class="trees"></div>
        
        <!-- Cartoon Clouds -->
        <div class="cartoon-clouds">
            <div class="cartoon-cloud"></div>
            <div class="cartoon-cloud"></div>
            <div class="cartoon-cloud"></div>
        </div>
        
        <!-- Cartoon Stars -->
        <div class="cartoon-stars">
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
        </div>

        <button onclick="dark()">Switch to Night</button>
    `
}
else {
    body.style.background = `${get}`
    body.innerHTML = `
        <!-- Morning Text -->
        <div class="morning-text">Good Morning!</div>
        
        <!-- Night Text -->
        <div class="night-text">Good Night!</div>
        
        <!-- Cartoon Sun -->
        <div class="cartoon-sun"></div>
        
        <!-- Cartoon Moon -->
        <div class="cartoon-moon"></div>
        
        <!-- Ground -->
        <div class="ground"></div>
        
        <!-- Cartoon House -->
        <div class="cartoon-house">
            <div class="house-roof"></div>
            <div class="house-base"></div>
            <div class="house-door"></div>
            <div class="house-window"></div>
            <div class="house-window"></div>
            <div class="house-chimney"></div>
        </div>
        
        <!-- Trees -->
        <div class="trees"></div>
        
        <!-- Cartoon Clouds -->
        <div class="cartoon-clouds">
            <div class="cartoon-cloud"></div>
            <div class="cartoon-cloud"></div>
            <div class="cartoon-cloud"></div>
        </div>
        
        <!-- Cartoon Stars -->
        <div class="cartoon-stars">
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
            <div class="cartoon-star"></div>
        </div>

        <button onclick="light()">Switch to Morning</button>
    `
}
