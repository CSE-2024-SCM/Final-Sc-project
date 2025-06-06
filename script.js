let cart = [];

async function loadMenu() {
  try {
    const response = await fetch('menu.json');
    const menuItems = await response.json();
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = menuItems.map(item => `
      <div class="menu-item">
        <h3>${item.name} - ₹${item.price}</h3>
        <p>${item.region}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading menu:', error);
  }
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById('cart-items');
  if (cart.length === 0) {
    cartContainer.innerHTML = 'Your cart is empty.';
  } else {
    cartContainer.innerHTML = cart.map(item => `
      <div>${item.name} - ₹${item.price}</div>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', loadMenu);
