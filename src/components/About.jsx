import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="section-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="about-text">
          Logistics & Accounting graduate with hands-on ERP experience.
          I specialize in streamlining business operations through data-driven solutions and workflow automation.
        </p>

        <h3 style={{ color: 'var(--text-color)', marginBottom: '15px', fontSize: '1.3rem', marginTop: '30px' }}>Background</h3>
        <p className="about-text" style={{ fontSize: '1rem', marginBottom: '25px' }}>
          Currently working with ERP systems like Owlio and Flower Base, focusing on inventory management,
          sales coordination, and operational reporting. Strong foundation in logistics operations and accounting principles.
        </p>

        <h3 style={{ color: 'var(--text-color)', marginBottom: '15px', fontSize: '1.3rem' }}>Education</h3>
        <p className="about-text" style={{ fontSize: '1rem', marginBottom: '25px' }}>
          Bachelor of Commerce from Mannam NSS College • ACCA Applied Knowledge Level (5 Papers)
        </p>

        <h3 style={{ color: 'var(--text-color)', marginBottom: '20px', fontSize: '1.3rem' }}>Skills & Expertise</h3>
        <div className="skills-container">
          <span className="skill-tag">ERP Systems</span>
          <span className="skill-tag">Logistics</span>
          <span className="skill-tag">Accounting</span>
          <span className="skill-tag">Data Analysis</span>
          <span className="skill-tag">Excel</span>
          <span className="skill-tag">AI Automation</span>
        </div>

        <h3 style={{ color: 'var(--text-color)', marginBottom: '20px', fontSize: '1.3rem', marginTop: '30px' }}>Languages</h3>
        <div className="languages-container">
          <div className="language-bar">
            <div className="language-info">
              <span className="language-name">English</span>
              <span className="language-percent">100%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="language-bar">
            <div className="language-info">
              <span className="language-name">Hindi</span>
              <span className="language-percent">75%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="language-bar">
            <div className="language-info">
              <span className="language-name">Arabic</span>
              <span className="language-percent">75%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
