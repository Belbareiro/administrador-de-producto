import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductForm from '../components/ProductForm/ProductForm';
import ProductList from '../components/ProductList/ProductList';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import '../App/App.css';

const App = () => {
  return (
    <Router>

      <div>
        <Routes>
          <Route path="/" element={
            <>
              <h1>Administrador de Productos</h1>
              <ProductList />
            </>
          } />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/:id/edit" element={<ProductForm isEdit={true} />} />
        </Routes>
      </div>

    </Router>
  );
};

export default App;
