const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para crear un nuevo producto
router.post('/', productController.createProduct);

// Ruta para obtener todos los productos
router.get('/', productController.getAllProducts);

// Ruta para obtener un producto específico por ID
router.get('/:id', productController.getProductById);

// Ruta para actualizar un producto específico por ID
router.put('/:id', productController.updateProduct);

// Ruta para eliminar un producto específico por ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;
