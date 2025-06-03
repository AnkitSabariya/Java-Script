function navbar() {
  let a = document.createElement("div");
  a.className = "navbar";
  a.innerHTML = `  
        <div class="nav-container">
            <div class="nav-logo">
                <div class="logo-icon">M</div>
                <span class="logo-text">ModularJS</span>
            </div>
            
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#home" class="nav-link">
                        <i class="fas fa-home"></i>
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link">
                        <i class="fas fa-info-circle"></i>
                        About
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#services" class="nav-link">
                        <i class="fas fa-users"></i>
                        Services
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">
                        <i class="fas fa-envelope"></i>
                        Contact
                    </a>
                </li>
            </ul>
            
            <button class="cta-button">Get Started</button>
            
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
 
  `;
      return a
}
export default navbar
