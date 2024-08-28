import React, { useState, useEffect } from "react";
import ContentImg from "../assets/images/content-img2.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupOpen = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const handlePopupClose = (e) => {
    e.preventDefault();
    setIsPopupVisible(false);
  };
  const [isModalOpenSound, setIsModalOpenSound] = useState(false);

  const handleOpenModalSound = () => {
    setIsModalOpenSound(true);
  };

  const handleCloseModalSound = () => {
    setIsModalOpenSound(false);
  };


  return (
    <>
      {/* <!-- ====================================== Section Portfolio ===================================== --> */}
      <section className="portfolio-section" id="portfolio">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Portfolio.
          </h2>
          <div className="line"></div>
        </div>
        <div className="portfolios-group-main"  style={{ border: '1px solid green' }}>
          <div style={{ border: '1px solid red' }}>
            <div className="portfolio__item">
              <div
                className="image-container popup-btn zoom_in"
              >
                <img src={ContentImg} alt="content-img" />
                <div className="overlay">
                  <a className="overlay-text" href="#">
                    Corporate Branding
                  </a>
                </div>
              </div>
              <p className="Corporate zoom_in">Corporate Branding</p>
              <p className="Corporate-sub zoom_in">Content</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default Portfolio;
