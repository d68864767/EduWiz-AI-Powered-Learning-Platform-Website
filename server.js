// Import necessary modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Use cors and bodyParser middlewares
app.use(cors());
app.use(bodyParser.json());

// Import OpenAI API
const openai = require('openai');

// Initialize OpenAI API with key
openai.apiKey = 'YOUR_OPENAI_API_KEY';

// Placeholder data for testimonials
const testimonials = [
    {
        title: 'Testimonial 1',
        content: 'EduWiz has revolutionized our learning experience.',
        author: 'User 1'
    },
    {
        title: 'Testimonial 2',
        content: 'The AI-powered features of EduWiz are truly amazing.',
        author: 'User 2'
    },
    // Add more testimonials as needed
];

// Route to fetch testimonials
app.get('/api/testimonials', (req, res) => {
    res.json(testimonials);
});

// Route to handle demo requests
app.post('/api/request-demo', (req, res) => {
    // Handle demo request here
    // For now, just send a success response
    res.json({ message: 'Demo request received' });
});

// Route to handle sign-ups
app.post('/api/signup', (req, res) => {
    // Handle sign-up here
    // For now, just send a success response
    res.json({ message: 'Sign-up successful' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
