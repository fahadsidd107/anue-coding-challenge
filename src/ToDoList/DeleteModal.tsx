import { useTaskStore } from '@/hooks/useTaskStore';
import { Task } from '@/types/task';
import { deleteTask } from '@/utils/api';
import React, { useState } from 'react';

interface Props {
    setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    task: Task;
}
const DeletingModal: React.FC<Props> = ({ setIsDeleteModalOpen, task }) => {
    const [title, setTitle] = useState(task.title);
    const deleteTask = useTaskStore((state) => state.deleteTask);

    const handleDeleteTask = async (id: number) => {
        try {
          await deleteTask(id);
          setIsDeleteModalOpen(false); 
        } catch (error) {
          console.error("Error deleting task:", error);
        }
      };


    return (
        <>

            {/* Modal Content */}
            <div className="w-screen h-screen flex justify-center items-center absolute z-100 bg-[#00000080] left-0 top-0">
                <div className="lg:w-[40vw] md:w-[60vw] w-[90vw] bg-white rounded-3xl p-4 flex flex-col justify-between gap-4">
                    <p className="text-xl">Delete Task</p>
                    <div className="flex flex-col gap-4 justify-start h-full text-black">
                       Are you sure you want to delete {title}?
                    </div>
                    <div className="flex w-full justify-end gap-4">
                        <button
                            className="bg-green-500 text-white p-2 rounded-md"
                            onClick={() => handleDeleteTask(task.id)}
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => setIsDeleteModalOpen(false)}
                            className="bg-red-500 text-white p-2 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeletingModal;
