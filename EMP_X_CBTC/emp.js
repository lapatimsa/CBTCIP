// Function to show the selected product category section
function showSection(section) {
    // Get all sections
    const sections = document.querySelectorAll('.content-section');
    
    // Hide all sections first
    sections.forEach((sec) => {
        sec.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}


// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // By default, show the Electronics section when the page loads
    showSection('electronics'); // Default category to show
});
// Initialize cart items as an empty array
let cart = [];

// Function to update the cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');

    // Update cart count
    cartCount.innerText = cart.length;

    // Update cart modal items
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p><strong>${item.name}</strong> - $${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Function to show the cart modal
function showCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'flex';
}

// Function to close the cart modal
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

// Add event listener to close the cart modal
document.getElementById('close-cart').addEventListener('click', closeCart);

// Function to handle adding items to the cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };

    cart.push(product);
    updateCartDisplay();
}

// Add event listeners for each "Add to Cart" button
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-item').dataset.name;
        const productPrice = this.closest('.product-item').dataset.price;
        addToCart(productName, productPrice);
    });
});


// Add event listener to the search input
document.getElementById('search-input').addEventListener('input', filterProducts);
