import React from 'react';

import ProductList from './components/ProductList';

import Header from './components/Header';

import './App.css';

import ItemContextProvider from './context/ItemContext';

const App = () => {
  return (
    <ItemContextProvider>
      <Header />
      <ProductList />
    </ItemContextProvider>
  )
};

export default App;