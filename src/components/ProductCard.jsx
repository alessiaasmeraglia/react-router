function ProductCard({ product }) {
    return (
        <article className="product-card">
            <button className="favorite-btn">♡</button>

            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="product-info">
                <span>{product.category}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>

                <div className="product-bottom">
                    <strong>€ {product.price}</strong>
                    <button>Dettagli</button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard