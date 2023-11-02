import { TProject } from '../types/types';

// DUMMY PROJECT DATA
export const DUMMY_PROJECTS: TProject[] = [
  {
    id: 'P1',
    title: 'First Project',
    description:
      'Cras ultricies nisl nec sem elementum euismod. Praesent dolor magna, lobortis quis fringilla vel, hendrerit tincidunt eros. Mauris ornare felis nisl. In hac habitasse platea dictumst. Phasellus tempor, justo sed vehicula auctor, sem ligula elementum neque. \n Fusce a convallis nibh, in cursus ipsum. Sed eget rutrum ipsum. In aliquet scelerisque ante, eleifend gravida ipsum maximus quis. Fusce et libero sollicitudin odio interdum eleifend a nec dui. Etiam elementum magna nec orci malesuada porttitor.',
    startDate: new Date('October 1, 2023'),
    dueDate: new Date('January 25, 2024'),
    tasks: [
      { id: 't1', title: 'Task1', isCompleted: true },
      { id: 't2', title: 'Task2', isCompleted: false },
      { id: 't3', title: 'Task3', isCompleted: true },
    ],
  },
  {
    id: 'P2',
    title: 'Second Project',
    description:
      'Nam eros turpis, consequat congue mauris ut, vestibulum suscipit ante. Nulla mattis faucibus augue nec feugiat. \n Fusce a convallis nibh, in cursus ipsum. Sed eget rutrum ipsum.',
    startDate: new Date('November 1, 2023'),
    dueDate: new Date('December 17, 2023'),
    tasks: [
      { id: 't1', title: 'Task1', isCompleted: false },
      { id: 't2', title: 'Task2', isCompleted: true },
    ],
  },
];
