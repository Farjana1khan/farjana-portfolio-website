import React from "react";
import "./home.css";
import about1 from "../../images/about1.png";
const Home = () => {
  return (
    // <!-- Banner Slider Section starts -->
    <div className="banner" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* <!-- Banner Content Start --> */}
            <div className="banner-content">
              <h2 className="cd-headline clip">
                <span className="before-heading">Hi There! I'm </span>
                <span className="cd-words-wrapper">
                  <b className="is-visible">Frontend Developer</b>
                  <b>MERN Stack Developer</b>
                </span>
              </h2>
             <div  className="col-md-12 col-lg-9 p-0">
             <p  className="col-md-12 p-0">
                I am a Frontend Developer with 2 years of experience in
                technologies such as React JS, Next JS, JavaScript, HTML, CSS,
                Tailwind CSS, Bootstrap, Material UI, and Formik. I have a
                passion for building projects that help humanity and create
                solutions that enable businesses and organizations to operate
                smoothly. I am proficient in frontend development using various
                web development tools and technologies. Additionally, I can
                create and work on Full Stack web applications, utilizing
                frontend technologies like React JS, Next JS, JavaScript,
                HTML/CSS, and Bootstrap, alongside backend technologies such as
                Node.js and MongoDB.
                <br/>
                {/* <a
                  href="https://drive.google.com/file/d/1137-SVcOayhQ06omwSL40SQ5plvW0rw9/view?usp=sharing"
                  className="btn-download mt-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a> */}
              </p>
             </div>
            </div>

            {/* <!-- Banner Content End --> */}
          </div>
          <div className="col-lg-4">
            {/* <!-- About image start --> */}
            <div className="about-image wow fadeInUp" data-wow-delay="0.3s">
              <img src={about1} alt={`Baz taking a ${about1}`} />
            </div>
            {/* <!-- About image end --> */}
          </div>
        </div>
      </div>
    </div>
    // <!-- Banner Slider Section ends -->
  );
};

export default Home;
