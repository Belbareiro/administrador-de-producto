import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductForm from '../components/ProductForm/ProductForm';
import ProductList from '../components/ProductList/ProductList';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import '../App/App.css'


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Ruta para la URL raíz - muestra el título, el formulario y la lista de productos */}
          <Route path="/" element={
            <>
              <h1>Administrador de Productos</h1>
              <ProductList />
            </>
          } />
          {/* Ruta para detalles del producto - muestra solo los detalles */}
          <Route path="/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;