import { getAllTodos } from "@/api.v2";
import AddTaskV2 from "../components/AddTaskv2";
import TodoList from "../components/TodoListv2";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App v2</h1>
        <AddTaskV2 />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
