// PROJECT
export type TProject = {
  id: string;
  title: string;
  startDate: Date;
  dueDate: Date;
  description: string;
  tasks: TProjectTask[]
}

// PROJECT TASK
export type TProjectTask = {
  id: string;
  title: string;
  completed: boolean;
}