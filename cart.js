const cartItems = document.querySelector('.cart-items');
const totalPrice = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

// Sample product data
const products = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: 'https://m.media-amazon.com/images/I/61SNaslx5FL._SL1500_.jpg' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://m.media-amazon.com/images/I/71lYSEETh5L._SL1500_.jpg' },
  { id: 3, name: 'Bluetooth Speaker', price: 49.99, image: 'https://m.media-amazon.com/images/I/71b122pwbpL._SL1500_.jpg' },
  { id: 4, name: 'Fitness Tracker', price: 89.99, image: 'https://m.media-amazon.com/images/I/61fA+9ZiLXL._SL1500_.jpg' },
  { id: 5, name: 'Portable Charger', price: 24.99, image: 'https://m.media-amazon.com/images/I/71Rcb9pnbEL._SL1500_.jpg' },
  { id: 6, name: 'Wireless Mouse', price: 14.99, image: 'https://m.media-amazon.com/images/I/41KuRShR97L._SL1200_.jpg' },
  { id: 7, name: 'Gaming Keyboard', price: 59.99, image: 'https://m.media-amazon.com/images/I/612KPOukkQL._SL1000_.jpg' },
  { id: 8, name: 'External Hard Drive', price: 99.99, image: 'https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg' }
];

// Function to add a product to the cart
function addToCart(product) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  const itemImage = document.createElement('img');
  itemImage.src = product.image;
  itemImage.alt = product.name;

  const itemDetails = document.createElement('div');
  itemDetails.classList.add('item-details');

  const itemName = document.createElement('p');
  itemName.classList.add('item-name');
  itemName.textContent = product.name;

  const itemPrice = document.createElement('p');
  itemPrice.classList.add('item-price');
  itemPrice.textContent = `$${product.price.toFixed(2)}`;

  itemDetails.appendChild(itemName);
  itemDetails.appendChild(itemPrice);

  cartItem.appendChild(itemImage);
  cartItem.appendChild(itemDetails);

  cartItems.appendChild(cartItem);

  // Update total price
  updateTotalPrice();
}

// Function to update the total price
function updateTotalPrice() {
  const cartItemPrices = Array.from(cartItems.children).map(item => {
    const priceElement = item.querySelector('.item-price');
    return parseFloat(priceElement.textContent.slice(1));
  });

  const totalCost = cartItemPrices.reduce((acc, price) => acc + price, 0);
  totalPrice.textContent = `$${totalCost.toFixed(2)}`;
}

// Event listener for the checkout button
checkoutBtn.addEventListener('click', () => {
  // Handle checkout process
  console.log('Checkout clicked');
});

// Add sample products to the cart
products.forEach(addToCart);