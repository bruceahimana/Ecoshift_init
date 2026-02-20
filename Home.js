import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/home-modern.css';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle custom donation
  const handleCustomDonation = () => {
    if (customAmount && parseFloat(customAmount) >= 10) {
      setDonationData({ ...donationData, amount: customAmount });
      setIsModalOpen(true);
    } else {
      alert('Please enter a valid amount (minimum ₵10)');
    }
  };

  // Handle donation submission
  const handleDonationSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation Data:', donationData);
    alert(`Thank you for your donation of ₵${donationData.amount}! Processing your payment through ${donationData.paymentMethod}.`);
    setIsModalOpen(false);
    setCustomAmount('');
  };

  // Handle donation input changes
  const handleDonationInputChange = (field, value) => {
    setDonationData({ ...donationData, [field]: value });
  };

  const slides = [
    {
      id: 1,
      title: "Smart Waste Management Solutions",
      description: "Innovative technology transforming how communities handle waste with solar-powered smart hubs and IoT monitoring systems for efficient recycling and resource recovery.",
      image: "/images/smart-waste.jpg",
      cta: "Explore Our Projects"
    },
    {
      id: 2,
      title: "Community Empowerment Through Education",
      description: "Engaging local communities with environmental education programs, youth workshops, and sustainable development initiatives that create lasting positive change.",
      image: "/images/community.jpg",
      cta: "Learn More"
    },
    {
      id: 3,
      title: "Clean Energy & Green Spaces",
      description: "Creating sustainable urban environments through renewable energy integration, green space development, and eco-friendly infrastructure solutions for healthier communities.",
      image: "/images/green-energy.jpg",
      cta: "See Impact"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section with Modern Design */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transforming Waste Into <span className="highlight">Opportunity</span>
            </h1>
            <p className="hero-description">
              EcoShift Initiative pioneers sustainable waste management solutions that empower communities, 
              protect our environment, and create economic opportunities through innovative technology and education.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                Explore Our Projects
              </Link>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  document.getElementById('donate-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <i className="fas fa-heart"></i>
                Support Our Mission
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-carousel">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="slide-overlay">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                    <Link to="/projects" className="slide-cta">
                      {slide.cta} <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-recycle"></i>
            </div>
            <h3>500+</h3>
            <p>Smart Hubs Installed</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>15</h3>
            <p>Communities Served</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>1000+</h3>
            <p>Tons Recycled</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>2000+</h3>
            <p>Youth Engaged</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>Our <span className="highlight">Innovative</span> Solutions</h2>
          <p>Comprehensive approaches to sustainable waste management and community development</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-solar-panel"></i>
            </div>
            <h3>Smart Solar Hubs</h3>
            <p>Solar-powered waste collection systems with IoT monitoring for efficient resource management</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Education Programs</h3>
            <p>Community workshops and youth engagement initiatives for sustainable development</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>Green Spaces</h3>
            <p>Urban transformation projects creating sustainable environments and biodiversity</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Community <span className="highlight">Voices</span></h2>
          <p>Real stories from communities we've empowered</p>
        </div>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"EcoShift transformed our neighborhood with smart waste solutions that actually work!"</p>
              <div className="testimonial-author">
                <img src="/images/jane.png" alt="Community Leader" />
                <div>
                  <h4>Jane Muthoni</h4>
                  <p>Community Leader, Nairobi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Donate Section */}
      <section className="donate-section" id="donate-section">
        <div className="donate-container">
          <div className="donate-header">
            <h2>Support Our <span className="highlight">Mission</span></h2>
            <p>Join us in creating sustainable solutions for communities across Africa. Your contribution makes a lasting impact.</p>
          </div>
          
          <div className="donation-options">
            <div className="donation-tier">
              <div className="tier-badge">Starter</div>
              <div className="tier-price">₵50</div>
              <h3>Community Support</h3>
              <ul>
                <li><i className="fas fa-check"></i> Educational workshop funding</li>
                <li><i className="fas fa-check"></i> Local volunteer training</li>
                <li><i className="fas fa-check"></i> Community outreach materials</li>
              </ul>
              <button 
                className="btn btn-outline"
                onClick={() => {
                  setDonationData({ ...donationData, amount: '50' });
                  setIsModalOpen(true);
                }}
              >
                Donate Now
              </button>
            </div>
            
            <div className="donation-tier featured">
              <div className="tier-badge popular">Most Popular</div>
              <div className="tier-price">₵150</div>
              <h3>Project Impact</h3>
              <ul>
                <li><i className="fas fa-check"></i> Smart hub operational support</li>
                <li><i className="fas fa-check"></i> Staff training programs</li>
                <li><i className="fas fa-check"></i> Environmental monitoring systems</li>
                <li><i className="fas fa-check"></i> Community development initiatives</li>
              </ul>
              <button 
                className="btn btn-primary"
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
              </ul>
              <button 
                className="btn btn-outline"
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
                className="btn btn-secondary"
              >
                Donate Custom Amount
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Make a <span className="highlight">Difference</span>?</h2>
          <p>Join thousands of supporters creating sustainable change across Africa</p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">
              <i className="fas fa-rocket"></i>
              Explore Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <i className="fas fa-envelope"></i>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

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
                  <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
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