// // This is the boilerplate code given for you
// // You can modify this code
// // Product data
// const products = [
//   { id: 1, name: "Product 1", price: 10 },
//   { id: 2, name: "Product 2", price: 20 },
//   { id: 3, name: "Product 3", price: 30 },
//   { id: 4, name: "Product 4", price: 40 },
//   { id: 5, name: "Product 5", price: 50 },
// ];

// // DOM elements
// const productList = document.getElementById("product-list");

// // Render product list
// function renderProducts() {
//   products.forEach((product) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
//     productList.appendChild(li);
//   });
// }

// // Render cart list
// function renderCart() {}

// // Add item to cart
// function addToCart(productId) {}

// // Remove item from cart
// function removeFromCart(productId) {}

// // Clear cart
// function clearCart() {}

// // Initial render
// renderProducts();
// renderCart();
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// Cart data
let cart = [];

// Render product list
function renderProducts() {
  productList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((cartItem) => {
    const li = document.createElement("li");
    li.innerHTML = `${cartItem.name} - $${cartItem.price} - Quantity: ${cartItem.quantity} <button class="remove-from-cart-btn" data-id="${cartItem.id}">Remove</button>`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  if (product) {
    const existingCartItem = cart.find((item) => item.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }

    // Store the updated cart data in session storage
    sessionStorage.setItem('cart', JSON.stringify(cart));

    renderCart();
  }
}


// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

// Clear cart
function clearCart() {
  cart = [];
  renderCart();
}

// Event listener for adding products to cart
productList.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    addToCart(productId);
  }
});

// Event listener for removing products from cart
cartList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    removeFromCart(productId);
  }
});

// Initial render
renderProducts();
renderCart();

