import React from 'react';
import './ChartBar.css';

type ChartBarProps = {
  label: string;
  value: number;
  maxValue: number;
};

/**
 * Renders a chart bar, for a given month, inside the Chart component
 * @prop { string } label - The corresponding month
 * @prop { number } value - The total expenses for the given month
 * @prop { number } maxValue - The sum of all expenses in the current year
 */
export function ChartBar({ label, value, maxValue }: ChartBarProps) {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <React.StrictMode>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{ height: barFillHeight }} />
        </div>
        <div className="chart-bar__label">{label}</div>
      </div>
    </React.StrictMode>
  );
}
