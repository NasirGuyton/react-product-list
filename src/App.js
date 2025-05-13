import React, { useState } from 'react';
import './App.css';
import {
  data,
  uniqueCategories
} from './data';
import CategoryButton from './components/CategoryButton';
import ProductCard from './components/ProductCard';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? data
      : data.filter(product => product.category === selectedCategory);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Product List</h1>

      <div style={{ marginBottom: '20px' }}>
        <CategoryButton
          name="All"
          isActive={selectedCategory === 'All'}
          onClick={handleCategorySelect}
        />
        {uniqueCategories.map(category => (
          <CategoryButton
            key={category}
            name={category}
            isActive={selectedCategory === category}
            onClick={handleCategorySelect}
          />
        ))}
      </div>

      <p>Total Products: {filteredProducts.length}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
