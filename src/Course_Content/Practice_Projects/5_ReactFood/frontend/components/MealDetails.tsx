import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../utils/http';

export function MealDetails() {
  const { id } = RRD.useParams();
  if (id === undefined) throw new Error('Test');

  const queryResults = RQ.useQuery({
    queryKey: ['meals', { id }],
    queryFn: ({ signal }) => httpUtils.getMealDetails({ id, signal }),
  });
  const { data } = queryResults;
  console.log(data);

  return (
    <article>
      <h1>{data?.name}</h1>
      <img src={`http://localhost:3001/${data?.image}`} alt={data?.name} />
      <p>{data?.description}</p>
      <p>{data?.price}</p>
    </article>
  );
}
