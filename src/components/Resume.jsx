import React, { useEffect, useRef } from "react";
import htmlSertificate from '../assets/images/HTML_certificate.jpg';
import cssSertificate from '../assets/images/CSS_certificate.jpg';
import responsiveDesign from '../assets/images/Responsive-Web-Design_certificate.jpg'

const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];
  const progressRef = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already run

  useEffect(() => {
    const progressSection = progressRef.current;
    const items = progressSection.querySelectorAll(".progress-item");
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        items.forEach((item, index) => {
          let num = parseInt(item.dataset.num);
          let count = 0;
          let color = colors[index % colors.length];
          let interval = setInterval(() => {
            if (count === num) {
              clearInterval(interval);
            } else {
              count++;
              item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
              item.setAttribute("data-value", `${count}%`);
              item.innerHTML = `${count}%`;
            }
          }, 15);
        });
        observer.unobserve(progressSection);
        hasAnimated.current = true; // Mark that the animation has run
      }
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);

    return () => observer.disconnect();
  }, [colors]);

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Bachelor's degree</p>
                <p className="cursus university">
                  Samarkand Institute of Economics and Service / 2017 - 2021
                </p>
                <p className="cursus">
                  I was admitted to this university in 2017. During my studies, I gained extensive knowledge and practical skills in the fields of tourism,
                  finance and economics. During this period, I thoroughly studied the theoretical foundations of these fields, as well as mastered their practical application.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Frontend Bootcamp Course</p>
                <p className="cursus university">
                  PDP Academy / 2021 - 2022
                </p>
                <p className="cursus">
                  I studied at PDP Academy's Foundation Course from August 1, 2021. After successfully completing the Foundation course,
                  I continued studying at the Frontend Bootcamp course. During this 7-month training period,
                  I thoroughly mastered languages ​​and technologies such as HTML, CSS, Bootstrap, JavaScript, React and Redux.
                  During these courses, I gained not only theoretical knowledge, but also practical skills.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">

            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Frontend developer</p>
                <p className="cursus university">Online Service Group / 01.01.2024 - Current</p>
                <p className="cursus">
                  Currently, I am working as a frontend developer at Online Service Group. Here,
                  I am involved in creating user interfaces using modern technologies and advanced approaches.
                  My responsibilities include implementing UI/UX designs for projects, optimizing code, and ensuring functionality. Additionally,
                  I actively participate in team projects, collaborating with other developers and designers to further strengthen my skills.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Frontend developer</p>
                <p className="cursus university">Algorithm Counsulting Group / 01.11.2022 - 29.11.2023</p>
                <p className="cursus">
                  Worked as a frontend developer at a company specializing in ERP (Enterprise Resource Planning) projects.
                  These systems help businesses streamline and automate their operations, enhancing efficiency and effectiveness. Over the course of a year,
                  I utilized technologies such as HTML5, Bootstrap4, CSS, JavaScript, jQuery, and Chart.js to successfully complete three large-scale projects from start to finish.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Junior frontend developer</p>
                <p className="cursus university">UIC Group / 15.05.2022 - 10.10.2022</p>
                <p className="cursus">
                  Worked at UIC Group for over 5 months, where I gained valuable experience and learned many new skills. I was part of a collaborative and supportive team,
                  surrounded by open-minded, communicative, and friendly developers. This environment fostered both my professional growth and my ability to work effectively within a team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      <section className="coding-skill-section" style={{ display: 'none' }}>
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div id="progress" ref={progressRef}>
          <div data-num="100" className="progress-item fade_up">
            sd
          </div>
          <div data-num="92" className="progress-item fade_up">
            sd
          </div>
          <div data-num="85" className="progress-item fade_up">
            sd
          </div>
          <div data-num="70" className="progress-item fade_up">
            sd
          </div>
          <div data-num="76" className="progress-item fade_up">
            ds
          </div>
          <div data-num="83" className="progress-item fade_up">
            ds
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
      
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
      <section className="awards-section overflow-hidden">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Awards.
          </h2>
          <div className="line"></div>
        </div>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={htmlSertificate}
                        alt="winner-award4"
                      />
                      {/* <p className="award-yer"></p> */}
                    </div>
                    <p className="award-interior">SOLOLEARN HTML5 course - 2021</p>
                    {/* <p className="award-winner-text"></p> */}
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Completed the SOLOLEARN HTML5 course in 2021, gaining proficiency in HTML5 syntax, semantic elements, multimedia integration, and forms through practical exercises and projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={cssSertificate}
                        alt="winner-award2"
                      />
                      {/* <p className="award-yer"></p> */}
                    </div>
                    <p className="award-interior">SOLOLEARN CCS course - 2021</p>
                    {/* <p className="award-winner-text"></p> */}
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Completed the SOLOLEARN CSS course in 2021, mastering CSS syntax, styling techniques, responsive design, and layout principles through hands-on projects and exercises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={responsiveDesign}
                        alt="winner-award3"
                      />
                      {/* <p className="award-yer"></p> */}
                    </div>
                    <p className="award-interior"> SOLOLEARN Resposive Webdesign - 2021</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Completed the SOLOLEARN Responsive Web Design course in 2021,
                      focusing on creating adaptable and user-friendly web layouts using responsive design techniques, media queries, and flexible grid systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
