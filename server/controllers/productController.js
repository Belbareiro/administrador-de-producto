const Product = require('../models/Product');


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