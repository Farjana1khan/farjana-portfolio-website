import React, { useState } from 'react'
import "./contact.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Contact = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);
    
  

//     const sendEmail = async(e)=>{

// if(name && email && subject !== "" && message !== ""){
//     e.preventDefault();
//     return toast.error('Please fill all details');


//     setLoading(true);
//     const data = {
//         name,
//         email,
//         subject,
//         message,
//     }
//      await axios.post(`/mail`, {
      
//       headers: {
//         'Content-type': 'application/json'
//       }
//     }).then((res)=>{
//         setLoading(false);
//         toast.success(data.message);
//     }).catch((err)=>{
//     setLoading(false);
//     toast.error(
//       err.response && err.response.data.message
//         ? err.response.data.message
//         : err.message
//     )
// })
// }
// else{
//     toast.success(data.message);
// }
    

   

const sendEmail = async(e)=>{
    if(name && email && subject !== ""){
        if( message !== ""){
            e.preventDefault();
            setLoading(true)

            const data = {
                name, email, subject, message
            }

           await axios.post('/mail', data, {
            headers: {
                'Content-type': 'application/json'
              }
           }).then((res)=>{
            setLoading(false);
                   //toast.success(data.message);
           }).catch((err)=>{
            setLoading(false);
                toast.error(
                  err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
                )
           })
        }
        else{
            toast.success('Compose Email');
        }
    }
    else{
        toast.error('Please fill all details');
    }
}


   
  return (
    <>
    {/* // <!-- Contact us Section Starts --> */}
	<section className="contactus" id="contact">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                {/* <!-- Section title start --> */}
                <div className="section-title">
                    <h2>Get in touch</h2>
                    <p>Feel free to drop me a line - Contact us</p>
                </div>
                {/* <!-- Section title end --> */}
            </div>
        </div>
        
        <div className="row">
            <div className="col-md-8 offset-md-2">
                {/* <!-- Contact Form start --> */}
                <ToastContainer position="bottom-center" limit={1} />
                <div className="contact-form">
                    <form id="contactForm" action="#" method="post"  onSubmit={sendEmail}>
                        <div className="row">
                            <div className="form-group col-md-6 col-sm-6">
                                <input type="text"
                                 className="form-control"
                                 id = "name"
                value = {name}
                                 onChange={(e)=>setName(e.target.value)}
                                 placeholder="Your Name" />
                            </div>
                            
                            <div className="form-group col-md-6 col-sm-6">
                                <input type="email"
                                 className="form-control" 
                                 id = "email"
                value = {email}
                                 onChange={(e)=>setEmail(e.target.value)}
                                placeholder="Your Email Address" />
                            </div>
                            
                            <div className="form-group col-md-12 col-sm-12">
                                <input type="text"
                                 className="form-control"
                                 id = "subject"
                value = {subject}
                                 onChange={(e)=>setSubject(e.target.value)}
                                 placeholder="Subject" />
                            </div>
                            
                            <div className="form-group col-md-12 col-sm-12">
                                <textarea rows="4" 
                                className="form-control" 
                                id = "message"
              value = {message}
                                onChange={(e)=>setMessage(e.target.value)}
                                placeholder="How can i help you?"></textarea>
                            </div>
                            
                            <div className="col-md-12 col-sm-12 text-center">
                                <button type="submit" 
                              disabled={loading}
// onClick={sendEmail}
onSubmit={sendEmail}
                                className="btn-contact">
                                  {loading ? 'Sending...' : 'Contact Now'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- Contact Form end --> */}
            </div>
        </div>
    </div>
</section>
{/* <!-- Contact us Section Ends --> */}

{/* <!-- Contact Information Section Starts --> */}
<div className="contact-information">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                {/* <!-- Contact info single start --> */}
                <div className="contact-info-single wow fadeInUp" id="div1" >
                    <h3>Address</h3>
                    <p>
  <a href="https://www.google.com/maps/search/?api=1&query=Gurgaon+Haryana+India" style={{color:"#707070"}} target="_blank" rel="noopener noreferrer">
    Gurgaon, Haryana, India
  </a>
</p>
                </div>
                {/* <!-- Contact info single end --> */}
            </div>
            
            <div className="col-lg-4">
                {/* <!-- Contact info single start --> */}
                <div className="contact-info-single wow fadeInUp" id="div2">
                    <h3>Phone No.</h3>
                   <p> <a href="tel:+917021170769" style={{color:"#707070"}}>+91 702117xxxx</a>
</p>
                </div>
                {/* <!-- Contact info single end --> */}
            </div>
            
            <div className="col-lg-4">
                {/* <!-- Contact info single start --> */}
                <div className="contact-info-single wow fadeInUp" id="div3">
                    <h3>Email</h3>
                    <p>
  <a href="mailto:farjana09khan@gmail.com" style={{color:"#707070"}}>xyz@gmail.com</a>
</p>
                </div>
                {/* <!-- Contact info single end --> */}
            </div>
        </div>
    </div>
</div>
{/* <!-- Contact Information Section Ends --> */}</>
  )
}

export default Contact
