import "./Flowers.css";

const flowers = [
  {
    id: 1,
    name: "Red Rose",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400",
  },
  {
    id: 2,
    name: "White Lily",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400",
  },
  {
    id: 3,
    name: "Sunflower",
    price: "₹179",
    image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=400",
  },
  {
  id: 4,
  name: "Tulip",
  price: "₹299",
  image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400",
},
 
];
const bouquets = [
  {
    id: 1,
    name: "Rose Bouquet",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400",
  },
  {
    id: 2,
    name: "Mixed Flower Bouquet",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400",
  },
  {
    id: 3,
    name: "Wedding Bouquet",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400",
  },
  {
    id: 4,
    name: "Pink Rose Bouquet",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400",
  }
];

function Flowers() {
  return (
    <div className="flowers-container">
      <div className="top-header">
  <h2>🌸 BloomCart</h2>
  <div className="header-icons">
    ❤️ 🛒 👤
  </div>
</div>
     <div className="search-box">
  <input
    type="text"
    placeholder="🔍 Search Flowers & Bouquets..."
  />
</div> 
 <div className="categories">
    <button>🌹 Roses</button>
    <button>🌷 Tulips</button>
    <button>🌻 Sunflower</button>
    <button>🌸 Lily</button>
    <button>💐 Bouquet</button>
    <button>🎁 Gift</button>
  </div>
   <div className="offer-banner">
  <h2>🌸 Flat 50% OFF on Fresh Flowers 🌸</h2>
  <p>Free Delivery | Same Day Delivery | Best Quality</p>
</div>
      <div className="flower-grid">
        {flowers.map((flower) => (
           <div className="flower-card" key={flower.id}>
         <span className="wishlist">❤️</span>
         <span className="discount">50% OFF</span>   
  <img src={flower.image} alt={flower.name} />

  <h3>{flower.name}</h3>

  <p className="rating">⭐ 4.5</p>

  <p>
    <span className="price">{flower.price}</span>
    <span className="old-price"> ₹499</span>
  </p>

  <p className="delivery">Free Delivery</p>

  <button className="cart-btn">🛒 Add to Cart</button>
</div>
        ))}
      </div>
    </div>
  );
}

export default Flowers;