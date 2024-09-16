import React from 'react'
import "./blog.css"
import Post1 from "../../images/post1.png"



import Brand1 from "../../images/brand-1.png"
import Brand2 from "../../images/brand-2.png"
import Brand3 from "../../images/brand-3.png"
import Brand4 from "../../images/brand-4.png"
import Brand5 from "../../images/brand-5.png"


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper";

const Blog = () => {
  return (
    <>
        {/* <!-- Blog Section Starts --> */}
	<section className="latest-blog" id="blog">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					{/* <!-- Section title start --> */}
					<div className="section-title">
						<h2>Latest News</h2>
						<p>Latest Post - About Logo Create</p>
					</div>
					{/* <!-- Section title end --> */}
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-4">
					{/* <!-- Blog Single Start --> */}
					<div className="blog-single wow fadeInUp" data-wow-delay="0.3s">
						<div className="blog-header">
							<figure>
								<img src={Post1} alt="" />
							</figure>
							
							<div className="blog-header-overlay">
								<a href="/#"><i className="fa fa-link"></i></a>
							</div>
						</div>
						
						<div className="blog-body">
							<h2>How To Create Logo</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volup cumque voluptati, inventore nobis.</p>
						</div>
						
						<div className="blog-footer">
							<ul>
                                <li><i className="fa fa-calendar"></i>June 09, 2024</li>
                                <li><i className="fa fa-tag"></i>Technology</li>
                            </ul>
						</div>
					</div>
					{/* <!-- Blog Single End --> */}
				</div>
				
				<div className="col-md-4">
					{/* <!-- Blog Single Start --> */}
					<div className="blog-single wow fadeInUp" data-wow-delay="0.6s">
						<div className="blog-header">
							<figure>
								<img src={Post1} alt="" />
							</figure>
							
							<div className="blog-header-overlay">
								<a href="/#"><i className="fa fa-link"></i></a>
							</div>
						</div>
						
						<div className="blog-body">
							<h2>How To Create Logo</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volup cumque voluptati, inventore nobis.</p>
						</div>
						
						<div className="blog-footer">
							<ul>
                                <li><i className="fa fa-calendar"></i>June 09, 2024</li>
                                <li><i className="fa fa-tag"></i>Technology</li>
                            </ul>
						</div>
					</div>
					{/* <!-- Blog Single End --> */}
				</div>
				
				<div className="col-md-4">
					{/* <!-- Blog Single Start --> */}
					<div className="blog-single wow fadeInUp" data-wow-delay="0.9s">
						<div className="blog-header">
							<figure>
								<img src={Post1} alt="" />
							</figure>
							
							<div className="blog-header-overlay">
								<a href="/#"><i className="fa fa-link"></i></a>
							</div>
						</div>
						
						<div className="blog-body">
							<h2>How To Create Logo</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volup cumque voluptati, inventore nobis.</p>
						</div>
						
						<div className="blog-footer">
							<ul>
                                <li><i className="fa fa-calendar"></i>June 09, 2024</li>
                                <li><i className="fa fa-tag"></i>Technology</li>
                            </ul>
						</div>
					</div>
					{/* <!-- Blog Single End --> */}
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Blog Section Ends --> */}
	
	{/* <!-- Brand Section Starts --> */}
	<div className="brand-sponser">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
				


						<Swiper
							
							 style={{
								textDecoration: "none",
								
							 
							   
        }}
		slidesPerView={3}
		spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true
        }}
		
      
       
        modules={[Autoplay]}
        className="mySwiper"
      >

<div className="swiper-container brand-slider">
						<div className="swiper-wrapper">

		<SwiperSlide>
{/* <!-- Brand slide start --> */}
<div className="swiper-slide">
								<div className="brand-slide">
									<img src={Brand1} alt="" />
								</div>
							</div>
							{/* <!-- Brand slide end --> */}
		</SwiperSlide>

		<SwiperSlide>
		{/* <!-- Brand slide start --> */}
							<div className="swiper-slide">
								<div className="brand-slide">
									<img src={Brand2} alt="" />
								</div>
							</div>
							{/* <!-- Brand slide end --> */}
							</SwiperSlide>

							<SwiperSlide>
{/* <!-- Brand slide start --> */}
<div className="swiper-slide">
								<div className="brand-slide">
									<img src={Brand3} alt="" />
								</div>
							</div>
							{/* <!-- Brand slide end --> */}

							</SwiperSlide>
							<SwiperSlide>
{/* <!-- Brand slide start --> */}
<div className="swiper-slide">
								<div className="brand-slide">
									<img src={Brand4} alt="" />
								</div>
							</div>
							{/* <!-- Brand slide end --> */}
							</SwiperSlide>
							<SwiperSlide>
								{/* <!-- Brand slide start --> */}
							<div className="swiper-slide">
								<div className="brand-slide">
									<img src={Brand5} alt="" />
								</div>
							</div>
							{/* <!-- Brand slide end --> */}
							</SwiperSlide>
							<SwiperSlide>
{/* <!-- Brand slide start --> */}
<div className="swiper-slide">
								<div className="brand-slide">
									<img src={Brand1} alt="" />
								</div>
							</div>
							{/* <!-- Brand slide end --> */}
							</SwiperSlide>
							</div>
					</div>
							
	  </Swiper>
							
							
							
							
							
							
							
							
							
							
							
						
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Brand Section Ends --> */}
    </>
  )
}

export default Blog
