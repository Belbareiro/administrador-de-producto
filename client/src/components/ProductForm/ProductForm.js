import React, { useState } from 'react';
import axios from 'axios';
import '../ProductForm/ProductForm.css'


const ProductForm = ({ onProductAdded }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/products', {
                title,
                price,
                description
            });
            console.log('Producto agregado:', response.data);
            // Llama a la función de callback para actualizar la lista de productos
            onProductAdded();
            // Reiniciar el formulario
            setTitle('');
            setPrice('');
            setDescription('');
        } catch (error) {
            console.error('Error al agregar el producto:', error);
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
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default ProductForm;