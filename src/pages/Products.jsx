import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then (res => res.json())
        .then (data=> {
            setProducts(data);
        })
        .catch(err => {
            console.error("Errore nel fetch:", err);
            setError("Si è verificato un errore nel caricamento dei prodotti");
        })
        .finally(() => {
            setLoading(false);
        });
    }, [])
    return (
        <div className="products">
            <h1>Prodotti</h1>

            <div className="grid">
                {products.map(product =>(
                    <Link to={`/products/${product.id}`} key={product.id} className="card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.price} €</p>
                        <span>{product.category}</span>
                    </Link>
                ))}
            </div>
        
        </div>
    );
}

export default Products;