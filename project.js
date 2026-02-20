import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/project.css';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
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
    <section className="projects">
      {/* PROJECTS HEADER */}
      <div className="projects-header">
        <h2>Our Projects</h2>
        <p>
          Our initiatives focus on innovative, sustainable solutions
          for waste management and community empowerment.
        </p>
      </div>

      {/* QUICK STATS SECTION - MOVED FROM HOME */}
      <section className="quick-stats">
        <div className="stat-item">
          <h3>500+</h3>
          <p>Smart Hubs Installed</p>
        </div>
        <div className="stat-item">
          <h3>15</h3>
          <p>Communities Served</p>
        </div>
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Tons Recycled</p>
        </div>
        <div className="stat-item">
          <h3>2000+</h3>
          <p>Youth Engaged</p>
        </div>
      </section>

      {/* PROJECT LIST / CARDS */}
      <div className="project-list">
        <div className="project-card">
          <div className="project-image-container">
            <img src="images/solar.png" alt="Smart Solar-Powered Hubs" className="project-card-image" />
            <div className="project-image-backdrop"></div>
          </div>
          <div className="project-card-content">
            <h3>Smart Solar-Powered Hubs</h3>
            <p>
              Solar-powered waste collection hubs that optimize efficiency
              and reduce environmental impact through IoT sensors and automated sorting.
            </p>
            <div className="project-stats">
              <span className="stat">500+ Hubs Deployed</span>
              <span className="stat">40% Efficiency Increase</span>
            </div>
            <Link to="/impact" className="learn-more-btn">Learn More</Link>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-image-container">
            <img src="/images/recycle.png" alt="Recycling & Responsible Disposal" className="project-card-image" />
            <div className="project-image-backdrop"></div>
          </div>
          <div className="project-card-content">
            <h3>Recycling & Responsible Disposal</h3>
            <p>
              Promoting recycling and proper disposal to minimize pollution
              and conserve resources through community programs and educational workshops.
            </p>
            <div className="project-stats">
              <span className="stat">1000+ Tons Recycled</span>
              <span className="stat">15 Communities Served</span>
            </div>
            <Link to="/impact" className="learn-more-btn">Learn More</Link>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-image-container">
            <img src="/images/education.png" alt="Environmental Education" className="project-card-image" />
            <div className="project-image-backdrop"></div>
          </div>
          <div className="project-card-content">
            <h3>Environmental Education</h3>
            <p>
              Engaging communities and youth in learning sustainable practices
              for a cleaner environment through school programs and public awareness campaigns.
            </p>
            <div className="project-stats">
              <span className="stat">2000+ Students Reached</span>
              <span className="stat">50 Workshops Conducted</span>
            </div>
            <Link to="/about" className="learn-more-btn">Learn More</Link>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-image-container">
            <img src="/images/urban.png" alt="Urban Green Spaces" className="project-card-image" />
            <div className="project-image-backdrop"></div>
          </div>
          <div className="project-card-content">
            <h3>Urban Green Spaces</h3>
            <p>
              Transforming waste areas into thriving green spaces that serve
              communities while promoting biodiversity and urban sustainability.
            </p>
            <div className="project-stats">
              <span className="stat">25 Parks Created</span>
              <span className="stat">3000+ Trees Planted</span>
            </div>
            <Link to="/impact" className="learn-more-btn">Learn More</Link>
          </div>
        </div>
      </div>

      {/* PROJECT TIMELINE */}
      <div className="projects-timeline">
        <h3>Project Timeline</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Phase 1: Pilot Program</h4>
              <p>Launched initial smart hubs in 5 neighborhoods</p>
              <span className="timeline-date">2023</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Phase 2: Expansion</h4>
              <p>Scaled operations to 15 communities</p>
              <span className="timeline-date">2024</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Phase 3: National Rollout</h4>
              <p>Planning nationwide implementation</p>
              <span className="timeline-date">2025-2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* ENHANCED DONATE SECTION - MODERN SUBSCRIPTION STYLE */}
      <section className="projects-donate-section">
        <div className="donate-container">
          <div className="donate-header">
            <h2>Support Our <span className="highlight">Projects</span></h2>
            <p>
              Your contribution directly funds our environmental initiatives and creates lasting impact in communities across Africa. 
              Choose a plan that fits your commitment level.
            </p>
          </div>
          
          <div className="donation-options">
            <div className="donation-tier">
              <div className="tier-badge">Starter</div>
              <div className="tier-price">₵50</div>
              <h3>Community Impact</h3>
              <ul>
                <li><i className="fas fa-check"></i> Educational workshop funding</li>
                <li><i className="fas fa-check"></i> Local volunteer training</li>
                <li><i className="fas fa-check"></i> Community outreach materials</li>
                <li><i className="fas fa-check"></i> Basic project support</li>
              </ul>
              <button 
                className="donate-btn btn-outline"
                onClick={() => {
                  setDonationData({ ...donationData, amount: '50' });
                  setIsModalOpen(true);
                }}
              >
                Donate Now
              </button>
            </div>
            
            <div className="donation-tier featured">
              <div className="tier-badge popular">Most Impactful</div>
              <div className="tier-price">₵150</div>
              <h3>Project Champion</h3>
              <ul>
                <li><i className="fas fa-check"></i> Smart hub operational support</li>
                <li><i className="fas fa-check"></i> Staff training programs</li>
                <li><i className="fas fa-check"></i> Environmental monitoring systems</li>
                <li><i className="fas fa-check"></i> Community development initiatives</li>
                <li><i className="fas fa-check"></i> Quarterly impact reports</li>
              </ul>
              <button 
                className="donate-btn btn-primary"
                onClick={() => {
                  setDonationData({ ...donationData, amount: '150' });
                  setIsModalOpen(true);
                }}
              >
                Donate Now
              </button>
            </div>
            
            <div className="donation-tier">
              <div className="tier-badge">Premium</div>
              <div className="tier-price">₵500</div>
              <h3>Major Initiative</h3>
              <ul>
                <li><i className="fas fa-check"></i> New smart hub installation</li>
                <li><i className="fas fa-check"></i> 6 months community support</li>
                <li><i className="fas fa-check"></i> Comprehensive environmental program</li>
                <li><i className="fas fa-check"></i> Research and development</li>
                <li><i className="fas fa-check"></i> Personal impact consultation</li>
              </ul>
              <button 
                className="donate-btn btn-outline"
                onClick={() => {
                  setDonationData({ ...donationData, amount: '500' });
                  setIsModalOpen(true);
                }}
              >
                Donate Now
              </button>
            </div>
          </div>
          
          {/* Custom Donation */}
          <div className="custom-donation">
            <h3>Custom Amount</h3>
            <div className="donation-form">
              <div className="amount-input">
                <span className="currency">₵</span>
                <input 
                  type="number" 
                  placeholder="Enter amount" 
                  min="10" 
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>
              <button 
                onClick={handleCustomDonation}
                className="donate-btn btn-secondary"
              >
                Donate Custom Amount
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION MODAL */}
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
                <p>Supporting EcoShift Initiative's environmental projects</p>
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
    </section>
  );
}