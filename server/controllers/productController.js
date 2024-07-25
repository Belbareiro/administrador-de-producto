const Product = require('../models/Product');

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
    try {
        const { title, price, description } = req.body;
        const newProduct = new Product({ title, price, description });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error al guardar el producto:', error);
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: error.message });
    }
};

// Obtener un producto específico por ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un producto específico por ID
exports.updateProduct = async (req, res) => {
    try {
        const { title, price, description } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { title, price, description },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un producto específico por ID
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ message: error.message });
    }
};
