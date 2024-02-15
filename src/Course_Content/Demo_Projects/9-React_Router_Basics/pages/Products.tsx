import * as React from 'react';
import * as RRD from 'react-router-dom';

const PRODUCTS = [
  { id: 'p01', title: 'Product 1' },
  { id: 'p02', title: 'Product 2' },
  { id: 'p03', title: 'Product 3' },
];

export function ProductsPage() {
  return (
    <React.StrictMode>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <RRD.Link to={`/products/${product.id}`}>{product.title}</RRD.Link>
          </li>
        ))}
      </ul>
    </React.StrictMode>
  );
}
