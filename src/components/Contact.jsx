function Contact() {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-text">
        <p>I am currently available for new opportunities. Feel free to reach out!</p>
        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <p><strong>Email:</strong> aadhila003@gmail.com</p>
          <p><strong>Phone:</strong> +971 56 553 7226</p>
          <p><strong>Location:</strong> Fujairah, United Arab Emirates</p>
        </div>
      </div>
      <div className="contact-links" style={{ marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <a href="mailto:aadhila003@gmail.com" className="btn btn-primary">Send Email</a>
        <a href="https://wa.me/971565537226" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">WhatsApp Me</a>
      </div>
    </section>
  );
}

export default Contact;
