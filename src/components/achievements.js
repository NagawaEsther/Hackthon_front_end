import React from "react";
import javameetup from '../javameetup.jpg';
import womenmeetup from '../women meetup.jpg';



const AchievementsAndStories = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      color: "#333",
    },
   

    hero: {
        background: `hsl(24, 98%, 52%) url('https://via.placeholder.com/') no-repeat center/cover`,
        textAlign: "center",
        color: "#fff",
        padding: "60px 20px",
        borderRadius: "8px",
      },
      
    heroTitle: {
      fontSize: "2.8rem",
      marginBottom: "15px",
      fontWeight: "bold",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    },
    heroText: {
      fontSize: "1.3rem",
      lineHeight: "1.6",
    },
    section: {
      margin: "50px 0",
    },
    sectionTitle: {
      fontSize: "2.2rem",
      marginBottom: "25px",
      textAlign: "center",
      color: "green",
      fontWeight: "bold",
    },
    grid: {
      display: "grid",
      gap: "25px",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    },
    card: {
      background: "#f1f1f1",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    cardTitle: {
      fontSize: "1.6rem",
      color: "#333",
      marginBottom: "10px",
    },
    cardText: {
      fontSize: "1.1rem",
      lineHeight: "1.5",
    },
    img: {
      width: "100%",
      height: "auto",
      borderRadius: "10px 10px 0 0",
    },
    link: {
      color: "orange",
      textDecoration: "none",
      fontWeight: "bold",
    },
    linkHover: {
      textDecoration: "underline",
    },
    cta: {
      textAlign: "center",
      background: "black",
      color: "white",
      padding: "50px 20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    ctaButton: {
      background: "orange",
      color: "white",
      padding: "12px 25px",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Women in Technology</h1>
        <p style={styles.heroText}>
          Celebrating the achievements of women shaping the future of technology.
        </p>
      </section>

      {/* Achievements Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Milestones of Excellence</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>50+ Global Tech Leaders</h3>
            <p style={styles.cardText}>
              Women leading innovation in AI, software development, and data science.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>100+ Awards Won</h3>
            <p style={styles.cardText}>
              Recognizing the contributions of women in technology worldwide.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>1,000+ Mentorships</h3>
            <p style={styles.cardText}>
              Empowering the next generation through knowledge sharing and support.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Inspiring Journeys</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            {/* <img src="https://via.placeholder.com/400x300" alt="Java Meetup" style={styles.img} /> */}
            <img src={javameetup} alt="Java Meetup" style={styles.img} />


            <h3 style={styles.cardTitle}>From Hackathon to Marketplace</h3>
            <p style={styles.cardText}>
              "Where are you going to play?" challenges the room to think strategically about market positioning.
            </p>
            <a href="/stories/ada" style={styles.link}>
              Read More
            </a>
          </div>
          <div style={styles.card}>
            {/* <img src="https://via.placeholder.com/400x300" alt="Women Meetup" style={styles.img} /> */}
            <img src={womenmeetup} alt="women meetup" style={styles.img} />


            <h3 style={styles.cardTitle}>Women Meetup</h3>
            <p style={styles.cardText}>
              Calling all business owners & startups! Join the meetup focused on taking your product to market.
            </p>
            <a href="/stories/sophia" style={styles.link}>
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.cta}>
        <h2 style={styles.sectionTitle}>Be a Part of the Change</h2>
        <p>
          Your support can amplify the impact of women in technology, creating opportunities for all.
        </p>
        <button style={styles.ctaButton} onClick={() => alert("Thank you for your support!")}>
          Get Involved
        </button>
      </section>
    </div>
  );
};

export default AchievementsAndStories;
