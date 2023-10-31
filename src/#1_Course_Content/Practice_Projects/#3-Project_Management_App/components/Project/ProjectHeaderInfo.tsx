import React from 'react';
import './ProjectHeaderInfo.scss'

/** Formats the date ( Ex.: Oct, 29 2023 ) */
function formatDate(date: Date) {
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  return `${month} ${day}, ${date.getFullYear()}`;
}

type ProjectHeaderProps = {
  id: string;
  title: string;
  startDate: Date;
  dueDate: Date;
};
/**
 * Renders the project header
 */
export function ProjectHeaderInfo({ id, title, startDate, dueDate }: ProjectHeaderProps) {
  const formattedStartDate = formatDate(startDate);
  const formattedDueDate = formatDate(dueDate);

  return (
    <div id="Header-Info">
      <h1>
        {title} <span>#{id}</span>
      </h1>
      <p className="date">{formattedStartDate} - {formattedDueDate} </p>
    </div>
  );
}
