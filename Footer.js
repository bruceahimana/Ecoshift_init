import React from "react";
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/components/footer.css';

export default function Footer() {
  const { darkMode, toggleTheme } = useTheme();
  
  const toggleDarkMode = () => {
    toggleTheme();
  };

  return (
    <footer className="footer-modern">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="brand-logo">
            <img 
              src="/images/logo.png" 
              alt="EcoShift Initiative" 
              className="footer-logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-fallback">
              <div className="logo-initials">ES</div>
            </div>
          </div>
          <h2 className="brand-name">EcoShift Initiative</h2>
          <p className="brand-tagline">Driving Sustainable Change for Greater Future </p>
          
          {/* Newsletter Signup */}
          <div className="newsletter-section">
            <h3>Stay Updated</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <div className="link-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/projects">Our Projects</a></li>
              <li><a href="/impact">Impact Stories</a></li>
              <li><a href="/community">Community</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/partners">Partners</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>Support</h3>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/donate">Donate</a></li>
              <li><a href="/volunteer">Volunteer</a></li>
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="footer-contact-social">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>iecoshift@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+250 792 416 345</span>
              <span>+250 798 223 026</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Kigali, Rwanda</span>
            </div>
          </div>

          {/* COLORFUL SOCIAL MEDIA BUTTONS */}
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-buttons-container">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-button facebook">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-button twitter">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-button instagram">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-button youtube">
                <i className="fab fa-youtube"></i>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} EcoShift Initiative. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}