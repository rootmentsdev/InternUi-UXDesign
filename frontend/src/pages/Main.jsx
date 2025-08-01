// import React, { useState, useEffect } from 'react';
// import "./HiringInternsPage.css";
// import logo from "../assets/logo.png";
// import homeImage from "../assets/home.png";
// import suitorguy from "../assets/suitorguy.png";
// import zorucci from "../assets/zorucci.png";
// import { trackVisit, trackApplication } from "../utils/analytics";

// const HiringInternsPage = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 2,
//     hours: 4,
//     minutes: 30
//   });

//   useEffect(() => {
//     // Track page visit
//     trackVisit();
    
//     // Track page view in Google Analytics
//     if (typeof gtag !== 'undefined') {
//       gtag('event', 'page_view', {
//         page_title: 'Hiring Interns',
//         page_location: window.location.href
//       });
//     }
    
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev.minutes > 0) {
//           return { ...prev, minutes: prev.minutes - 1 };
//         } else if (prev.hours > 0) {
//           return { ...prev, hours: prev.hours - 1, minutes: 59 };
//         } else if (prev.days > 0) {
//           return { days: prev.days - 1, hours: 23, minutes: 59 };
//         }
//         return prev;
//       });
//     }, 60000); // Update every minute

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="main-container">
//       {/* Background Grid Pattern */}
//       <div className="background-grid"></div>
      
//       {/* Header */}
//       <header className="header">
//         <div className="logo-container">
//           <img src={logo} alt="ROOTMENTS ENTERPRISES" className="logo" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Left Section */}
//         <div className="left-section">
//           <div className="tag">
//             <span>We are looking for Passion, Not Perfection</span>
//           </div>
          
//           <h1 className="main-heading">
//             Are you a <span className="highlight">Problem Solver?</span>
//           </h1>
          
//           <p className="description">
//             Whether you're just starting out or taking your first leap into the professional world, 
//             this is your chance to build, create, learn, and grow with a team that values curiosity, 
//             courage, and fresh perspectives more than credentials.
//           </p>
          
//           <p className="company-description">
//             At Rootments Enterprises LLP, we don't just run a retail empire we build technology to power it. 
//             We are the head office and technology backbone of two of Kerala's fastest-growing premium rental brands:
//           </p>
          
//           <div className="brand-logos">
//             <div className="brand-logo">
//               <img src={suitorguy} alt="Suitor Guy" className="brand-image" />
//             </div>
//             <div className="brand-logo">
//               <img src={zorucci} alt="ZORUCCI" className="brand-image" />
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="right-section">
//           <div className="illustration-container">
//             <img src={homeImage} alt="VR Illustration" className="illustration" />
//             <div className="floating-elements">
//               <div className="floating-shape shape-1"></div>
//               <div className="floating-shape shape-2"></div>
//               <div className="floating-shape shape-3"></div>
//               <div className="cursor-icon">🖱️</div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Bottom Section */}
//       <section className="bottom-section">
//         {/* Current Openings */}
//         <div className="openings-section">
//           <h2 className="section-heading">Current Openings</h2>
//           <div className="job-list">
//             <div className="job-item">
//               <span>UI/UX Designer Intern</span>
//               <span className="arrow">→</span>
//             </div>
//             <div className="job-item">
//               <span>Flutter Developer Intern</span>
//               <span className="arrow">→</span>
//             </div>
//             <div className="job-item">
//               <span>Mern Stack Developer Intern</span>
//               <span className="arrow">→</span>
//             </div>
//           </div>
//         </div>

//         {/* Application Timer */}
//         <div className="timer-section">
//           <h2 className="section-heading">Application Ends in :</h2>
//           <div className="countdown-timer">
//             <div className="timer-box">
//               <span className="timer-value">{timeLeft.days.toString().padStart(2, '0')}</span>
//               <span className="timer-label">Days</span>
//             </div>
//             <div className="timer-box">
//               <span className="timer-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
//               <span className="timer-label">hours</span>
//             </div>
//             <div className="timer-box">
//               <span className="timer-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
//               <span className="timer-label">Mins</span>
//             </div>
//           </div>
          
//           <p className="timer-description">
//             We're selecting a small, passionate team of interns for the next phase of our product and brand rollouts. 
//             Once filled, applications will close.
//           </p>
          
//           <p className="encouragement">
//             If you're ready to grow, contribute, and actually do the work, don't wait
//           </p>
          
//           <button className="apply-button" onClick={() => {
//             trackApplication();
//             // Track application in Google Analytics
//             if (typeof gtag !== 'undefined') {
//               gtag('event', 'application_submit', {
//                 event_category: 'engagement',
//                 event_label: 'internship_application',
//                 value: 1,
//                 custom_parameter: 'apply_button_click'
//               });
//             }
//             // Show confirmation
//             alert('Application tracked! Check analytics for data.');
//           }}>
//             Apply Now
//             <span className="button-arrow">→</span>
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HiringInternsPage;



import React, { useState, useEffect } from 'react';
import "./HiringInternsPage.css";
import logo from "../assets/logo.png";
import homeImage from "../assets/home.png";
import suitorguy from "../assets/suitorguy.png";
import zorucci from "../assets/zorucci.png";
import { trackVisit, trackApplication } from "../utils/analytics";

const HiringInternsPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    // Track page visit
    trackVisit();

    // Track page view in Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: 'Hiring Interns',
        page_location: window.location.href
      });
    }

    const deadline = new Date().getTime() + 30 * 60 * 1000; // 30 minutes from now

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        setTimeLeft({ minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container">
      {/* Background Grid Pattern */}
      <div className="background-grid"></div>

      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="ROOTMENTS ENTERPRISES" className="logo" />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <div className="tag">
            <span>We are looking for Passion, Not Perfection</span>
          </div>

          <h1 className="main-heading">
            Are you a <span className="highlight">Problem Solver?</span>
          </h1>

          <p className="description">
            Whether you're just starting out or taking your first leap into the professional world, 
            this is your chance to build, create, learn, and grow with a team that values curiosity, 
            courage, and fresh perspectives more than credentials.
          </p>

          <p className="company-description">
            At Rootments Enterprises LLP, we don't just run a retail empire we build technology to power it. 
            We are the head office and technology backbone of two of Kerala's fastest-growing premium rental brands:
          </p>

          <div className="brand-logos">
            <div className="brand-logo">
              <img src={suitorguy} alt="Suitor Guy" className="brand-image" />
            </div>
            <div className="brand-logo">
              <img src={zorucci} alt="ZORUCCI" className="brand-image" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="illustration-container">
            <img src={homeImage} alt="VR Illustration" className="illustration" />
            <div className="floating-elements">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>
              <div className="cursor-icon">🖱️</div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <section className="bottom-section">
        {/* Current Openings */}
        <div className="openings-section">
          <h2 className="section-heading">Current Openings</h2>
          <div className="job-list">
            <div className="job-item">
              <span>UI/UX Designer Intern</span>
              <span className="arrow">→</span>
            </div>
            <div className="job-item">
              <span>Flutter Developer Intern</span>
              <span className="arrow">→</span>
            </div>
            <div className="job-item">
              <span>Mern Stack Developer Intern</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>

        {/* Application Timer */}
        <div className="timer-section">
          <h2 className="section-heading">Application Ends in :</h2>
          <div className="countdown-timer">
            <div className="timer-box">
              <span className="timer-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className="timer-label">Mins</span>
            </div>
            <div className="timer-box">
              <span className="timer-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className="timer-label">Secs</span>
            </div>
          </div>

          <p className="timer-description">
            We're selecting a small, passionate team of interns for the next phase of our product and brand rollouts. 
            Once filled, applications will close.
          </p>

          <p className="encouragement">
            If you're ready to grow, contribute, and actually do the work, don't wait
          </p>

          <button className="apply-button" onClick={() => {
            trackApplication();
            if (typeof gtag !== 'undefined') {
              gtag('event', 'application_submit', {
                event_category: 'engagement',
                event_label: 'internship_application',
                value: 1,
                custom_parameter: 'apply_button_click'
              });
            }
            // Open the Google Forms application link
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSdVFBvwD1zwuHox7PnaMjvf1Fgl1NJ34hZywC3sRgHeqSZBYA/viewform?usp=sf_link', '_blank');
          }}>
            Apply Now
            <span className="button-arrow">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HiringInternsPage;
