const express = require("express")
const app = express()
require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")


const creds = require('./credential.json')




app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())


const path = require('path');
const router = express.Router()

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com", 
//       port: 587,
//       secure: false,
//     service: 'Gmail',
//     auth: {
//       user: creds.auth.user,
//       pass: creds.auth.pass 
//     },
//   });
  



//   app.post('/mail', (req, res, next) => {
    
//     var name = req.body.name
//     var email = req.body.email
//     var message = req.body.message
//     var subject = req.body.subject
   
    
//     const mailOptions = {
//         from :  name,
//         to : email,
//         subject: subject,
//         html: `${name} from ${name} <noreply@${name}.com> <br /><br /> ${message}`
//     }


//        transporter.sendMail(mailOptions, (err, data) => {
//         if(err){
//             res.json({
//                 status:"err"
//             }) 
//             console.log(err)
//             }
//             else {
//                 res.json({
//                     status: "success"
//          })
//          console.log("Email Sent" + data.response)
//         }
//     })


//   })


app.post('/mail', (req, res)=>{
    let data = req.body
   
    let smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com", 
          port: 587,
          secure: false,
        service: 'Gmail',
        auth: {
          user: creds.auth.user,
          pass: creds.auth.pass 
        },
      });

          const mailOptions = {
        from :  data.email,
        to : 'farjana09khan@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        <h3>Informations</h3>
        <ul>
        <li></li>
        </ul>
        `
        
    }



})




  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages!");
    }
  });










app.post("/send_mail", cors(), async (req, res) => {
	let { text } = req.body
	const transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		}
	})

	await transport.sendMail({
		from: process.env.MAIL_FROM,
		to: "test@test.com",
		subject: "test email",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>
    
        <p>All the best, Darwin</p>
         </div>
    `
	})
})

app.listen(
	(process.env.PORT || 4000,
	() => {
		console.log("Server is listening on port 4000")
	})
)