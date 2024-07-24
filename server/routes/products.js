const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para crear un nuevo producto
router.post('/', productController.createProduct);

// Ruta para obtener todos los productos
router.get('/', productController.getAllProducts);

// Ruta para obtener un producto específico por ID
router.get('/:id', productController.getProductById);

module.exports = router;