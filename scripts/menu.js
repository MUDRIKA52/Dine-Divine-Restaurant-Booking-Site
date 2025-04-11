// Selecting necessary DOM elements
const modal = document.getElementById('dish-modal');
const closeModal = document.querySelector('.close-modal');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const viewDetailsButtons = document.querySelectorAll('.view-details');
const cartItemsList = document.getElementById('cart-items');
const cartContainer = document.querySelector('.cart-container');

// Menu items data (for demonstration purposes)
const menuData = {
    "tomato-soup": {
        name: "Tomato Soup",
        description: "Freshly made with ripe tomatoes and aromatic spices.",
        price: "$5.99",
        image: "images/soup.jpg"
    },
    // Add more dishes here as needed
};

// Modal Logic (open and close)
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
        const dishId = this.closest('.menu-item').getAttribute('data-dish');
        const dish = menuData[dishId];

        // Populate the modal with dish details
        document.getElementById('modal-title').textContent = dish.name;
        document.getElementById('modal-description').textContent = dish.description;
        document.getElementById('modal-price').textContent = dish.price;
        document.getElementById('modal-image').src = dish.image;

        // Show the modal
        modal.style.display = 'block';
    });
});

// Close modal when the 'X' is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Add to cart logic (from modal)
document.getElementById('add-to-cart-modal').addEventListener('click', function() {
    const dishId = document.getElementById('modal-title').textContent;
    addToCart(dishId);
    modal.style.display = 'none';
});

// Add to cart logic (from menu)
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const dishId = this.closest('.menu-item').getAttribute('data-dish');
        addToCart(dishId);
    });
});

// Add dish to cart
function addToCart(dishId) {
    const dish = menuData[dishId];
    const cartItem = document.createElement('li');
    cartItem.textContent = `${dish.name} - ${dish.price}`;
    cartItemsList.appendChild(cartItem);
}

// Checkout button functionality (for now, just alert)
document.getElementById('checkout').addEventListener('click', () => {
    alert("Proceeding to checkout...");
});
// Selecting all filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

// Selecting all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Adding event listener to each button
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filtering menu items
        menuItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block'; // Show item
            } else {
                item.style.display = 'none'; // Hide item
            }
        });
    });
});

