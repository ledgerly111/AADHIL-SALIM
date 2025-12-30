function About() {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="about-text">
          Logistics & Accounting graduate with hands-on ERP experience.
          I work with inventory systems, data analysis, and workflow automation to make business operations smoother.
        </p>

        <h3 style={{ color: 'var(--text-color)', marginBottom: '20px', fontSize: '1.5rem', marginTop: '30px' }}>Skills</h3>
        <div className="skills-container">
          <span className="skill-tag">ERP Systems</span>
          <span className="skill-tag">Logistics</span>
          <span className="skill-tag">Accounting</span>
          <span className="skill-tag">Data Analysis</span>
          <span className="skill-tag">Excel</span>
          <span className="skill-tag">AI Automation</span>
        </div>
      </div>
    </section>
  );
}

export default About;
