import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/contact.css'; // Using contact.css for general page styling

export default function NotFound() {
  return (
    <section className="contact">
      <div className="contact-header">
        <h2>Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
      </div>
      
      <div className="custom-donation" style={{textAlign: 'center', padding: '2rem 0'}}>
        <h3>Let's get you back on track</h3>
        <p>Try visiting one of these popular pages instead:</p>
        <div className="donation-options" style={{justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem'}}>
          <Link to="/" className="donate-btn primary">Home</Link>
          <Link to="/about" className="donate-btn secondary">About Us</Link>
          <Link to="/projects" className="donate-btn secondary">Our Projects</Link>
          <Link to="/contact" className="donate-btn primary">Support Our Mission</Link>
        </div>
      </div>
    </section>
  );
}