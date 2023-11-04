import React from 'react';
import { ChartBar } from './ChartBar';
import './Chart.css';
// TYPES
import { Point } from '../../types/types';

type ChartBarProps = {
  dataPoints: Point[];
  maxValue: number;
};

/**
 * The chart component receives the sum of filtered expenses (by month) and creates a chart for that year. \
 * The maximum value is the total expenses of that year
 * @prop { Point[] } dataPoints - total monthly expenses, for the selected year
 * @prop { number } maxValue - sum of all expenses for the selected year
 *
 */
export function Chart({ dataPoints, maxValue }: ChartBarProps) {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={maxValue} />
      ))}
    </div>
  );
}
