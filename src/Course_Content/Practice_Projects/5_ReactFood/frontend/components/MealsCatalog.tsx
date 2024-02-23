import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../utils/http';
// Components & Types
import { TMeal } from '../types/types';
import { LoadingIndicator } from './UI/LoadingIndicator';
import { ErrorBlock } from './UI/ErrorBlock';

export function MealsCatalog() {
  const queryResults = RQ.useQuery<TMeal[]>({
    queryKey: ['meals'],
    queryFn: httpUtils.getMeals,
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
      <ul id="meals">
        {data?.map((meal) => {
          const { id, name } = meal;
          return (
            <li className="meal-item" key={id}>
              <RRD.Link to={`/catalog/${id}`}>{name}</RRD.Link>
            </li>
          );
        })}
      </ul>
    );
  }
  return <div className="meals-container">{content}</div>;
}
