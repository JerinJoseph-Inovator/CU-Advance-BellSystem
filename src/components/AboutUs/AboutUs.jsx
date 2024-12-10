import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <h1 className="title">Our Journey</h1>
        <h2 className="subtitle">From a Traditional Bell to an IOT Based Bell System</h2>

        <div className="team-section">
          <div className="team-member">
            <div className="photo-placeholder"></div>
            <p className="name">Jerin Joseph Alour</p>
            <div className="icons">
              <span className="icon linkedin"></span>
              <span className="icon github"></span>
            </div>
          </div>

          <div className="team-member">
            <div className="photo-placeholder"></div>
            <p className="name">Jacob Anso</p>
            <div className="icons">
              <span className="icon linkedin"></span>
              <span className="icon github"></span>
            </div>
          </div>

          <div className="team-member">
            <div className="photo-placeholder"></div>
            <p className="name">Shreyas Sahoo</p>
            <div className="icons">
              <span className="icon linkedin"></span>
              <span className="icon github"></span>
            </div>
          </div>

          <div className="team-member">
            <div className="photo-placeholder"></div>
            <p className="name">Sombit Banerjee</p>
            <div className="icons">
              <span className="icon linkedin"></span>
              <span className="icon github"></span>
            </div>
          </div>
        </div>

        <div className="guide-section">
          <div className="photo-placeholder"></div>
          <p className="name">Dr. Praghash K</p>
          <p className="designation">ME, PhD</p>
          <p className="role">Our Guide</p>
          <span className="icon linkedin"></span>
        </div>

        <div className="description">
          <p>
            This system stands as a testament to what can be achieved when technology is harnessed with purpose and collaboration. It reflects the power of innovation driven by a collective vision to address real-world challenges and deliver meaningful solutions—a vision that set the foundation for our journey.
          </p>
          <p>
            Our journey began when our guide, Dr. Praghash, entrusted us with the opportunity to modernize the university’s existing bell system as part of our Service Learning Project. The task was both a challenge and an exciting opportunity to apply our skills to a real-world problem, directly benefiting the university community. Initially, we took the first step by remaking the manual Arduino-powered bell system. This hands-on process helped us deeply understand its architecture, strengths, and limitations.
          </p>
          <p>
            Inspired by the potential of IoT technology, we envisioned a system that would not only automate the process but also be user-friendly and adaptable to diverse requirements. With this vision, we designed an IoT-based Bell Management System featuring a Raspberry Pi, relay module, and electric bell, paired with an intuitive web interface.
          </p>
          <p>
            We extend our heartfelt gratitude to Dr. Praghash for his invaluable guidance and unwavering support throughout this journey. We also express our sincere thanks to our Head of the Department, Dr. Inbanila, and the entire ECE department for their encouragement and assistance.
          </p>
        </div>
      </div>

      <footer className="footer">
        <p>Team Millennium</p>
      </footer>
    </div>
  );
};

export default AboutUs;
