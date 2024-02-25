import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../utils/http';
// Components & types
import { LoadingIndicator } from './UI/LoadingIndicator';
import { ErrorBlock } from './UI/ErrorBlock';

export function MealDetails() {
  const { id } = RRD.useParams();
  if (id === undefined) throw new Error('Test');

  const queryResults = RQ.useQuery({
    queryKey: ['meals', { id }],
    queryFn: ({ signal }) => httpUtils.getMealDetails({ id, signal }),
  });
  const { data, isPending, isError, error } = queryResults;
  
  let content = <div />;
  if (isPending) content = <LoadingIndicator />;

  if (isError) {
    content = (
      <ErrorBlock title="An error has occurred!" message={error.message} />
    );
  }

  if (data) {
    const {name, image, price, description } = data;
    content = (
      <article className="meal-item">
        <img src={`http://localhost:3001/${image}`} alt={name} />
        <div>
          <h3>{name} </h3>
          <p className="meal-item-price">{price}€</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="cart-item-actions">
          <button type="button">Add to Cart</button>
        </p>
      </article>
    );
  }

  return <div className="meal-details-container">{content}</div>;
}
