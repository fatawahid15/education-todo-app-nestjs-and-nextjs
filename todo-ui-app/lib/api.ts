import { Todo, CreateTodoDto, UpdateTodoDto } from '@/lib/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(`${API_URL}/todo`, 
    {
      cache: 'no-cache'
    }
  );
  if (!res.ok) throw new Error('Failed to fetch todos');
  return res.json();
}

export async function getTodo(id: string): Promise<Todo> {
  const res = await fetch(`${API_URL}/todo/${id}`);
  if (!res.ok) throw new Error('Failed to fetch todo');
  return res.json();
}

export async function createTodo(data: CreateTodoDto): Promise<Todo> {
  const res = await fetch(`${API_URL}/todo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create todo');
  return res.json();
}

export async function updateTodo(id: string, data: UpdateTodoDto): Promise<Todo> {
  const res = await fetch(`${API_URL}/todo/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update todo');
  return res.json();
}

export async function deleteTodo(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/todo/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete todo');
}