// @ts-nocheck
import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as formatUtils from '../utils/formatting';
// Components & Types
import { TMeal } from '../types/types';
import { Button } from './UI/Button';

export function MealItem(props: { meal: TMeal }) {
  const { meal } = props;
  const { id, name, image, price } = meal;
  const { currencyFormatter } = formatUtils;

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3001/${image}`} alt={name} />
        <div>
          <h3>{name} </h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
        </div>
        <p className="cart-item-actions">
          <Button isTextOnly={false} >Add to Cart</Button>
          <RRD.Link to={`/catalog/${id}`}>Details</RRD.Link>
        </p>
      </article>
    </li>
  );
}