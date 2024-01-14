// Require and configure dotenv
require('dotenv').config();


const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});



router.post("/website-preview", async (req, res) => {
  const { websiteUrl } = req.body;
  const screenshotOneAccessKey = process.env.ACCESS_KEY; 

  try {
    const response = await axios.get(`https://api.screenshotone.com/take?url=${encodeURIComponent(websiteUrl)}&access_key=${screenshotOneAccessKey}`, {
      responseType: 'arraybuffer', // Set the response type to binary data
    });

    // Set the appropriate Content-Type based on the response headers
    const contentType = response.headers['content-type'];
    res.set('Content-Type', contentType);

    // Send the binary data directly to the client
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching website preview:", error);

    if (error.response) {
      // The request was made and the server responded with a status code
      res.status(error.response.status).send(error.response.data);
    } else {
      // Something went wrong in making the request
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

module.exports = router;

