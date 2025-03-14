import React from 'react';
import './ProjectGrid.css';
import landingPage1 from '../assets/img/landing_page_1.jpg';
import landingPage2 from '../assets/img/landing_page_2.jpg';
import landingPage3 from '../assets/img/landing_page_3.jpg';
import landingPage4 from '../assets/img/landing_page_4.jpg';
import landingPage5 from '../assets/img/landing_page_5.jpg';

const ProjectGrid: React.FC = () => {
  return (
    <section className="project-grid" id="projects">
      <div className="main-image">
        <img src={landingPage5} alt="Architecture project" />
      </div>
      <div className="project-images">
        <div className="project-image">
          <img src={landingPage2} alt="Architecture project" />
        </div>
        <div className="project-image">
          <img src={landingPage3} alt="Architecture project" />
        </div>
        <div className="project-image">
          <img src={landingPage4} alt="Architecture project" />
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid; 