// Get all the images in the gallery
const images = document.querySelectorAll('.gallery-images img');

// Get the overlay element to show the enlarged image
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Add event listeners to all images
images.forEach(image => {
    image.addEventListener('click', function() {
        // Stop the animation by resetting the keyframe
        document.querySelector('.gallery-images').style.animation = 'none';
        
        // Add class to enlarge the clicked image
        image.classList.add('enlarged');
        
        // Show the overlay with the enlarged image
        const enlargedImg = document.createElement('img');
        enlargedImg.src = image.src;
        overlay.appendChild(enlargedImg);
        
        // Show the overlay
        overlay.style.display = 'flex';

        // Close the overlay when clicked
        overlay.addEventListener('click', function() {
            overlay.style.display = 'none';
            enlargedImg.remove();
            image.classList.remove('enlarged');
            
            // Restart the animation after closing the overlay
            document.querySelector('.gallery-images').style.animation = 'slide 10s linear infinite';
        });
    });
});
