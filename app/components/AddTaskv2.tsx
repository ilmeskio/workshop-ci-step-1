"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api.v2";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import UpsertTaskModal from "./UpsertTaskModal";

const AddTaskV2 = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
      done: false,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        data-testid="add-todo"
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full'
      >
        Add new task <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <UpsertTaskModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        handleSubmit={handleSubmitNewTodo}
        value={newTaskValue}
        setValue={setNewTaskValue}
      />
    </div>
  );
};

export default AddTaskV2;
