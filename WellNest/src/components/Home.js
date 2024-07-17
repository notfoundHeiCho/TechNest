import React from 'react';
import { Nav } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import runbg from './images/runbg.png';
import herocircleone from './images/herocircleone.png';
import herocircletwo from './images/herocircletwo.png';
import heartrate from './images/heartrate.svg';
import calories from './images/calories.svg';
import aboutbanner from './images/aboutbanner.png';
import aboutcircleone from './images/aboutcircleone.png';
import aboutcircletwo from './images/aboutcircletwo.png';
import fitness from './images/fitness.png';
import footerclock from './images/footerclock.png'
import { IoPulseSharp, IoCloseSharp, IoChevronForwardSharp, IoMail, IoCall, IoLocation, IoLogoTwitter, IoLogoInstagram, IoLogoFacebook, IoCaretUpSharp } from 'react-icons/io5';
import './Style.css';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='html' >
      
      <Helmet className="head">
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Helmet>
      
    <div className='body' id='top'>
    <header style={{ background: "#212529" }}  className="header" data-header>        <div className="container" >
    <a href="/" className="logo">
          <IoPulseSharp aria-hidden="true" style={{color:"red"}} />
            <span className="span" style={{color:"red"}}>WellNest</span>
          </a>
         <nav className="navbar" data-navbar>
            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <IoCloseSharp aria-hidden="true" />
            </button>
            <ul  className="navbar-list">
              <li>
                <a href="#home" className="navbar-link active" data-nav-link>Home</a>
              </li>
              <li>
                <a href="#about" className="navbar-link" data-nav-link>About Us</a>
              </li>
            </ul>
          </nav>
          <Nav>
                <Button href="/Login" className='btn-secondary'>Login</Button>       
        </Nav>
         
          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
        </header>

      <main>
        <article>
          <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section style={{ backgroundImage: 'url(./images/herobg.png)' }}>
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">
                  <strong className="strong">The Best</strong> Web Tracker
                </p>
                <h1 className="h1 hero-title">Work Hard To Get Better Life</h1>
                <p className="section-text">
                  Taking care of your body is the greatest act of self-love. A healthy outside starts from the inside.
                </p>
                <a href="/login" className="btn btn-primary">Get Started</a>
              </div>
              <div className="hero-banner">
                <img src={runbg} width="1060" height="1153" alt="hero banner" className="w-100" style={{ marginLeft: '-90px', marginBottom: '-70px' }} />
                <img src={herocircleone} width="666" height="666" aria-hidden="true" alt="" className="circle circle-1" />
                <img src={herocircletwo} width="666" height="666" aria-hidden="true" alt="" className="circle circle-2" />
                <img src={heartrate} width="255" height="270" alt="heart rate" className="abs-img abs-img-1" />
                <img src={calories} width="348" height="224" alt="calories" className="abs-img abs-img-2" />
              </div>
            </div>
          </section>

          <section className="section about" id="about" aria-label="about">
            <div className="container">
              <div className="about-banner has-after">
                <img src={aboutbanner} width="660" height="648" loading="lazy" alt="about banner" className="w-100" />
                <img src={aboutcircleone} width="660" height="534" loading="lazy" aria-hidden="true" alt="" className="circle circle-1" />
                <img src={aboutcircletwo} width="660" height="534" loading="lazy" aria-hidden="true" alt="" className="circle circle-2" />
                <img src={fitness} width="650" height="154" loading="lazy" alt="fitness" className="abs-img w-100" />
              </div>
              <div className="about-content">
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">Welcome To Our Web WellNest</h2>
                <p className="section-text">
                  An app that helps users track their health and wellness habits, such as sleep, water intake, and meditation. Features might include reminders, progress tracking, and personalized tips.
                </p>
                <p className="section-text">
                  Users can rest assured that they are taking proactive steps towards a healthier lifestyle with the support of this comprehensive platform.
                </p>
              </div>
            </div>
          </section>

          <section className="section video" aria-label="video">
            <div className="container">
              <div className="video-card has-before has-bg-image">
                <iframe id="fitnessVideo" src="https://www.youtube.com/embed/UgkxXQtBzQ_7o4g-P4Z90PtZ3z0vj_dvsEIZ?autoplay=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="https://www.youtube.com/results?search_query=fitness+workout" className="btn-link has-before" target="_blank">Watch More</a>
              </div>
            </div>
          </section>

          <section className="section blog" id="blog" aria-label="blog"></section>
        </article>
      </main><br></br>

      <footer className="footer">
        <div className="section footer-top bg-dark has-bg-image" style={{ backgroundImage: 'url(./images/footer-bg.png)' }}>
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
              <IoPulseSharp aria-hidden="true" />
                <span className="span">WellNest</span>
              </a>
              <p className="footer-brand-text"></p>
              <div className="wrapper">
                <img src={footerclock} width="34" height="34" loading="lazy" alt="Clock" />
                <ul className="footer-brand-list">
                  <li>
                    <p className="footer-brand-title">Monday - Sunday</p>
                    <p>7:00Am - 00:00Pm</p>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Our Links</p>
              </li>
              <li>
                <a href="#" className="footer-link" hidden>Home</a>
              </li>
              <li>
                <a href="#" className="footer-link">Home</a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Contact Us</p>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <IoLocation name="location" aria-hidden="true"/>
                </div>
                <address className="address footer-link">Morocco</address>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <IoCall name="call" aria-hidden="true"/>
                </div>
                <div>
                  <a href="tel:+915552348765" className="footer-link">0610650441</a>
                </div>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <IoMail name="mail" aria-hidden="true"/>
                </div>
                <div>
                  <a href="mailto:TechNest@gmail.com" className="footer-link">TechNest@gmail.com</a>
                </div>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Our Newsletter</p>
              </li>
              <li>
                <form action="" className="footer-form">
                  <input type="email" name="email_address" aria-label="email" placeholder="Email Address" required className="input-field" />
                  <button type="submit" className="btn btn-primary" aria-label="Submit">
                  <IoChevronForwardSharp aria-hidden="true" />
                  </button>
                </form>
              </li>
              <li>
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoFacebook name="logo-facebook"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoInstagram name="logo-instagram"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoTwitter name="logo-twitter"/>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2024 WellNest. All Rights Reserved By <a href="https://notfoundheicho.github.io/TechNest/" className="copyright-link" target="_blank">TechNest</a>
            </p>
            <ul className="footer-bottom-list">
              <li>
                <a href="#" className="footer-bottom-link has-before">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="footer-bottom-link has-before">Terms & Condition</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <a href="#top" className={`back-top-btn ${isScrolled ? 'active' : ''}`} aria-label="back to top" onClick={scrollToTop}>
        <IoCaretUpSharp name="caret-up-sharp" aria-hidden="true"/>
      </a>

      <script src="./js/script.js" defer></script>
    </div>
    </div>
  );
};

export default Home;
