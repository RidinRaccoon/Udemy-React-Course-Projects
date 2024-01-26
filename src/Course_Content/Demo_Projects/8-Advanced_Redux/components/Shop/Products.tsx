import * as React from 'react';
import classes from './Products.module.css';
import { ProductItem } from './ProductItem';

// type TProductsProps = {};

export function Products(/* props: TProductsProps */) {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </section>
  );
}
