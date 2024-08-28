import React, { useEffect,  useState } from "react";
import ProfileImg from "../assets/images/avatar.png";
import EmailSvg from "../assets/images/svg/email-svg.svg";
import  telegram from '../assets/images/telegram.svg';
import linkedin from '../assets/images/linkedin-svgrepo-com.svg'
import github from '../assets/images/github-icon.svg'
import HomeSvg from "../assets/images/svg/home-svg.svg";
import AboutSvg from "../assets/images/svg/about-svg.svg";
import ResumeSvg from "../assets/images/svg/resume-svg.svg";
import PortfolioSvg from "../assets/images/svg/portfolio-svg.svg";
import ContactSvg from "../assets/images/svg/contact-svg.svg";
import JessicaMainImg from "../assets/images/jessica-main-img.png";
import CircularImg from "../assets/images/circular-img.png";
import FlowerImg from "../assets/images/flower.png";
import reactIcon from '../assets/images/react.svg';
import reduxIcon from '../assets/images/redux.svg';
import htmlIcon from '../assets/images/html.svg';
import cssIcon from '../assets/images/css.svg';
import sassIcon from '../assets/images/sass.svg';
import tailwindIcon from '../assets/images/tailwind.svg';
import bootstrap from '../assets/images/bootstrap.svg'
import jsIcon from '../assets/images/js.svg';
import vueIcon from '../assets/images/vue.svg';
import githubIcon from '../assets/images/github.svg'
import storybook from '../assets/images/storybook.svg';
import gsap from '../assets/images/gsap.svg';
import pinia from '../assets/images/pinia.svg'
import AboutSection from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
// import Pricing from "./Pricing";
// import Blog from "./Blog";
import Contact from "./Contact";
import $ from "jquery";
import CV from "../assets/pdf/olivia_resume.pdf";
import { Link } from "react-router-dom";
const Home = () => {
  //Text
  const firstTexts = ["Developer", "Developer", "Freelancer"];
  const secondTexts = [
    "Freelancer",
    "Back-End Web Developer",
    "Full Stack Developer",
  ];
  // const intervalTime = 600;

  const [firstTextIndex, setFirstTextIndex] = useState(0);
  const [secondTextIndex, setSecondTextIndex] = useState(0);

 

  // Logo marquee
  useEffect(() => {
    document.querySelectorAll(".logos").forEach(function (logosContainer) {
      const copy = logosContainer.querySelector(".logos-slide").cloneNode(true);
      logosContainer.appendChild(copy);
    });
  }, []);

  // Toggle Btn
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const menuItems = document.querySelectorAll(".menu-list-main li");

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
      menuToggle.classList.toggle("open");
      sideMenu.classList.toggle("show");
    };

    const handleMenuItemClick = (event) => {
      event.preventDefault();
      const linkElement = event.currentTarget.querySelector("a");
      if (linkElement) {
        const targetId = linkElement.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
        menuToggle.classList.remove("open");
        sideMenu.classList.remove("show");
      }
    };

    if (menuToggle && sideMenu && menuItems.length > 0) {
      menuToggle.addEventListener("click", handleMenuToggle);
      menuItems.forEach((item) => {
        item.addEventListener("click", handleMenuItemClick);
      });

      $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
      });

      return () => {
        menuToggle.removeEventListener("click", handleMenuToggle);
        menuItems.forEach((item) => {
          item.removeEventListener("click", handleMenuItemClick);
        });
      };
    }
  }, [menuOpen]);

  const [activeLink, setActiveLink] = useState("");

  const handleClick = (event, id) => {
    event.preventDefault();
    setActiveLink(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <button id="menu-toggle" className="menu-toggle-button">
        <span className="hamburger" id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
      </button>
      {/* <!-- ====================================== Side Menu ===================================== --> */}
      <div className="side-menu">
        <div className="profile-img-main">
          <div className="profile-img-main__wrapper">
            <img className="zoom_in" src={ProfileImg} alt="profile-img" />
          </div>
          <h1 className="fade_up">
            Xorozov <span>Shahzod</span>
          </h1>
          <h2 className="designer fade_up">{firstTexts[firstTextIndex]}</h2>
          <div className="profile-media-icons-main fade_up">
            <a href="mailto:hello@biogi.com"  target="_blank" className="profile-media-icons">
              <img src={EmailSvg} alt="email-svg" />
            </a>
            <a href="https://t.me/xorozov_shahzod" target="_blank" className="profile-media-icons">
              <img src={telegram} alt="behance-svg" />
            </a>
            <a href="https://www.linkedin.com/in/shahzodjon-xo-rozov-b266b2217/" target="_blank" className="profile-media-icons">
              <img src={linkedin} alt="drribale-svg" />
            </a>
            <a href="https://github.com/Shohzodjon" target="_blank" className="profile-media-icons">
              <img src={github} alt="medium-svg" />
            </a>
          </div>
        </div>
        <div className="menu-list-main">
          <ul>
            <li
              className={`active-menu-action ${activeLink === "home" ? "active" : ""
                }`}
            >
              <a
                className="fade_right"
                href="#home"
                onClick={(e) => handleClick(e, "home")}
              >
                <img src={HomeSvg} alt="home-svg" />
                Home
              </a>
            </li>
            <li
              className={`active-menu-action ${activeLink === "about" ? "active" : ""
                }`}
            >
              <a
                className="fade_right"
                href="#about"
                onClick={(e) => handleClick(e, "about")}
              >
                <img src={AboutSvg} alt="home-svg" />
                About
              </a>
            </li>
            <li
              className={`active-menu-action ${activeLink === "resume" ? "active" : ""
                }`}
            >
              <a
                className="fade_right"
                href="#resume"
                onClick={(e) => handleClick(e, "resume")}
              >
                <img src={ResumeSvg} alt="home-svg" />
                Resume
              </a>
            </li>
        
            <li
              className={`active-menu-action ${activeLink === "portfolio" ? "active" : ""
                }`}
            >
              <a
                className="fade_right"
                href="#portfolio"
                onClick={(e) => handleClick(e, "portfolio")}
              >
                <img src={PortfolioSvg} alt="home-svg" />
                Portfolio
              </a>
            </li>
        
            <li
              className={`active-menu-action ${activeLink === "contact" ? "active" : ""
                }`}
              id="contact-line"
            >
              <a
                className="fade_right"
                href="#contact"
                onClick={(e) => handleClick(e, "contact")}
              >
                <img src={ContactSvg} alt="home-svg" />
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div id="wrap">
            <Link
              to={CV}
              rel="noreferrer"
              target="_blank"
              className="btn-slide"
            >
              <span className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="download-svg"
                    d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="title">Download CV</span>
              <span className="title-hover">Click Here</span>
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- ====================================== Side Menu End ===================================== --> */}
      <div className="main-containe" data-bs-spy="scroll">
        {/* <!-- ====================================== Section One ===================================== --> */}
        <section className="section-one overflow-hidden" id="home">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <h2 className="jessica-main-text zoom_in">
                Xorozov <span>Shahzod</span>
              </h2>
              <h3 className="back-End-dev designer2">
                {secondTexts[secondTextIndex]}
              </h3>
              <p className="best fade_down">
                We appreciate your trust greatly our clients choose us & our
                products because they know we are the best.
              </p>
              <div className="section-one-btns-main fade_down">
                <div className="wrapper">
                  <Link className="btn-hover" to="#">
                    View Work
                  </Link>
                </div>
                <div className="wrapper">
                  <Link className="btn-hover btn-hover2" to="#">
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 position-relative">
              <img className="flower" src={FlowerImg} alt="flower" />
              <img
                className="circular-img"
                src={CircularImg}
                alt="circular-img"
              />
              <img
                className="jessica-main-img zoom_in"
                src={JessicaMainImg}
                alt="jessica-main-img"
              />
            </div>
          </div>
        </section>
        {/* <!-- ====================================== Section Marquee ===================================== --> */}
        <section className="Marquee-main overflow-hidden">
          <h3 className="fade_up">Trusted by World Leading Brands</h3>
          <div className="logos logos2">
            <div className="logos-slide">
              <div className="marquee__content">
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={htmlIcon}
                    alt="brand-logo1"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={cssIcon}
                    alt="brand-logo2"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={sassIcon}
                    alt="brand-logo3"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={tailwindIcon}
                    alt="brand-logo3"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={bootstrap}
                    alt="brand-logo3"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={jsIcon}
                    alt="brand-logo4"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={reactIcon}
                    alt="brand-logo5"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={reduxIcon}
                    alt="brand-logo6"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={vueIcon}
                    alt="brand-logo7"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={pinia}
                    alt="brand-logo7"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={storybook}
                    alt="brand-logo8"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={githubIcon}
                    alt="brand-logo9"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={gsap}
                    alt="brand-logo9"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====================================== Section Marquee End ===================================== --> */}
        {/* <!-- ====================================== Section About ===================================== --> */}
        <AboutSection />
        {/* <!-- ====================================== Section About End ===================================== --> */}
        {/* <!-- ====================================== Section Education Experience ===================================== --> */}
        <Resume />
        {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
        {/* <!-- ====================================== Section Services ===================================== --> */}
        {/* <Services /> */}
        {/* <!-- ====================================== Section Services ===================================== --> */}
        {/* <!-- ====================================== Section Portfolio ===================================== --> */}
        <Portfolio />
        {/* <!-- ====================================== Section Portfolio ===================================== --> */}
        {/* <!-- ====================================== Section Pricing ===================================== --> */}
        {/* <Pricing /> */}
        {/* <!-- ====================================== Section Pricing ===================================== --> */}
        {/* <!-- ====================================== Section Blogs ===================================== --> */}
        {/* <Blog /> */}
        {/* <!-- ====================================== Section Blogs ===================================== --> */}
        {/* <!-- ====================================== Section Contact ===================================== --> */}
        <Contact />
        {/* <!-- ====================================== Section Contact ===================================== --> */}
      </div>
    </>
  );
};
export default Home;
