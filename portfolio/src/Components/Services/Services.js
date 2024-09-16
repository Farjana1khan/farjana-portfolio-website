import React from 'react'
import "./services.css"
const Services = () => {
  return (
    // <!-- Services Section Starts -->
	<section className="services" id="services">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                {/* <!-- Section title start --> */}
                <div className="section-title">
                    <h2> My Services</h2>
                    <p>Who are extremely love with eco system</p>
                </div>
                {/* <!-- Section title end --> */}
            </div>
        </div>
        
        <div className="row">
            <div className="col-md-4">
                {/* <!-- Service Single Start --> */}
                <div className="service-single wow fadeInUp" data-wow-delay="0.3s">
                    <div className="icon-box">
                        <i className="fi fi-rs-laptop code"></i>
                    </div>
                    
                    <h3>Frontend Developer</h3>
                    <p>I can comfortably work on frontend jobs using web development tools. </p>
                </div>
                {/* <!-- Service Single End --> */}
            </div>
            
            <div className="col-md-4">
                {/* <!-- Service Single Start --> */}
                <div className="service-single wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box">
                        <i className="fi fi-rr-rectangle-code"></i>
                    </div>
                    
                    <h3>ReactJS Developer</h3>
                    <p>I am ReactJS Developer and building projects that help
                        humanity around the world.</p>
                </div>
                {/* <!-- Service Single End --> */}
            </div>
            
            <div className="col-md-4">
                {/* <!-- Service Single Start --> */}
                <div className="service-single wow fadeInUp" data-wow-delay="0.9s">
                    <div className="icon-box">
                        <i className="fi fi-rs-computer"></i>
                    </div>
                    
                    <h3>Next JS Developer</h3>
                    <p>I am Next JS Developer and individual building projects that help
                        humanity around the world.</p>
                </div>
                {/* <!-- Service Single End --> */}
            </div>
            
            <div className="col-md-4">
                {/* <!-- Service Single Start --> */}
                <div className="service-single wow fadeInUp" data-wow-delay="1.2s">
                    <div className="icon-box">
                        <i className="fi fi-rs-globe"></i>
                    </div>
                    
                    <h3>MERN FullStack Developer</h3>
                    <p>I am a FullStack MERN Developer. I can design to any website by using MERN Skills</p>
                </div>
                {/* <!-- Service Single End --> */}
            </div>
            
            <div className="col-md-4">
                {/* <!-- Service Single Start --> */}
                <div className="service-single wow fadeInUp" data-wow-delay="1.5s">
                    <div className="icon-box">
                        <i className="fi fi-rr-edit-alt"></i>
                    </div>
                    
                    <h3>Creative Design</h3>
                    <p>We are also a designer, we can design a picture or logo</p>
                </div>
                {/* <!-- Service Single End --> */}
            </div>
            
            <div className="col-md-4">
                {/* <!-- Service Single Start --> */}
                <div className="service-single wow fadeInUp" data-wow-delay="1.8s">
                    <div className="icon-box">
                        <i className="fi fi-rs-life-ring"></i>
                    </div>
                    
                    <h3>24 X 7 Support</h3>
                    <p>I can support and available for any time you can ask any queries anytime </p>
                </div>
                {/* <!-- Service Single End --> */}
            </div>
        </div>
    </div>
</section>
// <!-- Services Section Ends -->
  )
}

export default Services
