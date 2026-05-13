import "./productsPages.css";

function Products() {


    const products = [
        
    ]


  return (


    <div className="products-page">
      <div className="products-header">
        <h1>🛍️ Our Products</h1>
        <p>Browse our amazing collection</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
