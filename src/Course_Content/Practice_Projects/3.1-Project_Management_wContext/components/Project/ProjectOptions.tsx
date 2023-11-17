import React from 'react';
import './ProjectOptions.scss';
// import { ProjectsContext } from '../../store/ProjectsContextProvider';

type ProjectOptionsProps = {
  onDelete: () => void;
};
/** Renders the Project's option buttons
 * @prop { function } onDelete - Removes project from context  \
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
