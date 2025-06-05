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

(C)


(s)
document.addEventListener('DOMContentLoaded', loadMenu);
