// Sample Product List (add once on first load)
const products = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      price: 999.99,
      image: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      title: "MacBook Pro 16",
      price: 2399.99,
      image: "https://via.placeholder.com/100"
    }
  ];
  
  // Store once if not already in localStorage
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  
  // Add to Cart
  function addToCart(id) {
    const allProducts = JSON.parse(localStorage.getItem("products")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const selected = allProducts.find(p => p.id === id);
    if (!selected) return;
  
    const exist = cart.find(p => p.id === id);
    if (exist) {
      exist.qty += 1;
    } else {
      selected.qty = 1;
      cart.push(selected);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Added to cart!");
  }
  