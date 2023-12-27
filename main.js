// Import OpenAI API
const openai = require('openai');

// Initialize OpenAI API with key
openai.apiKey = 'YOUR_OPENAI_API_KEY';

// Function to initialize chatbot
function initChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.innerHTML = '<p>Hi, I am EduWiz AI. How can I assist you today?</p>';
}

// Function to load testimonials
function loadTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    testimonialsContainer.innerHTML = '<p>Loading testimonials...</p>';

    // Fetch testimonials from server (placeholder URL)
    fetch('https://your-server.com/api/testimonials')
        .then(response => response.json())
        .then(data => {
            let testimonialsHTML = '';
            data.forEach(testimonial => {
                testimonialsHTML += `
                    <div class="testimonial">
                        <h3>${testimonial.title}</h3>
                        <p>${testimonial.content}</p>
                        <p><strong>- ${testimonial.author}</strong></p>
                    </div>
                `;
            });
            testimonialsContainer.innerHTML = testimonialsHTML;
        })
        .catch(error => {
            console.error('Error:', error);
            testimonialsContainer.innerHTML = '<p>Sorry, there was an error loading the testimonials.</p>';
        });
}

// Function to request a demo
function requestDemo() {
    // Redirect to demo request page
    window.location.href = 'demo.html';
}

// Event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    initChatbot();
    loadTestimonials();
});
</p></p>