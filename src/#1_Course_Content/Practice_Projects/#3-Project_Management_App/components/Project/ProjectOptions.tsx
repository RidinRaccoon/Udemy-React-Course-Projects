import React from 'react';
import './ProjectOptions.scss';

type ProjectOptionsProps = {
  onEdit: any;
  onDelete: any;
};
/**
 * Renders the Project's option buttons
 */
export function ProjectOptions({ onEdit, onDelete }: ProjectOptionsProps) {
  return (
    <div id="Project-Options">
      <button className="button-edit" type="button" onClick={onEdit}>
        Edit
      </button>
      <button className="button-delete" type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
