function herosec() {
    let c = document.createElement("div");
    c.className = "hero";
    c.innerHTML = `  <div class="hero-background">
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
        </div>
        
        <div class="hero-container">
            <div class="hero-badge">
                <i class="fas fa-sparkles"></i>
                New: Component-Based Architecture
            </div>
            
            <h1 class="hero-title">
                Build Amazing
                <span class="gradient-text">Modular Websites</span>
            </h1>
            
            <p class="hero-subtitle">
                Create stunning, responsive websites with our component-based architecture. 
                Modern design meets powerful functionality.
            </p>
            
            <div class="hero-features">
                <div class="feature-pill">
                    <i class="fas fa-bolt"></i>
                    Lightning Fast
                </div>
                <div class="feature-pill">
                    <i class="fas fa-shield-alt"></i>
                    Secure & Reliable
                </div>
                <div class="feature-pill">
                    <i class="fas fa-sparkles"></i>
                    Modern Design
                </div>
            </div>
            
            <div class="hero-buttons">
                <button class="btn-primary">
                    Get Started Now
                    <i class="fas fa-arrow-right"></i>
                </button>
                <button class="btn-secondary">
                    <div class="play-icon">
                        <i class="fas fa-play"></i>
                    </div>
                    Watch Demo
                </button>
            </div>
            
            <div class="hero-stats">
                <div class="stat">
                    <div class="stat-number">10k+</div>
                    <div class="stat-label">Active Users</div>
                </div>
                <div class="stat">
                    <div class="stat-number">99.9%</div>
                    <div class="stat-label">Uptime</div>
                </div>
                <div class="stat">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Support</div>
                </div>
            </div>
        </div>
    `;
        return c
  }
  export default herosec
  