import { ITask, ITaskV2 } from "@/types/tasks";
import React from "react";
import TaskV2 from "./Task";

interface TodoListProps {
  tasks: ITaskV2[];
}

const TodoListv2: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskV2 key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoListv2;
