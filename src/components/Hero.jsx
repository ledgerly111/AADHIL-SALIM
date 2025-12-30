function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <img src="/profile.jpg" alt="Mohammad Aadhil" className="hero-image" />
                <h1 className="hero-title">
                    Hello, I'm <span className="highlight">Mohammad Aadhil</span>
                </h1>
                <p className="hero-subtitle">
                    Logistics & Accounting Graduate | <span className="gradient-text">ERP Developer & Analyst</span>
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
