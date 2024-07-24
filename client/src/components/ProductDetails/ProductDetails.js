import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../ProductDetails/ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams(); // Obtiene el ID del producto desde la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) return <div>Cargando...</div>;

    return (
        <div className='detalles'>
            <h2>Detalles del Producto</h2>
            <h3>{product.title}</h3>
            <p>Precio: ${product.price}</p>
            <p>Descripción: {product.description}</p>
        </div>
    );
};

export default ProductDetails;