import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../utils/http';
import { TMeal } from '../types/types';

export function MealsCatalog() {
  const queryResults = RQ.useQuery<TMeal[]>({
    queryKey: ['meals'],
    queryFn: httpUtils.getMeals,
  });

  const { data } = queryResults;

  return (
    <>
      <RRD.Outlet />
      <h1>Meals Catalog</h1>
      <div id="meals">
        <ul >
          {data?.map((meal) => {
            const { id, name } = meal;
            return (
              <li className="meal-item"key={id}>
                <RRD.Link to={`/catalog/${id}`}>{name}</RRD.Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
