import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Products() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("all")
    const [sortOrder, setSortOrder] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
            .catch((err) => {
                console.error(err)
                setError("Errore nel caricamento dei prodotti.")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const categories = [...new Set(products.map((product) => product.category))]

    let filteredProducts = products.filter((product) => {
        const matchTitle = product.title.toLowerCase().includes(search.toLowerCase())
        const matchCategory = category === "all" || product.category === category

        return matchTitle && matchCategory
    })

    if (sortOrder === "asc") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
    }

    if (sortOrder === "desc") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
    }

    if (loading) {
        return <h2 className="status-message">Caricamento prodotti...</h2>
    }

    if (error) {
        return <h2 className="status-message">{error}</h2>
    }

    return (
        <section className="products-page">
            <div className="breadcrumb">Home › <strong>Prodotti</strong></div>

            <div className="products-header">
                <div>
                    <h1>I Nostri Prodotti</h1>
                    <p>
                        Esplora la nostra selezione esclusiva di articoli premium. Ogni
                        pezzo è curato per garantire la massima qualità.
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Cerca prodotti..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="product-search"
                />
            </div>

            <div className="products-toolbar">
                <div className="category-filters">
                    <button
                        className={category === "all" ? "active" : ""}
                        onClick={() => setCategory("all")}
                    >
                        Tutti
                    </button>

                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={category === cat ? "active" : ""}
                            onClick={() => setCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="sort-box">
                    <span>Ordina per:</span>

                    <select
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                    >
                        <option value="">Popolarità</option>
                        <option value="asc">Prezzo crescente</option>
                        <option value="desc">Prezzo decrescente</option>
                    </select>
                </div>
            </div>

            {filteredProducts.length === 0 ? (
                <p className="status-message">
                    Nessun prodotto trovato per la tua ricerca.
                </p>
            ) : (
                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Products