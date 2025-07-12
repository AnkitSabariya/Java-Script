// Get the "type" from URL, like ?type=shirt
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type') || 'shirt'; // default = shirt

// Fetch the relevant JSON file
fetch(`json/${type}.json`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("category-title").innerText = `${type.toUpperCase()} PRODUCTS`;
    renderProducts(data);
  })
  .catch(err => {
    document.getElementById("product-container").innerHTML = "Failed to load products.";
    console.error("JSON Load Error:", err);
  });

// Dynamic rendering even if keys are different
function renderProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = '';

  products.forEach(product => {
    const name = product.name || product.title || product.productName || "Unknown Product";
    const price = product.price || product.cost || product.amount || "N/A";
    const image = product.image || product.img || product.imageUrl || "https://via.placeholder.com/150";

    container.innerHTML += `
      <div class="card">
        <img src="${image}" alt="${name}" />
        <h2>${name}</h2>
        <p>Price: ₹${price}</p>
        <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
      </div>
    `;
  });
}

// Cart logic with fallback fields
function addToCart(rawProduct) {
  const product = {
    name: rawProduct.name || rawProduct.title || rawProduct.productName || "Unknown",
    price: rawProduct.price || rawProduct.cost || rawProduct.amount || 0,
    image: rawProduct.image || rawProduct.img || rawProduct.imageUrl || ""
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart ✅`);
}
