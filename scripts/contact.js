// email.js

// Wait for the DOM to load before running any code
document.addEventListener("DOMContentLoaded", function () {
    // Reference to the contact form
    const form = document.querySelector(".contact-form");

    // Initialize EmailJS with your public key
    emailjs.init("ah5Tu868ASyjkZKe9"); // Replace with your actual Public Key

    // Add submit event listener to the form
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission (page reload)

        // Get values from form inputs
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        // Prepare the template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send("service_gyi42c3", "template_f3uy4v9", templateParams)
            .then(function (response) {
                alert("Message sent successfully!");
                form.reset(); // Clear the form
            }, function (error) {
                console.error("Email sending failed:", error);
                alert("Failed to send message. Please try again later.");
            });
    });
});
