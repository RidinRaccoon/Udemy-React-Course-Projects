import React from 'react';
import './ProjectOptions.scss';

type ProjectOptionsProps = {
  onDelete: () => void;
};
/** Renders the Project's option buttons
 * @prop { function } onDelete - Deletes the project in `projectsState` from `ProjectManagementApp` \
 * [`onDeleteHandler` function from parent `Project` component ]
 */
export function ProjectOptions({ onDelete }: ProjectOptionsProps) {
  return (
    <div id="Project-Options">
      <button className="button-delete" type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
