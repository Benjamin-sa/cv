require('dotenv').config();
const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

// Setup SendGrid
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const TO_EMAIL = process.env.TO_EMAIL;

if (!SENDGRID_API_KEY || !TO_EMAIL) {
  console.error('Missing required environment variables:');
  console.error('SENDGRID_API_KEY:', !!SENDGRID_API_KEY);
  console.error('TO_EMAIL:', !!TO_EMAIL);
}

sgMail.setApiKey(SENDGRID_API_KEY);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!TO_EMAIL) {
      throw new Error('TO_EMAIL environment variable is not set');
    }

    const msg = {
      to: TO_EMAIL,
      from: TO_EMAIL, // Moet geverifieerd zijn in SendGrid
      subject: `Nieuw contactformulier bericht van ${name}`,
      text: `
        Naam: ${name}
        Email: ${email}
        Bericht: ${message}
      `,
      html: `
        <h3>Nieuw Contact Formulier Bericht</h3>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong> ${message}</p>
      `
    };

    await sgMail.send(msg);
    res.status(200).json({ message: 'Email succesvol verzonden!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Er is een fout opgetreden bij het verzenden van de email.' });
  }
});

// Always return the main index.html for other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log('Server running on port:', port);
});
