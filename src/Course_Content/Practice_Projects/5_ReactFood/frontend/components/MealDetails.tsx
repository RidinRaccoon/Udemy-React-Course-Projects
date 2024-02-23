import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../utils/http';
// Components & Types
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
    content = (
      <article>
        <h1>{data?.name}</h1>
        <img src={`http://localhost:3001/${data?.image}`} alt={data?.name} />
        <p>{data?.description}</p>
        <p>{data?.price}</p>
      </article>
    );
  }

  return <div className="meal-details-container">{content}</div>;
}
