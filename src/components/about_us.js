import React from "react";
import "./about_us.css";
// import VisionIcon from "../Screenshot_2024-11-14-21-38-21-69.png";
// import CollaborationImage from '../2K8A0090.jpg';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Introduction and Mission Statement */}
      <section className="introduction-section">
        <h2 className="title">Who we are</h2>
        <div className="content-container">
          <img
            src="https://pbs.twimg.com/media/GNCzzE7XcAAxdfS?format=jpg&name=4096x4096"
            alt="Image representing women in tech"
            className="intro-image"
          />
          <p class="empowering-message">
            We are committed to creating opportunities, breaking barriers, and
            amplifying the voices of women in technology across Africa. As part
            of the Africa is Talking ecosystem, we aim to foster innovation,
            inclusion, and impact in tech. By empowering women with skills,
            resources, and a supportive community, we strive to bridge the
            gender gap and drive sustainable growth in the tech industry. Our
            vision is to create a platform where women can not only excel in
            tech but also lead the way in shaping the future of digital
            innovation. Through mentorship programs, workshops, and
            partnerships, we are actively working towards building a more
            inclusive and diverse tech landscape that benefits all. We believe
            in the power of women to transform economies, inspire change, and
            contribute to a brighter, technology-driven Africa.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      {/* <section className="vision-section">
        <div className="vision-container">
          <img
            src={
              "https://pbs.twimg.com/media/GJS2cE5WAAE_PCY?format=jpg&name=4096x4096"
            }
            alt="Vision Icon"
            className="icon-image"
          />
          <div className="vision-text">
            <h2 className="title">Our Vision</h2>
            <p>
              To inspire and empower women to thrive in technology by fostering
              innovation, inclusivity, and leadership.
            </p>
          </div>
        </div>
      </section> */}

      {/* Goals Section */}
      <section className="goals-section">
        <div className="goals-wrapper">
          <div className="image-container">
            <img
              src="https://pbs.twimg.com/media/GYT2xVXXwAA6I3I?format=jpg&name=4096x4096"
              alt="Empowered women in tech"
              className="goals-image"
            />
          </div>
          <div className="goals-content">
            <h2 className="title">Our Goals</h2>
            <ul>
              <li>Increase the number of women participating in technology.</li>
              <li>Provide mentorship and training programs.</li>
              <li>Support women-led tech startups.</li>
              <li>
                Create a thriving network for women in tech to connect,
                collaborate, and grow.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <h2 className="title">Values We Stand By</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Openness</h3>
            <p>
              We strive to ensure easy accessibility, be very accommodative,
              value everyone's opinion and allow everyone to freely express
              themselves.
            </p>
          </div>
          <div className="value-card">
            <h3>Simplicity</h3>
            <p>
              We value being straightforward, plain, and being able to be easily
              understood.
            </p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Encompasses honesty, truthfulness, reliability, and honor.</p>
          </div>
          <div className="value-card">
            <h3>Exceptional Quality</h3>
            <p>
              We strive to be a 'world-class' company that sets a new quality
              standard without being limited to what others think or say.
            </p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Goes to the core of providing the best possible solutions
              always—produce new technology.
            </p>
          </div>
          <div className="value-card">
            <h3>Agility</h3>
            <p>
              Our responsiveness to internal and external factors is with speed
              and efficiency.
            </p>
          </div>
        </div>
      </section>
      {/* Programs and Services */}
      <section className="programs-section">
        <div className="container">
          <h2 className="programs-title">PROGRAMS AND SERVICES</h2>
          <ul className="programs-list">
            <li className="programs-item">
              <span className="highlight">Coding bootcamps</span>, hackathons,
              and workshops.
            </li>
            <li className="programs-item">
              <span className="highlight">Mentorship programs</span> connecting
              experienced professionals with emerging talent.
            </li>
            <li className="programs-item">
              <span className="highlight">Networking opportunities</span>{" "}
              through meetups, conferences, and webinars.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="cta-section">
        <h2 className="title">Join Us</h2>
        <p>
          Become a participant, mentor, or sponsor. Subscribe to our newsletter
          for updates. Attend an event or contribute to our programs.
        </p>
      </section> */}

      <section className="team-section">
        <div className="team-background">
          <div className="team-overlay">
            <h2 className="team-title">Meet The Community</h2>
            <p className="team-description">
              Our dedicated team, supported by Africa is Talking, is committed
              to driving change and empowering women in technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

