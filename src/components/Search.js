import React, { useState } from 'react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterProducts(event.target.value);
  };

  const filterProducts = (letter) => {
    const filteredProducts = props.products.filter((product) =>
      product.name.includes(letter)
    );
    props.setFilteredProducts(filteredProducts);
  };

  return (
    <form>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </form>
  );
}

function ProductList(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Banana' },
    { id: 2, name: 'Apple' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Pineapple' },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div>
      <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
      <ProductList products={filteredProducts.length ? filteredProducts : products} />
    </div>
  );
}

export default App;