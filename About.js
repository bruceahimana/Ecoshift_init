import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/about-modern.css';

export default function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">ABOUT ECOSHIFT</span>
          </div>
          <h1 className="hero-title">Transforming Waste Into Opportunity</h1>
          <p className="hero-subtitle">
            We're a passionate team of innovators, developers, and environmental champions 
            dedicated to revolutionizing waste management through technology and community engagement.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Communities Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM LEADERSHIP */}
      <section className="leadership-section">
        <div className="section-header">
          <h2>Our Leadership</h2>
          <p className="section-subtitle">Visionary founders driving sustainable change</p>
        </div>
        <div className="leadership-grid">
          <div className="leader-card">
            <div className="leader-image-container">
              <img 
                src="/images/founders/joshua-kwikiriza.jpg"
                alt="Joshua Kwikiriza" 
                className="leader-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <div className="placeholder-icon">👤</div>
                <p>Joshua Kwikiriza</p>
              </div>
            </div>
            <div className="leader-content">
              <h3>Joshua Kwikiriza</h3>
              <div className="leader-title">Founder & CEO</div>
              <p className="leader-bio">
                Technology visionary with 8+ years in sustainable innovation. 
                Leads our strategic direction and technological advancement.
              </p>
              <div className="leader-social">
                <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          
          <div className="leader-card">
            <div className="leader-image-container">
              <img 
                src="/images/founders/winnie-kirabo.png"
                alt="Winnie Kirabo" 
                className="leader-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <div className="placeholder-icon">👤</div>
                <p>Winnie Kirabo</p>
              </div>
            </div>
            <div className="leader-content">
              <h3>Winnie Kirabo</h3>
              <div className="leader-title">Co-founder & COO</div>
              <p className="leader-bio">
                Operations expert with deep community engagement experience. 
                Oversees implementation and community partnerships.
              </p>
              <div className="leader-social">
                <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT TEAM */}
      <section className="dev-team-section">
        <div className="section-header">
          <h2>Development Team</h2>
          <p className="section-subtitle">The technical minds building our digital future</p>
        </div>
        <div className="dev-grid">
          <div className="dev-card">
            <div className="dev-image-container">
              <img 
                src="/images/bruce.png" 
                alt="Bruce" 
                className="dev-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <div className="placeholder-icon">👨‍💻</div>
                <p>Bruce</p>
              </div>
              <div className="dev-badge">Lead Developer</div>
            </div>
            <div className="dev-content">
              <h3>Bruce</h3>
              <p className="dev-role">Full-Stack Engineering</p>
              <p className="dev-bio">
                Architect of our scalable platform infrastructure with expertise in 
                modern web technologies and system optimization.
              </p>
              <div className="dev-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">AWS</span>
              </div>
            </div>
          </div>
          
          <div className="dev-card">
            <div className="dev-image-container">
              <img 
                src="/images/aristide.jpg"                
                alt="Aristide" 
                className="dev-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <div className="placeholder-icon">👨‍💻</div>
                <p>Aristide</p>
              </div>
              <div className="dev-badge">FE & BE Specialist</div>
            </div>
            <div className="dev-content">
              <h3>Aristide</h3>
              <p className="dev-role">UI/UX/Database Development</p>
              <p className="dev-bio">
                Creative frontend and backend developer focused on intuitive user experiences, efficient database management 
                and responsive web design for maximum accessibility.
              </p>
              <div className="dev-skills">
                <span className="skill-tag">JS</span>
                <span className="skill-tag">HTML&CSS</span>
                <span className="skill-tag">UI/UX</span>
                <span className="skill-tag">React&Python</span>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision-section">
        <div className="mv-container">
          <div className="mv-card mission-card">
            <div className="mv-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower communities,business,and youth with sustainable solution that reduce environmental impact,create green jobs and build resilient societies 
            </p>
          </div>
          
          <div className="mv-card vision-card">
            <div className="mv-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>
             A world where economic growth and environmental sustainability  go hand-in-hand,ensuring prosperity for both people and the planet  
            </p>
          </div>
          <div className="mv-card Why us-card">
            <div className="mv-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Why us</h3>
            <p>
              Environmental protection with measurable impact
              Economic empowerment through  green innovation
              Inclusive growth that leaves no  one behind 
              future proof solutions built for scalability
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-section">
        <div className="section-header">
          <h2>Value Proposition</h2>
          <p className="section-subtitle">Our Uniqueness </p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h4>Innovation & Technology</h4>
            <p>
              Smart eco-solutions(apps,IoT,data)
              circular economy & Zero-waste models 
              online paynment Subscrption 

            </p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-users"></i>
            </div>
            <h4>Community and Social Impact</h4>
            <p>Educational & climate awareness 
              stronger ,resilient Communities
              Inclusive ,equitable growth
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h4>Environmental Impact</h4>
            <p>Lower carbon footprint 
              Green tech  and energy effeciency 
              protect  forests,rivers and wildlife
            </p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4>Economic Value </h4>
            <p>cost savings for business 
              Green jobs for youth 
              Attract eco-conscious investors.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta-section">
        <div className="cta-container">
          <h2>Ready to Join Our Movement?</h2>
          <p>Be part of the change towards sustainable waste management</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary-cta">
              <i className="fas fa-hands-helping"></i>
              Get Involved
            </Link>
            <Link to="/projects" className="cta-button secondary-cta">
              <i className="fas fa-compass"></i>
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}