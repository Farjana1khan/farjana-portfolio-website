import React from "react";
import "./about.css";
import about from "../../images/about1.png";
const About = () => {
  return (
    // <!-- About us Section Starts -->
    <section className="about-us" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Section title start --> */}
            <div className="section-title">
              <h2>About Me</h2>
              <p>Professional Profile - There Is All About Me</p>
            </div>
            {/* <!-- Section title end --> */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            {/* <!-- About image start --> */}
            <div className="about-image wow fadeInLeft" data-wow-delay="0.3s">
              <img src={about} alt="" />
            </div>
            {/* <!-- About image end --> */}
          </div>

          <div className="col-lg-8">
            {/* <!-- About Content start --> */}
            <div className="about-content wow fadeInUp" data-wow-delay="0.8s">
              <h3>I'm Farjana Fatehmohd</h3>
              <p>
                I am Frontend Developer (React JS, Next JS), and building
                projects that help humanity around the world, and solutions that
                make businesses and organizations operate smoothly.
              </p>

              <p>
                I can comfortably work on frontend jobs using web development
                tools. In addition to that, I use ReactJS, javaScript Html/Css,
                Bootstrap and to create frontend for backend NodeJs and mongoDB
                databases to Full Stack web applications I have ability to
                create or work on these technologies.
              </p>

              <ul>
                <li>
                  <i className="fi fi-rs-calendar"></i>
                  <b>Date of birth:</b> 02 September 1996
                </li>
                <li>
                  <i className="fi fi-rs-flag"></i>
                  <b>Nationality:</b> Indian
                </li>
                <li>
                  <i className="fi fi-rs-globe"></i>
                  <b>Freelance:</b> Available
                </li>
                <li>
                  <i className="fi fi-rs-phone-call"></i>
                  <b>Phone:</b> <a href="tel:+917021170769" style={{color:"#707070" , textDecoration:"underline"}}>+91 70211xxxxx</a>
                </li>
                <li>
                  <i className="fi fi-rs-marker"></i>
                  <b>Address:</b> Gurgaon, Haryana
                </li>
                <li>
                  <i className="fi fi-rs-envelope"></i>
                  <b>Email:</b>{" "}
                  <a href="mailto:farjana09khan@gmail.com" style={{color:"#707070", textDecoration:"underline"}}>
                  xyz@gmail.com
                  </a>
                </li>

                <li>
                  <i className="fa fa-language"></i>
                  <b>Spoken Langages:</b> English - Hindi - Urdu
                </li>
                <li>
                  <i className="fa fa-skype"></i>
                  <b>Skype:</b> Farjana Khan
                </li>
              </ul>
            </div>
            {/* <!-- About Content End --> */}
          </div>
        </div>
      </div>
    </section>
    // <!-- About us Section Ends -->
  );
};

export default About;
