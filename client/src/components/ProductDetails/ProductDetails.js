import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../ProductDetails/ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

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

    const handleDeleteProduct = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            navigate('/'); // Redirige a la vista principal después de eliminar
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    if (!product) return <div>Cargando...</div>;

    return (
        <div className='detalles'>
            <h2>Detalles del Producto</h2>
            <h3>{product.title}</h3>
            <p>Precio: ${product.price}</p>
            <p>Descripción: {product.description}</p>
            <button onClick={handleDeleteProduct}>Eliminar</button>
        </div>
    );
};

export default ProductDetails;
