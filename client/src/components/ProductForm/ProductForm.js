import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../ProductForm/ProductForm.css';

const ProductForm = ({ isEdit = false, onProductAdded, onProductUpdated }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (isEdit) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                    const product = response.data;
                    setTitle(product.title);
                    setPrice(product.price);
                    setDescription(product.description);
                } catch (error) {
                    console.error('Error al obtener el producto:', error);
                }
            };
            fetchProduct();
        }
    }, [isEdit, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                const response = await axios.put(`http://localhost:5000/api/products/${id}`, {
                    title,
                    price,
                    description,
                });
                console.log('Producto actualizado:', response.data);
                if (onProductUpdated) {
                    onProductUpdated();
                }
                navigate('/');
            } else {
                const response = await axios.post('http://localhost:5000/api/products', {
                    title,
                    price,
                    description,
                });
                console.log('Producto agregado:', response.data);
                if (onProductAdded) {
                    onProductAdded();
                }
            }
            // Reiniciar el formulario
            setTitle('');
            setPrice('');
            setDescription('');
        } catch (error) {
            console.error('Error al agregar/actualizar el producto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">{isEdit ? 'Actualizar Producto' : 'Agregar Producto'}</button>
        </form>
    );
};

export default ProductForm;
