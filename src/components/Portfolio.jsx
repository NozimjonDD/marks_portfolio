import React from "react";
import OneNet from '../assets/images/one-net.png';
import Parlament from '../assets/images/parlament.png';
import zty from '../assets/images/zty.jpg';
import uic from '../assets/images/uic.jpg';
import olimpic from '../assets/images/olimpic.png';
import cyber from '../assets/images/cyber.png'
const Portfolio = () => {

  const data = [
    {
      title: 'One net', url: 'https://one-net.uz/', img: OneNet
    },
    {
      title: 'Parliament', url: 'https://parliament.gov.uz/', img: Parlament
    },
    {
      title: 'ZTY charging', url: 'https://zty-charged.netlify.app/', img: zty
    },
    {
      title: 'UIC Group', url: 'https://uicgroup.us/', img: uic
    },
    {
      title: 'National Olympic Committee of Uzbekistan', url: 'https://web.olympic.uz/oz', img: olimpic
    },
    {
      title: 'CYBER PARK', url: 'https://cyberpark.uz/', img: cyber
    }

  ]


  return (
    <>
      <section className="portfolio-section" id="portfolio">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Portfolio.
          </h2>
          <div className="line"></div>
        </div>
        <div className="portfolios-group-main" >
          <div className="portfolio__grid">
            {
              data.map((item) => {
                return (
                  <div className="portfolio__item">
                    <div
                      className="image-container popup-btn zoom_in"
                    >
                      <img src={item.img} alt="content-img" />
                      <div className="overlay">
                        <a className="overlay-text" href={item.url} target="_blank"  rel="noreferrer">
                          {item.title}
                        </a>
                      </div>
                    </div>
                    <p className="Corporate zoom_in">{item.title}</p>
                    {/* <p className="Corporate-sub zoom_in">Content</p> */}
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

    </>
  );
};
export default Portfolio;
