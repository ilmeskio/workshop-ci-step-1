import { ITaskV2 } from "./types/tasks";

const port = process.env.PORT || 3001;
const baseUrl = `http://localhost:${port}`;

export const getAllTodos = async (): Promise<ITaskV2[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
  const todos = await res.json();
  return todos;
}

export const addTodo = async (todo: ITaskV2): Promise<ITaskV2> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const newTodo = await res.json();
  return newTodo;
}

export const editTodo = async (todo: ITaskV2): Promise<ITaskV2> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const updatedTodo = await res.json();
  return updatedTodo;
}

export const setTodoDone = async (todo: ITaskV2, done: boolean): Promise<ITaskV2> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      done,
    })
  })
  const updatedTodo = await res.json();
  return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  })
}