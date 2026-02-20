import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/contact-modern.css';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [donationData, setDonationData] = useState({
    amount: '',
    paymentMethod: '',
    currency: 'GHS',
    language: 'en',
    country: 'Rwanda',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    anonymous: false
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCustomDonation = () => {
    if (customAmount && parseFloat(customAmount) >= 10) {
      setDonationData({ ...donationData, amount: customAmount });
      setIsModalOpen(true);
    } else {
      alert('Please enter a valid amount (minimum ₵10)');
    }
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation Data:', donationData);
    alert(`Thank you for your donation of ₵${donationData.amount}! Processing your payment through ${donationData.paymentMethod}.`);
    setIsModalOpen(false);
    setCustomAmount('');
  };

  const handleDonationInputChange = (field, value) => {
    setDonationData({ ...donationData, [field]: value });
  };

  return (
    <div className="contact-modern-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Reach out to learn more about our initiatives or how you can support our mission.</p>
        </div>
      </section>

      <div className="contact-main-container">
        {/* Contact Information */}
        <section className="contact-info-modern">
          <div className="section-header">
            <h2>Contact Information</h2>
            <p>Connect with us through any of these channels</p>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>iecoshift@gmail.com</p>
                <p>support@ecoshift.org</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+250 792 416 345</p>
               <p>+250 798 223 026</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Address</h3>
                <p>Kigali Innovation City</p>
                <p>Kigali, Rwanda</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-content">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 8AM - 6PM</p>
                <p>Saturday: 9AM - 1PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="section-header">
            <h2>Send Us a Message</h2>
            <p>Have questions or want to get involved? We're here to help.</p>
          </div>
          
          <form className="modern-contact-form" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <textarea 
                placeholder="Your Message" 
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows="6" 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn-modern">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </section>

        {/* Social Media */}
        <section className="social-media-modern">
          <div className="section-header">
            <h2>Follow Our Journey</h2>
            <p>Stay connected and follow our environmental impact stories</p>
          </div>
          
          <div className="social-links-modern">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link-modern facebook">
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link-modern twitter">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-modern instagram">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-modern linkedin">
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link-modern youtube">
              <i className="fab fa-youtube"></i>
              <span>YouTube</span>
            </a>
          </div>
        </section>
      </div>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="donation-modal-overlay">
          <div className="donation-modal">
            <div className="modal-header">
              <h2>Complete Your Donation</h2>
              <button 
                className="modal-close" 
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-content">
              <div className="donation-summary">
                <h3>Donation Amount: ₵{donationData.amount}</h3>
                <p>Supporting EcoShift Initiative's environmental programs</p>
              </div>
              
              <form className="donation-form-modal" onSubmit={handleDonationSubmit}>
                <div className="form-section">
                  <h4>Payment Method</h4>
                  <div className="payment-methods">
                    <label className="payment-option">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="PayPal"
                        checked={donationData.paymentMethod === 'PayPal'}
                        onChange={(e) => handleDonationInputChange('paymentMethod', e.target.value)}
                        required
                      />
                      <span className="payment-label">PayPal</span>
                    </label>
                    <label className="payment-option">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="MasterCard"
                        checked={donationData.paymentMethod === 'MasterCard'}
                        onChange={(e) => handleDonationInputChange('paymentMethod', e.target.value)}
                        required
                      />
                      <span className="payment-label">MasterCard</span>
                    </label>
                    <label className="payment-option">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="Momo Pay"
                        checked={donationData.paymentMethod === 'Momo Pay'}
                        onChange={(e) => handleDonationInputChange('paymentMethod', e.target.value)}
                        required
                      />
                      <span className="payment-label">Momo Pay</span>
                    </label>
                    <label className="payment-option">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="Visa"
                        checked={donationData.paymentMethod === 'Visa'}
                        onChange={(e) => handleDonationInputChange('paymentMethod', e.target.value)}
                        required
                      />
                      <span className="payment-label">Visa</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text" 
                      value={donationData.firstName}
                      onChange={(e) => handleDonationInputChange('firstName', e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text" 
                      value={donationData.lastName}
                      onChange={(e) => handleDonationInputChange('lastName', e.target.value)}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      value={donationData.email}
                      onChange={(e) => handleDonationInputChange('email', e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input 
                      type="tel" 
                      value={donationData.phone}
                      onChange={(e) => handleDonationInputChange('phone', e.target.value)}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Currency</label>
                    <select 
                      value={donationData.currency}
                      onChange={(e) => handleDonationInputChange('currency', e.target.value)}
                    >
                      <option value="GHS">Ghana Cedi (₵)</option>
                      <option value="USD">US Dollar ($)</option>
                      <option value="EUR">Euro (€)</option>
                      <option value="RWF">Rwandan Franc (R₣)</option>
                      <option value="KES">Kenyan Shilling (KSh)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <select 
                      value={donationData.country}
                      onChange={(e) => handleDonationInputChange('country', e.target.value)}
                    >
                      <option value="Rwanda">Rwanda</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Language</label>
                  <select 
                    value={donationData.language}
                    onChange={(e) => handleDonationInputChange('language', e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="rw">Kinyarwanda</option>
                    <option value="es">Spanish</option>
                  </select>
                </div>
                
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={donationData.anonymous}
                      onChange={(e) => handleDonationInputChange('anonymous', e.target.checked)}
                    />
                    <span>Make this donation anonymous</span>
                  </label>
                </div>
                
                <div className="modal-actions">
                  <button type="button" className="cancel-btn" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-donation-btn">
                    Complete Donation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}