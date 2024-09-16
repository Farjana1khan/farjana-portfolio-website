import React, {useState} from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper";

import "./pricing.css"

import Author1 from "../../images/author-1.jpg"
import Author2 from "../../images/author-2.jpg"
import Author3 from "../../images/author-3.jpg"


//import emailjs from '@emailjs/browser';

const Pricing = () => {
	const [ sent, setSent ] = useState(false)
	const [ text, setText ] = useState("")
	//const form = useRef();

	const sendEmail = async (e) => {
		e.preventDefault();
		setSent(true)
		try {
			await axios.post("http://localhost:4000/send_mail", {
				text
			})
		} catch (error) {
			console.error(error)
		}
	}
		

  return (
   <>
  
	
	{/* <!-- Pricing Section Starts --> */}
	<section className="pricing" id="pricing">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					{/* <!-- Section title start --> */}
					<div className="section-title">
						<h2>Our Pricing</h2>
						<p>Our Reasonable prices - Optional</p>
					</div>
					{/* <!-- Section title end --> */}
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-4">
					{/* <!-- Pricing single start --> */}
					<div className="pricing-single wow fadeInUp" data-wow-delay="0.3s">
						<div className="pricing-header">
							<div className="icon-box">
								<i className="flaticon-settings"></i>
							</div>
							<h3>Basic</h3>
							<p>$29 <span>/month</span></p>
						</div>
						
						<div className="pricing-body">
							<ul>
								<li>Designing a small brand</li>
								<li>Redesign the company logo</li>
								<li>New visual design of the website</li>
								<li>Deploying a website</li>
								<li>Studio and product photography</li>
								<li>Professional project support</li>
								<li>Support and care</li>
							</ul>
						</div>
						
						<div className="pricing-footer">
							<a href="/#" className="btn-buynow">Get Started</a>
						</div>
					</div>
					{/* <!-- Pricing single end --> */}
				</div>
				
				<div className="col-md-4">
					{/* <!-- Pricing single start --> */}
					<div className="pricing-single wow fadeInUp" data-wow-delay="0.6s">
						<div className="pricing-header">
							<span className="recommanded">Featured</span>
							<div className="icon-box">
								<i className="flaticon-award"></i>
							</div>
							<h3>Standard</h3>
							<p>$39 <span>/month</span></p>
						</div>
						
						<div className="pricing-body">
							<ul>
								<li>Designing a small brand</li>
								<li>Redesign the company logo</li>
								<li>New visual design of the website</li>
								<li>Deploying a website</li>
								<li>Studio and product photography</li>
								<li>Professional project support</li>
								<li>Support and care</li>
							</ul>
						</div>
						
						<div className="pricing-footer">
							<a href="/#" className="btn-buynow">Get Started</a>
						</div>
					</div>
					{/* <!-- Pricing single end --> */}
				</div>
				
				<div className="col-md-4">
					{/* <!-- Pricing single start --> */}
					<div className="pricing-single wow fadeInUp" data-wow-delay="0.9s">
						<div className="pricing-header">
							<div className="icon-box">
								<i className="flaticon-trophy"></i>
							</div>
							<h3>Silver</h3>
							<p>$49 <span>/month</span></p>
						</div>
						
						<div className="pricing-body">
							<ul>
								<li>Designing a small brand</li>
								<li>Redesign the company logo</li>
								<li>New visual design of the website</li>
								<li>Deploying a website</li>
								<li>Studio and product photography</li>
								<li>Professional project support</li>
								<li>Support and care</li>
							</ul>
						</div>
						
						<div className="pricing-footer">
							<a href="/#" className="btn-buynow">Get Started</a>
						</div>
					</div>
					{/* <!-- Pricing single end --> */}
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Pricing Section Ends --> */}
	
	{/* <!-- Testimonial Section stars --> */}
	<section className="testimonials">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					{/* <!-- Section title start --> */}
					<div className="section-title">
						<h2>Testimonials</h2>
						<p>Happy Clients Says - Optional</p>
					</div>
					{/* <!-- Section title end --> */}
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-8 offset-md-2">	

					
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
	  <div className="swiper-container testimonial-slider">
						<div className="swiper-wrapper">
							{/* <!-- Testimonial Slide start --> */}
	  <SwiperSlide>
	  
	  <div className="swiper-slide">
								<div className="testimonial-single">
									<div className="testimonial-header">
										<figure>
											<img src={Author1} alt="" />
										</figure>
										
										<h3>Farjana</h3>
										<h4>Frontend Developer</h4>
									</div>
									
									<p>I am Frontend Developer (React JS), and building projects that help
                        humanity around the world, and solutions that make businesses and organizations operate
                        smoothly.</p>
                    
                    
								</div>
							</div>
							{/* <!-- Testimonial Slide end --> */}
	  </SwiperSlide>
	  <SwiperSlide>
		
							{/* <!-- Testimonial Slide start --> */}
							<div className="swiper-slide">
								<div className="testimonial-single">
									<div className="testimonial-header">
										<figure>
											<img src={Author2} alt="" />
										</figure>
										
										<h3>Farjana</h3>
										<h4> ReactJS Developer</h4>
									</div>
									
									<p>I am Frontend Developer (React JS), and building projects that help
                        humanity around the world, and solutions that make businesses and organizations operate
                        smoothly.</p>
                    
                    
								</div>
							</div>
							{/* <!-- Testimonial Slide end --> */}
							
	  </SwiperSlide>
	  <SwiperSlide>
		
		{/* <!-- Testimonial Slide start --> */}
		<div className="swiper-slide">
			<div className="testimonial-single">
				<div className="testimonial-header">
					<figure>
						<img src={Author2} alt="" />
					</figure>
					
					<h3>Farjana</h3>
					<h4> Next JS Developer</h4>
				</div>
				
				<p>I am Frontend Developer (Next JS), and building projects that help
	humanity around the world, and solutions that make businesses and organizations operate
	smoothly.</p>


			</div>
		</div>
		{/* <!-- Testimonial Slide end --> */}
		
</SwiperSlide>
	  <SwiperSlide>
		{/* <!-- Testimonial Slide start --> */}
		<div className="swiper-slide">
								<div className="testimonial-single">
									<div className="testimonial-header">
										<figure>
											<img src={Author3} alt="" />
										</figure>
										
										<h3>Farjana</h3>
										<h4>MERN Stack Developer</h4>
									</div>
                    
                    <p>I can comfortably work on MERN Stack Developer jobs using web development tools. In addition to that, I use ReactJS, javaScript
                        Html/Css, Bootstrap and  to create frontend for backend NodeJs and mongoDB databases to Full Stack web applications I have ability to create or work on these technologies.</p>
                    
								</div>
							</div>
							{/* <!-- Testimonial Slide end --> */}
							<div className="testimonial-pagination">
							
							</div>
	  </SwiperSlide>
	  
</div>
				</div>
	  </Swiper>
							
							
							
						</div>
						
						
					
			</div>
		</div>
	</section>
	{/* <!-- Testimonial Section ends --> */}
	
	{/* <!-- Newsletter Section Starts --> */}
	<div className="newsletter">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="newsletter-content">
						<h3> Stay Update with Us </h3>
						<p>Join us to get the latest new updates.</p>
					</div>
					
					{/* <!-- Newsletter Form start --> */}
					<div className="newsletter-form wow fadeInUp">
						{!sent ? (
							<form action="#" className="form-inline"  onSubmit={sendEmail}>
							<div className="form-group">
								<input type="text" className="form-control"
								value={text} onChange={(e) => setText(e.target.value)}
								 placeholder="Enter your email address" />
								<button type="submit" className="btn-subscribe"><i className="fa fa-paper-plane-o"></i></button>
							</div>
						</form>
						) :(
							<h1>Email Sent</h1>
						)}
                    </div>
					{/* <!-- Newsletter Form end --> */}
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Newsletter Section Ends --> */}
   </>
  )
}

export default Pricing
