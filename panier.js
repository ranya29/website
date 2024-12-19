// Cart Data Array
let cart = [];

// Price per product code (example prices)
const productPrices = {
    100: 25.900,
    101: 40.900, 
    102: 27.900,
    103: 43.200,
    104: 28.300,
    105: 26.000,
    106: 26.100,
    107: 21.000,
    108: 20.300,
    109: 60.000,
    110: 54.600,
    111: 63.900,
    112: 49.000,
    113: 19.000,
    114: 55.900,
    115: 38.000,

};

// Event Listener for Add to Panier Button
document.getElementById("add-to-cart").addEventListener("click", addToCart);

// Add Product to Cart Function
function addToCart() {
    const productName = document.getElementById("product-name").value.trim();
    const productCode = document.getElementById("product-code").value;
    const quantity = parseInt(document.getElementById("product-quantity").value);
    const productColor = document.getElementById("product-color").value;

    if (!productName || !productCode || isNaN(quantity) || quantity <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    const pricePerUnit = productPrices[productCode];

    if (!pricePerUnit) {
        alert("Invalid product code. Please use a valid code (e.g., 101, 102, 103).");
        return;
    }

    const subtotal = pricePerUnit * quantity;

    // Add product to the cart array
    cart.push({
        color: productColor,
        name: productName,
        code: productCode,
        quantity: quantity,
        subtotal: subtotal.toFixed(2),
    });

    // Update UI
    renderCart();
    calculateTotal();
}

// Render Cart Items Function
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // Clear previous entries

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        ${item.quantity} ${item.color} ${item.name}(${item.code}) : ${item.subtotal}dt
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(li);
    });
}

// Remove Item Function
function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
    calculateTotal();
}

// Calculate Total Price Function
function calculateTotal() {
    const deliveryFee = 7.00;
    let total = cart.reduce((sum, item) => sum + parseFloat(item.subtotal), 0);
    total += deliveryFee;

    document.getElementById("total-price").innerText = `Total: ${total.toFixed(2)}dt (including ${deliveryFee}dt delivery fee)`;
}
