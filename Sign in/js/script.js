const form = document.getElementById("login-form");
const email_input = document.getElementById("email");
const red_alert = document.getElementById("alert-red");
const alert_green = document.getElementById("alert-green");

const error_message = document.getElementById("error_message");

const container = document.getElementById("container");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = email_input.value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
        red_alert.style.display= "flex";
        red_alert.style.backgroundColor= "green";
        error_message.textContent = "Logged in successfully!, congrats!"

    } else {
        red_alert.style.display= "flex";
        error_message.textContent = "Invalid credentials, check your email or password again."
        console.log("Email válido:", email);
    }
});
// Select the dropdown toggle element
const dropdownToggle = document.querySelector('.dropdown-toggle');

// Add click event listener to toggle dropdown menu visibility
dropdownToggle.addEventListener('click', (event) => {
    // Prevent default link behavior
    event.preventDefault();

    // Toggle 'active' class on the dropdown parent
    const dropdown = dropdownToggle.parentElement;
    dropdown.classList.toggle('active');
});
