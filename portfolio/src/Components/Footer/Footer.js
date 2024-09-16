import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
   <>
    {/* <!-- Footer Section starts --> */}
	<footer className="main-footer">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					{/* <!-- Footer Logo start --> */}
					<div className="footer-logo">
						<h1><span>Farjana</span> Developer</h1>
					</div>
					{/* <!-- Footer Logo end --> */}
					
					{/* <!-- Footer About start --> */}
					<div className="footer-about">
						<p>FarjanaDev is a my personal website I developed it for my resume purpose. If you have need to any static and dynamic website or projects related  of any queries you should contact me.</p>
					</div>
					{/* <!-- Footer About end --> */}
					
					{/* <!-- Footer Social Link start --> */}
					<div className="footer-social">
						<a href="tel:7021170769" target="__blank"><i className="fa fa-phone"></i></a>
						{/* <a href="/#" target="__blank"><i className="fa fa-twitter"></i></a> */}
						<a href="https://www.linkedin.com/in/farjana-fatehmohd-17a8441a0/" target="__blank"><i className="fa fa-linkedin"></i></a>
						<a  href="mailto:farjana09khan@gmail.com" target="__blank"><i className="fa fa-envelope"></i></a>
						<a href="https://github.com/Farjana1khan"  target="__blank"><i className="fa fa-github"></i></a>
					</div>
					{/* <!-- Footer Social Link end --> */}
					
					{/* <!-- Footer Copyright start --> */}
					<div className="footer-copyright" style={{marginBottom: "50px"}}>
						<p>Copyright &copy; 2024. All rights reserved. Design By <a href="/#" target="_blank"  rel="noreferrer">Farjana Developer </a></p>
					</div>
					{/* <!-- Footer Copyright end --> */}
				</div>
			</div>
		</div>
	</footer>
	{/* <!-- Footer Section Ends --> */}
   </>
  )
}

export default Footer