import React from 'react';

import ProductsPage from './pages/ProductsPage';
import BaseModal from './components/Modals';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProductsPage/>
      <BaseModal/>
    </div>
  );
}

export default App;
