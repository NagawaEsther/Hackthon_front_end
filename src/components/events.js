import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation within the app
import './events.css';
import banner from '../banner.jpg'; // Import banner image

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <section id="events" className="events">
      <div className="event-form">
        {/* Tabs for Events */}
        <div className="event-tabs">
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
        </div>

        {/* Event Details */}
        <div className="event-details">
          {activeTab === 'upcoming' && (
            <div className="event-list upcoming-events">
              {/* <h3>Upcoming Events</h3> */}
              
              {/* First Event */}
              <div className="event-card">
                <img
                  src={banner} // Use the imported image variable
                  alt="Tech Conference 2024"
                  className="event-banner"
                />
                <h4>Tech Conference 2024</h4>
                <p><strong>Date:</strong> January 15, 2024</p>
                <p><strong>Description:</strong> Discover innovations and network with tech leaders.</p>
                <a href="https://community.elarian.com/e/mvvvt5/" className="rsvp-btn" target="_blank" rel="noopener noreferrer">
                  RSVP
                </a>
              </div>


              <div className="event-card">
                <img
                  src={banner} // Use the imported image variable
                  alt="Tech Conference 2024"
                  className="event-banner"
                />
                <h4>Hackathon to Market place 2024</h4>
                <p><strong>Date:</strong> January 15, 2024</p>
                <p><strong>Description:</strong> Discover innovations and network with tech leaders.</p>
                <a href="https://community.elarian.com/e/mvvvt5/" className="rsvp-btn" target="_blank" rel="noopener noreferrer">
                  RSVP
                </a>
              </div>

              {/* Second Event */}
              <div className="event-card">
                <img
                  src={banner} // Use the imported image variable
                  alt="Coding Bootcamp"
                  className="event-banner"
                />
                <h4>Coding Bootcamp 2024</h4>
                <p><strong>Date:</strong> February 10, 2024</p>
                <p><strong>Description:</strong> Learn coding skills with hands-on workshops and network.</p>
                <a href="https://community.elarian.com/e/mvvvt5/" className="rsvp-btn" target="_blank" rel="noopener noreferrer">
                  RSVP
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
