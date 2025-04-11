// The text content for the headline
const headlineText = "Experience Fine Dining with Us!!";
const headlineElement = document.getElementById("hero-headline");

let index = 0;
let isTyping = true; // Track whether the text is currently being typed

function typeHeadline() {
  if (isTyping) {
    // If still typing, add the next character
    if (index < headlineText.length) {
      headlineElement.textContent += headlineText.charAt(index);
      index++;
      setTimeout(typeHeadline, 250); // Adjust typing speed (100ms per letter)
    } else {
      // Once the text is fully typed, start erasing after a short delay
      setTimeout(() => {
        isTyping = false; // Stop typing
        eraseHeadline(); // Start erasing
      }, 1000); // Delay before starting to erase (1 second)
    }
  }
}

function eraseHeadline() {
  if (!isTyping) {
    // If not typing, remove one character at a time
    if (index > 0) {
      headlineElement.textContent = headlineText.substring(0, index - 1);
      index--;
      setTimeout(eraseHeadline, 70); // Adjust erasing speed (50ms per letter)
    } else {
      // Once the text is fully erased, start typing again
      setTimeout(() => {
        isTyping = true; // Start typing again
        typeHeadline(); // Restart typing
      }, 500); // Delay before restarting typing (0.5 seconds)
    }
  }
}

// Start the typing effect when the page loads
window.onload = () => {
  typeHeadline();
};
