import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    return (
        <h1>Pagina dettagli prodotti</h1>
    );
}

export default ProductDetail;