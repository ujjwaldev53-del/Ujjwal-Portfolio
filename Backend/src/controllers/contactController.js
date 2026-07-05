
const Nodemailer = require('nodemailer')
exports.sendContactEmail = async (req , res) => {

    try{
      const { name , email , message } = req.body
      console.log("📩 Form Data Received:", req.body)   
 if(!name || !email || !message ){
    return res.status(400).json({success : false , message : "something went wrong"})
 }
 const transporter = Nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
 const  mailOptions = {
    from: process.env.EMAIL_USER ,
    to: process.env.REAL_EMAIL_USER,
    subject: 'New message from ' + req.body.name,
    html: '<p>Name: ' + req.body.name + '</p><p>Email: ' + req.body.email + '</p><p>Message: ' + req.body.message + '</p>'
  }
  transporter.sendMail(mailOptions)
  .then(() => { res.json({ success: true }) })
  .catch((error) => { res.json({ success: false, error: error.message }) })
 
} catch(error){
    res.status(500).json({success : false , message : error.message})
}
}