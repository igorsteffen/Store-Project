import '../scss/products.scss'

// Sample Product Data
const products = [
    { name: "PlayStation 5", price: "$600", image: "/ps5.jpg" },
    { name: "Xbox Series x", price: "$400", image: "/xbox.png" },
    { name: "Samsung G9 Monitor", price: "$30", image: "/oled.png" },
    { name: "Gaming PC", price: "$2000", image: "/pc.jpeg" },
   
  ];
  
  // Select the grid container
  const productGrid = document.getElementById("productGrid");
  
  // Function to render products as cards
  function renderProducts() {
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-title">${product.name}</div>
        <div class="product-price">${product.price}</div>
      `;
      // Add click event to the card
      card.addEventListener("click", () => {
        alert(`You clicked on ${product.name}`);
      });
      productGrid.appendChild(card);
    });
  }
  
  // Call the function to render products
  renderProducts();
  