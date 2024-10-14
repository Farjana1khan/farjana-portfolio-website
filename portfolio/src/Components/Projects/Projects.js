import React, { useState } from "react";
import "./projects.css";
import Image1 from "../../images/glmpay (3) (2).jpg";
import Image3 from "../../images/coffee.png";
import Image2 from "../../images/music.jpg";
import Image4 from "../../images/movie.jpg";
import Fiverr from "../../images/fiverr.png";
import Image7 from "../../images/desklib";
import Image8 from "../../images/ecommerce.jpg";
import CondidateJob from "../../images/jobappli.jpg";
import weather from "../../images/weather.jpg";
import ShoppingList from "../../images/shoppinglist.jpg";
import Team1 from "../../images/team-1.jpg";
import Team2 from "../../images/team-2.jpg";
import Team3 from "../../images/team-3.jpg";
import Team4 from "../../images/team-4.jpg";
import OzAssignment from "../../images/Ozassignemnt.jpg"
import DPSSchool from "../../images/DPS.jpg"
import Portfolio from "../../images/Portfoloio.jpg"
import Astral from "../../images/astral.png"
import CRUD from "../../images/CRUD.png"
import RESTAPI from "../../images/RESTAPI.png"
import Stackkaroo from "../../images/stackkaroo.png"
import window from "../../images/window11.png"
import BlogsApplication  from "../../images/blogsApp.jpg"
import Webapp  from "../../images/webapp.jpg"
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [visibleProjects, setVisibleProjects] = useState(12); // Initially show 12


  const projects = [
    {
      src: OzAssignment,
      title: "OZ Assignment",
      category: "reactjs",
      desc: "Welcome to OZ Assignments",
      link: "https://www.ozassignments.com/"
    },
   
    {
      src: Image7,
      title: "Desklib App",
      category: "nextjs",
      desc: "",
      link: "https://desklib.com/"
    },
  
    {
        src: Image1,
        title: "GLMpay",
        category: "reactjs",
        desc: "International Fund Transfer.. Utility Bill Payments & Recharges",
        link: "https://glmpay-website.netlify.app/"
      },
      {
        src: DPSSchool,
        title: "DPS",
        category: "reactjs",
        desc: "Delhi Public School Yamuna Nagar, under the aegis of Delhi Public School Society",
        link: "  https://dps-website-assignment-task.vercel.app/"
      },
    {
      src: Image8,
      title: "E-commerce ",
      desc: "In that project created Admin, users, product list, order, shipping, payment and checkout",
      category: "mern",
      link: "https://e-commerce-mern-app.netlify.app/"
    },
    {
        src: Portfolio,
        title: "Old Portfolio",
        category: "reactjs",
        desc: "I have displayed about my self in that resume",
        link: "https://farjana-portfolio-website.netlify.app/"
      },
  
      {
        src: BlogsApplication,
        title: "Blogs Application",
        category: "reactjs",
        desc: " blog platform where users can create, edit, and delete blog posts.Includes Firebase authentication for secure login and signup.",
        link: "https://blogs-post-application.netlify.app/"
      },
    {
      src: Fiverr,
      title: "Fiverr Website",
      category: "reactjs",
      link: "https://fiverrapp.netlify.app/"
    },
    {
        src: Astral,
        title: "Astral Website",
        category: "nextjs",
        link: "https://astral-assignment.vercel.app/"
      },
 
  
{
      src: ShoppingList,
      title: "Shopping List",
      category: "reactjs",
      link: "  https://shoppinglistproject-farjana1khan.vercel.app/"
    },

    {
      src: weather,
      title: "Weather App",
      category: "reactjs",
      desc: "  build weather dashboard using react js and weather api",
      link: "https://waether-site.netlify.app/"
    },
    {
      src: Image2,
      title: "Music App",
      category: "javascript",
      link: "https://musics-app-player.vercel.app/",
      desc: "  This project is Music App player used different song, author,title and audio."
    },
    {
      src: Image3,
      title: "Coffee",
      category: "html/css",
      link: "https://coffeelanding-page-design.netlify.app/",
      desc: " landing Page"
    },

    {
      src: CondidateJob,
      title: "Condidate Job Application",
      category: "reactjs",
      desc: "I have accepted new challenges and created weekday candidate job application",
      link: "https://candidate-job-application.netlify.app/"
    },
    {
      src: Image4,
      title: "Movie App",
      category: "javascript",
      desc: "  This project is Music App player used different song",
      link: "https://github.com/Farjana1khan/movie-list-app"
    },
    {
      src: Webapp,
      title: "Login & Products CRUD",
      category: "reactjs",
      desc: "To create Product App React that includes login, registration with dummy product json API",
      link: "https://react-product-crud.vercel.app/"
    },
    {
        src: CRUD,
        title: "CRUD Operation",
        category: "nodejs",
        desc: "",
        link: " https://github.com/Farjana1khan/Simple-CRUD-Form"
      },
      {
        src: RESTAPI,
        title: "RESTFULL API",
        category: "nodejs",
        desc: "",
        link: "https://github.com/Farjana1khan/RESTFULLAPI-NODEJS_MONGODB"
      },
      {
        src: Stackkaroo,
        title: "Stackkaroo",
        category: "nextjs",
        desc: "Stackkaroo can help you in creating a measurable impact on your target customers. ",
        link: " https://stackkaroo-assignment-flame.vercel.app/"
      },
     
      {
        src: window,
        title: "Window 11",
        category: "javascript",
        desc: "Window 11",
        link: " https://win11-desktop.vercel.app/"
      },
      {
        src: Webapp,
        title: "WebApp Products",
        category: "reactjs",
        desc: "To create a simple web application using React that includes login, registration, and product display features",
        link: "https://webapp-product-list-app.netlify.app/"
      },
     
      
  ];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setVisibleProjects(12); // Reset the visible projects when the filter changes
  };


  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };
  return (
    <>
      {/* //    <!-- Portfolio Section Starts --> */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Projects</h2>
                <p>See My Works - All Projects</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="filter-container portfolio-nav">
                <ul className="list-inline filter">
                  <li className="active-portfolio">
                    <button
                      className={`filter-button ${
                        activeFilter === "*" ? "active-portfolio" : ""
                      }`}
                      onClick={() => handleFilterChange("*")}
                    >
                      All
                    </button>
                  </li>
                  <li>
                    <button
                      className={`filter-button ${
                        activeFilter === "reactjs" ? "active-portfolio" : ""
                      }`}
                      onClick={() => handleFilterChange("reactjs")}
                    >
                      ReactJS
                    </button>
                  </li>
                  <li>
                    <button
                      className={`filter-button ${
                        activeFilter === "nextjs" ? "active-portfolio" : ""
                      }`}
                      onClick={() => handleFilterChange("nextjs")}
                    >
                      Next JS
                    </button>
                  </li>
                  <li>
                    <button
                      className={`filter-button ${
                        activeFilter === "javascript" ? "active-portfolio" : ""
                      }`}
                      onClick={() => handleFilterChange("javascript")}
                    >
                      JavaScript
                    </button>
                  </li>
                  <li>
                    <button
                      className={`filter-button ${
                        activeFilter === "html/css" ? "active-portfolio" : ""
                      }`}
                      onClick={() => handleFilterChange("html/css")}
                    >
                      HTML/CSS
                    </button>
                  </li>
                  <li>
                    <button
                      className={`filter-button ${
                        activeFilter === "mern" ? "active-portfolio" : ""
                      }`}
                      onClick={() => handleFilterChange("mern")}
                    >
                      MERN
                    </button>
                  </li>
                  <li>
                    <button
                      className={`filter-button ${
                        activeFilter === "nodejs" ? "active-portfolio" : ""
                      }`}
                      onClick={() => handleFilterChange("nodejs")}
                    >
                      Node JS
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row portfolio-boxes">
            {projects
              .filter(
                (project) =>
                  activeFilter === "*" || project.category === activeFilter
              ).slice(0, visibleProjects)
              .map((project, index) => (
                <div
                  key={index}
                  className={`col-md-3 col-sm-6 col-xs-12 portfolio-box ${project.category}`}
                >
                  <div className="single-portfolio">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="has-popup"
                    >
                      <img
                      width={1000}
                      height={180}
                        src={project.src}
                        className="Portfolio Image"
                        alt={project.title}
                      />
                      <div className="single-portfolio-overlay">
                        <h2 className="text-danger">{project.title}</h2>
                        <h3 className="text-white ">{project.desc}</h3>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
          </div>

          {visibleProjects < projects.length && ( // Show Load More button only if there are more projects to show
        <div className="row">
          <div className="col-md-12">
            <div className="load-more-portfolio">
              <button onClick={handleLoadMore}>Load More Projects</button>
            </div>
          </div>
        </div>
      )}
        </div>
      </section>

      {/* <!-- Portfolio Section Ends --> */}

      {/* <!-- Our Team Section Starts --> */}
      <section className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- Section title start --> */}
              <div className="section-title">
                <h2>Team Member</h2>
                <p>Meet the team - Lorem ipsum dolor</p>
              </div>
              {/* <!-- Section title end --> */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* <!-- Team single start --> */}
              <div
                className="team-single wow fadeInUp"
                id="div1"
                data-wow-delay="0.3s"
              >
                <figure>
                  <img src={Team1} alt="" />
                </figure>

                <div className="team-info">
                  <h3>Farjana</h3>
                  <p>Frontend Developer</p>
                </div>
              </div>
              {/* <!-- Team single end --> */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* <!-- Team single start --> */}
              <div
                className="team-single wow fadeInUp"
                id="div2"
                data-wow-delay="0.6s"
              >
                <figure>
                  <img src={Team2} alt="" />
                </figure>

                <div className="team-info">
                  <h3>Farjana</h3>
                  <p>ReactJS Developer</p>
                </div>
              </div>
              {/* <!-- Team single end --> */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* <!-- Team single start --> */}
              <div
                className="team-single wow fadeInUp"
                id="div3"
                data-wow-delay="0.9s"
              >
                <figure>
                  <img src={Team3} alt="" />
                </figure>

                <div className="team-info">
                  <h3>Farjana</h3>
                  <p>Next JS Developer</p>
                </div>
              </div>
              {/* <!-- Team single end --> */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* <!-- Team single start --> */}
              <div
                className="team-single wow fadeInUp"
                id="div4"
                data-wow-delay="1.2s"
              >
                <figure>
                  <img src={Team4} alt="" />
                </figure>

                <div className="team-info">
                  <h3>Farjana</h3>
                  <p>MERN Stack Developer</p>
                </div>
              </div>
              {/* <!-- Team single end --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Team Section Ends --> */}
    </>
  );
};

export default Projects;
