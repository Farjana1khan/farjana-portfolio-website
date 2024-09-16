import React from 'react'
import "./resume.css"

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper";




const Resume = () => {

    
  return (
//    <!-- My Resume Section Starts -->
	<section className="my-resume" id="resume">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                {/* <!-- Section title start --> */}
                <div className="section-title">
                    <h2>My Resume</h2>
                    <p>There Is All About Me</p>
                </div>
                {/* <!-- Section title end --> */}
            </div>
        </div>
        
        <div className="row mb-5 pb-5">
            <div className="col-md-6">
                <div className="experience">
                    <h3 className="sub-title"><i className="fa fa-briefcase"></i> Experience</h3>
                    <Swiper
							 pagination={true}
							 style={{
								textDecoration: "none",
								
							   "--swiper-pagination-color": "#ff5d56",
							   
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false
        }}
		
      
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
{/* <!-- Experience Slider Start --> */}
<div className="swiper-container experience-slider">
                        <div className="swiper-wrapper">
                        <SwiperSlide>
                             {/* <!-- Experience Slide start --> */}
                             <div className="swiper-slide">
                                <div className="experience-single">
                                    <h5>March-2023 - April-2024</h5>
                                    <h4>Frontend Developer - Zucol Group</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>

                          
                            {/* <!-- Experience Slide end --> */}
                           </SwiperSlide>
                           <SwiperSlide>
                             {/* <!-- Experience Slide start --> */}
                             <div className="swiper-slide">
                                <div className="experience-single">
                                    <h5>Feb-2022 - March-2023</h5>
                                    <h4>Frontend Developer - CYBERMOKSH Technology</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>

                          
                            {/* <!-- Experience Slide end --> */}
                           </SwiperSlide>
                            
                           <SwiperSlide>
                             {/* <!-- Experience Slide start --> */}
                             <div className="swiper-slide">
                                <div className="experience-single">
                                    <h5>Mar-2021 - Sep-2021</h5>
                                    <h4>ReactJS Developer - WebSoft IT Solutions</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>
                            {/* <!-- Experience Slide end --> */}
                             {/* <!-- Experience Pagination Start --> */}
       <div className="experience-pagination"></div>
                        {/* <!-- Experience Pagination Start --> */}
                           </SwiperSlide>
                            
                            {/* <!-- Experience Slide start --> */}
                            
                        </div>
                        
                       
                    </div>
                    {/* <!-- Experience Slider Start --> */}

      </Swiper>
      
                    
                </div>
            </div>





            
            <div className="col-md-6">
                <div className="education">
                    <h3 className="sub-title"><i className="fa fa-graduation-cap"></i> Education</h3>
                    <Swiper
							 pagination={true}
							 style={{
								textDecoration: "none",
								
							   "--swiper-pagination-color": "#ff5d56",
							   
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false
        }}
		
      
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* <!-- Education Slider Start --> */}
        <div className="swiper-container education-slider">
                        <div className="swiper-wrapper">
                        <SwiperSlide>
  {/* <!-- Experience Slide start --> */}
  <div className="swiper-slide">
                                <div className="experience-single">
                                    <h5>2018 - 2021</h5>
                                    <h4>MCA - Pune University</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>
                            {/* <!-- Experience Slide end --> */}
                        </SwiperSlide>
                          
                           <SwiperSlide>
                             {/* <!-- Experience Slide start --> */}
                             <div className="swiper-slide">
                                <div className="experience-single">
                                    <h5>2014 - 2017</h5>
                                    <h4>BCA - Pune University</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>
                            {/* <!-- Experience Slide end --> */}
                           
                           </SwiperSlide> 
                           {/* <SwiperSlide>
                           
                             <div className="swiper-slide">
                                <div className="experience-single">
                                    <h5>2012 - 2014</h5>
                                    <h4>12th - CBSE</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>
                          
                           
                           </SwiperSlide> 
                           <SwiperSlide>
                           
                             <div className="swiper-slide">
                                <div className="experience-single">
                                    <h5>2011 - 2012</h5>
                                    <h4>10th - Haryana Board</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                </div>
                            </div>
                           
                           
                          
                        <div className="education-pagination"></div>
                       
                           </SwiperSlide>  */}
                        </div>
                    
                        
                    </div>
                    {/* <!-- Education Slider End --> */}
      </Swiper>
                    
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="col-md-6">
                <div className="skill">
                    <h3 className="sub-title"><i className="fa fa-star-o"></i>My Skills</h3>
                    
                    {/* <!-- Skill Content Start --> */}
                    <div className="skill-content">
                        <div className="row">
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>React JS</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                           
                         <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>Next JS</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                            
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>JavaScript</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                            
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>HTML5/CSS3</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>Tailwind CSS</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                            
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>Bootstrap</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>Formik</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>Material UI</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                            
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>NodeJS</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>ExpressJS</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                            
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>MongoDB</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                            <div className="col-md-6">
                                {/* <!-- Skill Single Start --> */}
                                <div className="skill-single">
                                    <h5>MySQL</h5>
                                    <div className="skill-ratting">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-half-o"></i>
                                    </div>
                                </div>
                                {/* <!-- Skill Single End --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Skill Content End --> */}
                </div>
            </div>
            
            <div className="col-md-6">
                <div className="counter-stats">
                    <h3 className="sub-title"><i className="fa fa-heart"></i>Fun Facts</h3>
                    <div className="counter-content">
                        <div className="row">
                            <div className="col-md-6">
                                {/* <!-- Counter Single Start --> */}
                                <div className="counter-single">
                                    <div className="icon-box">
                                        <i className="fi fi-rs-user"></i>
                                    </div>
                                    <h4 className="counter">1245</h4>
                                    <p>Happy Clients</p>
                                </div>
                                {/* <!-- Counter Single End --> */}
                            </div>
                            
                            <div className="col-md-6">
                                {/* <!-- Counter Single Start --> */}
                                <div className="counter-single">
                                    <div className="icon-box">
                                        <i className="fi fi-rs-trophy"></i>
                                    </div>
                                    <h4 className="counter">1245</h4>
                                    <p>Awards Achieved</p>
                                </div>
                                {/* <!-- Counter Single End --> */}
                            </div>
                            
                            <div className="col-md-6">
                                {/* <!-- Counter Single Start --> */}
                                <div className="counter-single">
                                    <div className="icon-box">
                                        <i className="fi fi-rs-badge"></i>
                                    </div>
                                    <h4 className="counter">1245</h4>
                                    <p>Projects Done</p>
                                </div>
                                {/* <!-- Counter Single End --> */}
                            </div>
                            
                            <div className="col-md-6">
                                {/* <!-- Counter Single Start --> */}
                                <div className="counter-single">
                                    <div className="icon-box">
                                        <i className="fi fi-rs-star"></i>
                                    </div>
                                    <h4 className="counter">1245</h4>
                                    <p>User Rattings</p>
                                </div>
                                {/* <!-- Counter Single End --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
// <!-- My Resume Section Ends -->
  )
}

export default Resume
