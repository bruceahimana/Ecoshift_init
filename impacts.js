import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pages/impact.css';
// Images are served from public/images folder
// Using direct path references instead of imports

export default function Impact() {
  return (
    <section className="impact">

      {/* IMPACT HEADER */}
      <div className="impact-header">
        <h2>Our Impact</h2>
        <p>
          Reduced waste dumping, empowered youth, and cleaner communities.
        </p>
      </div>

      {/* IMPACT STATISTICS */}
      <div className="impact-stats">
        <div className="impact-item">
          <div className="stat-icon">📍</div>
          <h3>500+</h3>
          <p>Smart Hubs Installed</p>
          <span className="stat-detail">Across 15 communities</span>
        </div>
        <div className="impact-item">
          <div className="stat-icon">👥</div>
          <h3>1000+</h3>
          <p>Youth Engaged</p>
          <span className="stat-detail">In environmental programs</span>
        </div>
        <div className="impact-item">
          <div className="stat-icon">📊</div>
          <h3>50+</h3>
          <p>Community Programs</p>
          <span className="stat-detail">Educational workshops</span>
        </div>
        <div className="impact-item">
          <div className="stat-icon">♻️</div>
          <h3>1000+</h3>
          <p>Tons Recycled</p>
          <span className="stat-detail">Waste diverted from landfills</span>
        </div>
      </div>

      {/* IMPACT CHARTS */}
      <div className="impact-charts">
        <div className="chart-container">
          <h3>Waste Reduction Over Time</h3>
          <div className="chart-placeholder">
            <div className="chart-bar" style={{height: '80%'}}>2023</div>
            <div className="chart-bar" style={{height: '90%'}}>2024</div>
            <div className="chart-bar" style={{height: '95%'}}>2025</div>
          </div>
        </div>
        
        <div className="chart-container">
          <h3>Community Participation</h3>
          <div className="pie-chart-placeholder">
            <div className="pie-segment" style={{background: '#4CAF50', width: '40%'}}>Active Participants</div>
            <div className="pie-segment" style={{background: '#2196F3', width: '35%'}}>Awareness Level</div>
            <div className="pie-segment" style={{background: '#FF9800', width: '25%'}}>New Joiners</div>
          </div>
        </div>
      </div>

      {/* SUCCESS STORIES */}
      <div className="success-stories">
        <h3>Success Stories</h3>
        <div className="story-cards">
          <div className="story-card">
            <img src="/images/nyabugogo.png" alt="Community Transformation in Nyabugogo" />
            <div className="story-content">
              <h4>Transforming Nyabugogo Community</h4>
              <p>Reduced waste dumping by 70% through smart hub installation and community education programs.</p>
              <span className="story-author">- Community Leader, Nyabugogo</span>
            </div>
          </div>
          
          <div className="story-card">
            <img src="/images/empower.png" alt="Youth Empowerment Program" />
            <div className="story-content">
              <h4>Empowering Young Environmental Leaders</h4>
              <p>Trained 200+ youth in sustainable waste management practices, creating future changemakers.</p>
              <span className="story-author">- Madelaine Uwase, Founder</span>
            </div>
          </div>
        </div>
      </div>

      {/* FUTURE GOALS */}
      <div className="future-goals">
        <h3>Looking Ahead</h3>
        <div className="goals-grid">
          <div className="goal-item">
            <h4>Expand Coverage</h4>
            <p>Deploy smart hubs in 50+ new communities by 2026</p>
          </div>
          <div className="goal-item">
            <h4>Enhance Technology</h4>
            <p>Integrate AI-powered waste sorting systems</p>
          </div>
          <div className="goal-item">
            <h4>Strengthen Partnerships</h4>
            <p>Collaborate with government and private sectors</p>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="impact-cta">
        <h3>Continue Making a Difference</h3>
        <p>See how you can contribute to our ongoing impact</p>
        <div className="cta-buttons">
          <Link to="/projects" className="primary-btn">Explore Projects</Link>
          <Link to="/contact" className="secondary-btn">Support Us</Link>
        </div>
      </div>

    </section>
  );
}