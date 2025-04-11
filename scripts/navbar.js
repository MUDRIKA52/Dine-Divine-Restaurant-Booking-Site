// Select hamburger and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event to toggle the dropdown menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggles the 'active' class to show/hide dropdown
});

document.addEventListener("DOMContentLoaded", function () {
  const loginDropdown = document.querySelector(".dropdown");
  loginDropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("active");
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function () {
    loginDropdown.classList.remove("active");
  });
});
