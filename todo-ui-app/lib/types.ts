export interface Todo {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateTodoDto = Omit<Todo, '_id' | 'createdAt' | 'updatedAt'>;
export type UpdateTodoDto = Partial<CreateTodoDto>;