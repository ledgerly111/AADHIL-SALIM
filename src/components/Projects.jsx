function Projects() {
    return (
        <section id="projects" className="section-container">
            <h2 className="section-title">Experience & Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <img src="/erp-project.png" alt="ERP Developer" className="project-image-placeholder" />
                    <div className="project-info">
                        <h3>ERP Developer & Operations Analyst</h3>
                        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#94a3b8' }}>2024 – 2025</p>
                        <p>
                            Worked on ERP software projects focused on inventory tracking and delivery load planning.
                            Used Owlio ERP and Flower Base software to support operational reporting and digitized documentation workflows.
                        </p>
                    </div>
                </div>

                <div className="project-card">
                    <img src="/analytics-project.png" alt="Business Analytics" className="project-image-placeholder" />
                    <div className="project-info">
                        <h3>Freelance Business Analytics</h3>
                        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#94a3b8' }}>2024 – 2025</p>
                        <p>
                            Delivered academic projects simulating real business environments. Applied AI analysis and prompt
                            engineering to streamline reporting and aligned operational data with sales objectives.
                        </p>
                    </div>
                </div>

                <div className="project-card">
                    <img src="/education-project.png" alt="Education" className="project-image-placeholder" />
                    <div className="project-info">
                        <h3>Education: ACCA & B.Com</h3>
                        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#94a3b8' }}>2022 – 2025</p>
                        <p>
                            Bachelor of Commerce (Cooperation) from Mannam NSS College.
                            ACCA Applied Knowledge Level (5 Papers Completed).
                        </p>
                    </div>
                </div>

                <div className="project-card">
                    <img src="/webdesign-project.png" alt="Web Design" className="project-image-placeholder" />
                    <div className="project-info">
                        <h3>Web Design & Development</h3>
                        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#94a3b8' }}>2024 – Present</p>
                        <p>
                            Creating modern, responsive websites with clean design and user-friendly interfaces.
                            Proficient in HTML, CSS, JavaScript, and React for building dynamic web applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
