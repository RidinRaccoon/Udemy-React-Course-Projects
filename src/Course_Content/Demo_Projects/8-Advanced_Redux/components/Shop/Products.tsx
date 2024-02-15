import * as React from 'react';
import classes from './Products.module.css';
import { ProductItem } from './ProductItem';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 9.99,
    title: 'Photocopies',
    author: 'John Berger',
    description: (
      <span>
        Book description of <em>Photocopies</em> by John Berger.
      </span>
    ),
  },
  {
    id: 'p2',
    price: 10.99,
    title: 'Thinking with Type',
    author: 'Ellen Lupton',
    description: (
      <span>
        Book description of <em>Thinking with Type</em> by Ellen Lupton.
      </span>
    ),
  },
  {
    id: 'p3',
    price: 11.99,
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    description: (
      <span>
        Book description of <em>The Design of Everyday Things</em> by Don
        Norman.
      </span>
    ),
  },
  {
    id: 'p4',
    price: 9.99,
    title: 'The Stranger',
    author: 'Albert Camus',
    description: (
      <span>
        Book description of <em>The Stranger</em> by Albert Camus.
      </span>
    ),
  },
  {
    id: 'p5',
    price: 10.99,
    title: 'The Golden Temple',
    author: 'Yukio Mishima',
    description: (
      <span>
        Book description of <em>The Golden Temple</em> by Yukio Mishima.
      </span>
    ),
  },
  {
    id: 'p6',
    price: 9.99,
    title: 'Encounter: Essays',
    author: 'Milan Kundera',

    description: (
      <span>
        Book description of <em>Encounter: Essays</em> by Milan Kundera.
      </span>
    ),
  },
];

export function Products() {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
}
