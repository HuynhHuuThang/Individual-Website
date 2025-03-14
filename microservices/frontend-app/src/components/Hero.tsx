import React, { useState } from 'react';
import './Hero.css';

interface TitleCardData {
  id: number;
  heading: string;
  text: string;
}

const Hero: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  
  const titleCards: TitleCardData[] = [
    {
      id: 1,
      heading: "Title 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget."
    },
    {
      id: 2,
      heading: "Title 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam."
    },
    {
      id: 3,
      heading: "Title 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget."
    },
    {
      id: 4,
      heading: "Title 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  const handleExploreClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const openModal = (id: number) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };
  
  const shouldShowReadMore = (text: string) => {
    return text.length > 100;
  };
  
  const truncateText = (text: string) => {
    // The actual truncation is handled by CSS with -webkit-line-clamp
    // This function is kept for potential future modifications
    return text;
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Find the project you love</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Faucibus in libero risus semper habitant arcu eget. Et integer
          facilisi eget diam.Lorem ipsum dolor sit ame,consectetur
        </p>
        <button className="explore-button" onClick={handleExploreClick}>Explore</button>
      </div>
      <div className="title-container">
        <div className="title-cards">
          {titleCards.map((card) => (
            <div className="title-card" key={card.id}>
              <h3 className="title-card-heading">{card.heading}</h3>
              <p className="title-card-text">{truncateText(card.text)}</p>
              {shouldShowReadMore(card.text) && (
                <span 
                  className="read-more-link" 
                  onClick={() => openModal(card.id)}
                >
                  Read more
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for displaying full text */}
      <div className={`modal-overlay ${activeModal !== null ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>×</button>
          {activeModal !== null && (
            <>
              <h2 className="modal-title">
                {titleCards.find(card => card.id === activeModal)?.heading}
              </h2>
              <p className="modal-text">
                {titleCards.find(card => card.id === activeModal)?.text}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero; 