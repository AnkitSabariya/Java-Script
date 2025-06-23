const products = [
    {
      id: 1,
      title: "Wireless Earbuds Pro",
      category: "Audio",
      imageUrl: "https://www.corseca.in/cdn/shop/files/Listing-1_6452ec0d-5fdb-460b-b071-4de4b0c0f105.png?v=1727951475",
      rating: 4.9,
      price: 149.99,
      oldPrice: 199.99,
      badge: "sale"
    },
    {
      id: 2,
      title: "MacBook Pro 16\"",
      category: "Laptops",
      imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcREeDp7OKRg4fgjQ9hUMvEqIb7zIMLtgLKgStx4UIEpUEiWFHhXuseHR5arE4c5hgiu-Pec_BGwCJRpnsmgLwpQUAgvRLpXF-4uaHjJTSjLGjXxW_XPKnHUKg",
      rating: 4.8,
      price: 2399.99,
      badge: "new"
    },
    {
      id: 3,
      title: "iPhone 15 Pro",
      category: "Smartphones",
      imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70",
      rating: 4.7,
      price: 999.99,
      badge: "hot"
    },
    {
      id: 4,
      title: "Apple Watch Ultra",
      category: "Wearables",
      imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ultra-case-unselect-gallery-1-202409_GEO_IN?wid=5120&hei=3280&fmt=p-jpg&qlt=80",
      rating: 4.9,
      price: 799.99
    },
    {
      id: 5,
      title: "Sony A7 Mark Iv",
      category: "Cameras",
      imageUrl: "https://www.sony.co.in/image/0273574ff7bcc3b83e178248f0831403?fmt=pjpeg&wid=1200&hei=470",
      rating: 4.8,
      price: 3399.99,
      oldPrice: 3999.99,
      badge: "sale"
    },
    {
      id: 6,
      title: "iPad Pro 12.9\"",
      category: "Tablets",
      imageUrl: "https://m.media-amazon.com/images/I/61G6WfvA9vL.jpg",
      rating: 4.6,
      price: 1099.99
    },
    {
      id: 7,
      title: "Gaming Headset Pro",
      category: "Gaming",
      imageUrl: "https://resource.logitech.com/content/dam/gaming/en/products/g335/g335-white-gallery-1.png",
      rating: 4.9,
      price: 299.99,
      badge: "new"
    },
    {
      id: 8,
      title: "Portable Bluetooth Speaker",
      category: "Audio",
      imageUrl: "https://avstore.in/cdn/shop/files/1.AVStore-JBL-PartyBox-Encore-Essential-Portable-Bluetooth-Speaker-With-Light-Display-Front-Angled-View-Hero.jpg?v=1682414405",
      rating: 4.5,
      price: 79.99,
      oldPrice: 99.99,
      badge: "sale"
    },
    {
      id: 9,
      title: "Fitness Tracker Pro",
      category: "Fitness",
      imageUrl: "https://media.croma.com/image/upload/v1714041273/Croma%20Assets/Communication/Wearable%20Devices/Images/303292_0_gbshyk.png",
      rating: 4.4,
      price: 199.99
    }
  ];
  

localStorage.setItem()
let count = -1;
function addtocart(){
    count++
    let cartitems = document.getElementById("cart-items")
    cartitems.innerHTML += `<div class="cart-item">
                        <div class="item-image">
                            <img src="${products[count].imageUrl}" alt="Wireless Earbuds Pro">
                        </div>
                        <div class="item-details">
                            <h3>${products[count].title}</h3>
                            <p class="item-category">${products[count].category}</p>
                            <div class="item-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span>${products[count].rating}</span>
                            </div>
                        </div>
                        <div class="item-quantity">
                            <label>Qty:</label>
                            <div class="quantity-controls">
                                <button class="qty-btn minus">-</button>
                                <input type="number" value="1" min="1">
                                <button class="qty-btn plus">+</button>
                            </div>
                        </div>
                        <div class="item-price">
                            <span class="current-price">${products[count].price}</span>
                            <span class="old-price">${products[count].oldPrice}</span>
                        </div>
                        <div class="item-actions">
                            <button class="remove-btn"><i class="fas fa-trash"></i></button>
                        </div>` 
                        localStorage.setItem("setter",JSON.stringify(cartitems))
    
}
 