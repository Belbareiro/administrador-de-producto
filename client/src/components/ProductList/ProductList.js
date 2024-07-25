import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductForm from '../ProductForm/ProductForm';
import '../ProductList/ProductList.css'

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

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            fetchProducts(); // Actualiza la lista después de eliminar
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    return (
        <div className='listaProductos'>
            <ProductForm onProductAdded={handleProductAdded} />
            <h2>Lista de Productos</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <div className='links'>
                            <Link to={`/${product._id}`}>{product.title}</Link>
                            <Link className='linkEditar' to={`/${product._id}/edit`}>Editar</Link> {/* Solo un enlace */}
                        </div>
                        <button onClick={() => handleDeleteProduct(product._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
