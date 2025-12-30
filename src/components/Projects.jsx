import { motion } from 'framer-motion';

function Projects() {
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.section
            id="projects"
            className="section-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="section-title">Experience & Projects</h2>
            <div className="projects-grid">
                <motion.div
                    className="project-card"
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                >
                    <img src="/erp-project.png" alt="ERP Developer" className="project-image-placeholder" />
                    <div className="project-info">
                        <h3>ERP Developer & Operations Analyst</h3>
                        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#94a3b8' }}>2024 – 2025</p>
                        <p>
                            Worked on ERP software projects focused on inventory tracking and delivery load planning.
                            Used Owlio ERP and Flower Base software to support operational reporting and digitized documentation workflows.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="project-card"
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                >
                    <img src="/analytics-project.png" alt="Business Analytics" className="project-image-placeholder" />
                    <div className="project-info">
                        <h3>Freelance Business Analytics</h3>
                        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#94a3b8' }}>2024 – 2025</p>
                        <p>
                            Delivered academic projects simulating real business environments. Applied AI analysis and prompt
                            engineering to streamline reporting and aligned operational data with sales objectives.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="project-card"
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                >
                    <img src="/education-project.png" alt="Education" className="project-image-placeholder" />
                    <div className="project-info">
                        <h3>Education: ACCA & B.Com</h3>
                        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#94a3b8' }}>2022 – 2025</p>
                        <p>
                            Bachelor of Commerce (Cooperation) from Mannam NSS College.
                            ACCA Applied Knowledge Level (5 Papers Completed).
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="project-card"
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                >
                    <img src="/webdesign-project.png" alt="Web Design" className="project-image-placeholder" />
                    <div className="project-info">
                        <h3>Web Design & Development</h3>
                        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#94a3b8' }}>2024 – Present</p>
                        <p>
                            Creating modern, responsive websites with clean design and user-friendly interfaces.
                            Proficient in HTML, CSS, JavaScript, and React for building dynamic web applications.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Projects;

