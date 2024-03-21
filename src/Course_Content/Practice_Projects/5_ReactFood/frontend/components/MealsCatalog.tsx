import * as React from 'react';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../utils/http';
import classes from './MealsCatalog.module.css';
// Components & types
import { TMeal } from '../types/types';
import { LoadingIndicator } from './UI/LoadingIndicator/LoadingIndicator';
import { ErrorBlock } from './UI/ErrorBlock/ErrorBlock';
import { MealItem } from './MealItem';

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
      <ul id={classes.meals}>
        {data?.map((meal) => {
          const { id } = meal;
          return <MealItem key={id} meal={meal} />;
        })}
      </ul>
    );
  }
  return <div className="meals-container">{content}</div>;
}