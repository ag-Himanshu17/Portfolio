
document.getElementById('contact-form').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent form from submitting the traditional way
var service_id = 'service_hvb4fnv';
var template_id = 'template_9qwb7qs';
// Send form data using EmailJS
emailjs.sendForm('service_hvb4fnv', 'template_9qwb7qs', this)
    .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    document.querySelector('.output_message').innerHTML = "Message sent successfully!";
    document.querySelector('.output_message').style.color = "green";
    }, function(error) {
    console.log('FAILED...', error);
    document.querySelector('.output_message').innerHTML = "Failed to send the message. Please try again.";
    document.querySelector('.output_message').style.color = "red";
    });

// Optionally, clear the form
this.reset();
});
