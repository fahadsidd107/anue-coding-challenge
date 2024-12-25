import React, { useState } from 'react';
import { Task } from '../types/task';
import { useTaskStore } from '../hooks/useTaskStore';
import Input from '../Inputs/Input';

interface Props {
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    task: Task;
}
const EditingModal: React.FC<Props> = ({ setIsEditModalOpen, task }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const updateTask = useTaskStore((state) => state.editTask);

    const onSubmitHandler = () => {
        updateTask(task.id, {
            ...task,
            title,
            description,
        });


        setIsEditModalOpen(false);     
    };

    return (
        <>

            {/* Modal Content */}
            <div className="w-screen h-screen flex justify-center items-center absolute z-100 bg-[#00000080] left-0 top-0">
                <div className="lg:w-[40vw] md:w-[60vw] w-[90vw] bg-white rounded-3xl p-4 flex flex-col justify-between gap-4">
                    <p className="text-xl">Edit Task</p>
                    <div className="flex flex-col gap-4 justify-start h-full">
                        <Input
                            value={title}
                            placeholder="Title"
                            isRequired
                            onChangeHandler={(e) => setTitle(e.target.value)}
                        />
                        <Input
                            value={description || ''}
                            placeholder="Description"
                            isRequired
                            onChangeHandler={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex w-full justify-end gap-4">
                        <button
                            className="bg-green-500 text-white p-2 rounded-md"
                            onClick={onSubmitHandler}
                        >
                            Update
                        </button>
                        <button
                            onClick={() => setIsEditModalOpen(false)}
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

export default EditingModal;
