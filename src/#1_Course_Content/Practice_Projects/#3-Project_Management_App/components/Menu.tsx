import React from 'react';
import './Menu.scss';
// TYPES
import { TProject } from '../types/types';

type ProjectsProps = {
  projects: TProject[];
};
/**
 * TODO: SUMMARY
 */
export function Menu({ projects }: ProjectsProps) {
  return (
    <section className="projects-container">
      <h1>Your Projects</h1>
      <button type="button" className="button-add"> + Add Project</button>
      <nav>
        {projects.map((project) => (
          <button type="button" key={project.id}>
            {project.title}
          </button>
        ))}
      </nav>
    </section>
  );
}
