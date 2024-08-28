import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div> 
        <p className="section-sub-text about-sub-text zoom_in">
          Let me introduce myself, my name is <span>Xorozov Shahzod </span>
           and an experienced Frontend Software Engineer with a solid background in the computer software industry.
          I have a proven track record of developing and maintaining high-quality web applications. My skills include proficiency in JavaScript,
          as well as expertise in modern frameworks such as React and Vue. I am passionate about creating intuitive and efficient user interfaces and continually improving my technical abilities
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Shahzod</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">Uzbekistan</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <a
            className="about-detail-info email"
            href="tel:+998933369404"
          >
            +998(93) 336 94 04
          </a>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <a
            className="about-detail-info email"
            href="mailto:xorozovshohzod@gmail.com"
          >
            xorozovshohzod@gmail.com
          </a>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">2+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
    
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info"> English</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
