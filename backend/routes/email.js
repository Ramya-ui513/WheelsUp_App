import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/send-invoice', async (req, res) => {
  const { username, subject, html } = req.body;

  console.log("Email Request Body:", req.body); 

  if (!username || !subject || !html) {
    return res.status(400).json({ message: 'Missing email parameters' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: username,
      subject,
      html
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Email send failed' });
  }
});

export default router;
