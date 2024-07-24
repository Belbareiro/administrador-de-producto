// client/src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductForm from '../ProductForm/ProductForm';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleProductAdded = () => {
        fetchProducts(); // Actualiza la lista de productos
    };

    return (
        <div>
            <ProductForm onProductAdded={handleProductAdded} />
            <h2>Lista de Productos</h2>

            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/${product._id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;