import React from 'react'
import "./portfolio.css"
import Image1 from "../../images/portfolio-1.jpg"
import Image2 from "../../images/portfolio-2.jpg"
import Image3 from "../../images/portfolio-3.jpg"
import Image4 from "../../images/portfolio-4.jpg"
import Image5 from "../../images/portfolio-5.jpg"
import Image6 from "../../images/portfolio-6.jpg"
import Image7 from "../../images/portfolio-7.jpg"
import Image8 from "../../images/portfolio-8.jpg"

import Team1 from "../../images/team-1.jpg"
import Team2 from "../../images/team-2.jpg"
import Team3 from "../../images/team-3.jpg"
import Team4 from "../../images/team-4.jpg"

const Portfolio = () => {
  return (
    <>
{/* //    <!-- Portfolio Section Starts --> */}
	<section className="portfolio" id="portfolio" 
    data-isotope={ {itemSelector: "grid-item", layoutMode: "fitRows" }}>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                {/* <!-- Section title start --> */}
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>See My Works - All Projects</p>
                </div>
                {/* <!-- Section title end --> */}
            </div>
        </div>
        
        <div className="row">
            <div className="col-md-12">
                {/* <!-- Portfolio Filter list start --> */}
                <div className="filter-container portfolio-nav">
                    <ul className="list-inline filter">
                        <li><a target="__blank" href="https://github.com/Farjana1khan" className="active-portfolio" data-filter="*">All </a></li>
                        <li><a target="__blank" href="https://github.com/Farjana1khan" data-filter=".designing">ReactJS</a></li>
                        <li><a target="__blank" href="https://github.com/Farjana1khan" data-filter=".designing">Next JS</a></li>
                        <li><a target="__blank" href="https://github.com/Farjana1khan" data-filter=".graphic">JavaScript</a></li>
                        <li><a target="__blank" href="https://github.com/Farjana1khan" data-filter=".websites">HTML/CSS</a></li>
                        <li><a target="__blank" href="https://github.com/Farjana1khan" data-filter=".websites">MERN</a></li>
                    </ul>
                </div>
                {/* <!-- Portfolio Filter list End --> */}
            </div>
        </div>
        
        <div className="row portfolio-boxes">
            {/* <!-- Single Portfolio starts --> */}
            <div className="col-md-3 col-sm-6 col-xs-12 portfolio-box designing">
                <div className="single-portfolio">
                    <a href="https://shoppinglistproject-farjana1khan.vercel.app/" target='_blank'   rel="noreferrer" className="has-popup">
                        <img src={Image1} className="Portfolio Image" alt="" />
                        <div className="single-portfolio-overlay">
                            <h2>Shopping List</h2>
                            <h3>Designing</h3>
                        </div>
                    </a>
                </div>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                        <div className="image">
                            <img src={Image1} className="Portfolio Image" alt="" />
                        </div>
                        <div className="desc">
                            <h4>Shopping List</h4>
                            <h5><i className="fa fa-folder"></i> Category</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <a href="https://github.com/Farjana1khan/ShoppingList-Project" className="btn-view-project">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Single Portfolio Ends --> */}
            
            {/* <!-- Single Portfolio starts --> */}
            <div className="col-md-3 col-sm-6 col-xs-12 portfolio-box designing">
                <div className="single-portfolio">
                    <a href="#popup-2" className="has-popup">
                        <img src={Image2} className="Portfolio Image" alt="" />
                        <div className="single-portfolio-overlay">
                            <h2>Music App</h2>
                            <h3>Designing</h3>
                        </div>
                    </a>
                </div>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                        <div className="image">
                            <img src={Image2} className="Portfolio Image"  alt="" />
                        </div>
                        <div className="desc">
                            <h4>Music App</h4>
                            <h5><i className="fa fa-folder"></i> Category</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <a href="https://build-by-farjana-movieapp.netlify.app/" className="btn-view-project">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Single Portfolio Ends --> */}
            
            {/* <!-- Single Portfolio starts --> */}
            <div className="col-md-3 col-sm-6 col-xs-12 portfolio-box websites">
                <div className="single-portfolio">
                    <a href="#popup-3" className="has-popup">
                        <img src={Image3} className="Portfolio Image" alt="" />
                        <div className="single-portfolio-overlay">
                            <h2>Coffee Landing Page</h2>
                            <h3>Designing</h3>
                        </div>
                    </a>
                </div>
                <div id="popup-3" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                        <div className="image">
                            <img src={Image3} className="Portfolio Image" alt="" />
                        </div>
                        <div className="desc">
                            <h4>Coffee Landing Page</h4>
                            <h5><i className="fa fa-folder"></i> Category</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <a href="https://coffeelanding-page-design.netlify.app/" className="btn-view-project">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Single Portfolio Ends --> */}
            
            {/* <!-- Single Portfolio starts --> */}
            <div className="col-md-3 col-sm-6 col-xs-12 portfolio-box graphic">
                <div className="single-portfolio">
                    <a href="#popup-4" className="has-popup">
                        <img src={Image4} className="Portfolio Image" alt="" />
                        <div className="single-portfolio-overlay">
                            <h2>Movie App</h2>
                            <h3>Designing</h3>
                        </div>
                    </a>
                </div>
                <div id="popup-4" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                        <div className="image">
                            <img src={Image4} className="Portfolio Image" alt="" />
                        </div>
                        <div className="desc">
                            <h4>Movie App</h4>
                            <h5><i className="fa fa-folder"></i> Category</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <a href="https://build-by-farjana-movieapp.netlify.app/" className="btn-view-project">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Single Portfolio Ends --> */}
            
            {/* <!-- Single Portfolio starts --> */}
            <div className="col-md-3 col-sm-6 col-xs-12 portfolio-box graphic">
                <div className="single-portfolio">
                    <a href="#popup-5" className="has-popup">
                        <img src={Image5} className="Portfolio Image" alt="" />
                        <div className="single-portfolio-overlay">
                            <h2>Project Title</h2>
                            <h3>Graphic</h3>
                        </div>
                    </a>
                </div>
                <div id="popup-5" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                        <div className="image">
                            <img src={Image5} alt="" />
                        </div>
                        <div className="desc">
                            <h4>Project Title</h4>
                            <h5><i className="fa fa-folder"></i> Category</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <a href="/#" className="btn-view-project">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Single Portfolio Ends --> */}
            
            {/* <!-- Single Portfolio starts --> */}
            <div className="col-md-3 col-sm-6 col-xs-12 portfolio-box designing">
                <div className="single-portfolio">
                    <a href="#popup-6" className="has-popup">
                        <img src={Image6} className="Portfolio Image" alt="" />
                        <div className="single-portfolio-overlay">
                            <h2>Project Title</h2>
                            <h3>Designing</h3>
                        </div>
                    </a>
                </div>
                <div id="popup-6" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                        <div className="image">
                            <img src={Image6} className="Portfolio Image" alt="" />
                        </div>
                        <div className="desc">
                            <h4>Project Title</h4>
                            <h5><i className="fa fa-folder"></i> Category</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <a href="/#" className="btn-view-project">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Single Portfolio Ends --> */}
            
            {/* <!-- Single Portfolio starts --> */}
            <div className="col-md-3 col-sm-6 col-xs-12 portfolio-box graphic">
                <div className="single-portfolio">
                    <a href="#popup-7" className="has-popup">
                        <img src={Image7} className="Portfolio Image" alt="" />
                        <div className="single-portfolio-overlay">
                            <h2>Project Title</h2>
                            <h3>Graphic</h3>
                        </div>
                    </a>
                </div>
                <div id="popup-7" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                        <div className="image">
                            <img src={Image7} className="Portfolio Image" alt="" />
                        </div>
                        <div className="desc">
                            <h4>Project Title</h4>
                            <h5><i className="fa fa-folder"></i> Category</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <a href="/#" className="btn-view-project">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Single Portfolio Ends --> */}
            
            {/* <!-- Single Portfolio starts --> */}
            <div className="col-md-3 col-sm-6 col-xs-12 portfolio-box websites">
                <div className="single-portfolio">
                    <a href="https://e-commerce-mern-app.netlify.app/" target='_blank'  rel="noreferrer"  className="has-popup">
                        <img src={Image8} className="Portfolio Image" alt="" />
                        <div className="single-portfolio-overlay">
                            <h2>E-commerce App</h2>
                            <h3>Websites</h3>
                        </div>
                    </a>
                </div>
                <div id="popup-8" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                        <div className="image">
                            <img src={Image8} className="Portfolio Image" alt="" />
                        </div>
                        <div className="desc">
                            <h4>E-commerce App</h4>
                            <h5><i className="fa fa-folder"></i> Category</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <a href="/https://e-commerce-mern-app.netlify.app/" className="btn-view-project">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Single Portfolio Ends --> */}
        </div>
        
        <div className="row">
            <div className="col-md-12">
                <div className="load-more-portfolio">
                    <a href="/#">Load More Portfolio</a>
                </div>
            </div>
        </div>
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
					<div className="team-single wow fadeInUp" id="div1" data-wow-delay="0.3s">
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
					<div className="team-single wow fadeInUp" id="div2" data-wow-delay="0.6s">
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
					<div className="team-single wow fadeInUp" id="div3" data-wow-delay="0.9s">
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
					<div className="team-single wow fadeInUp" id="div4" data-wow-delay="1.2s">
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
  )
}

export default Portfolio