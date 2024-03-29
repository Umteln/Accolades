import React, { useState } from 'react';
import { taskchoices } from '@/utils/taskArray';
import TaskCard from './TaskCard';
import useTextContext from '@/hooks/useTaskContext';

const TaskChoices = () => {
    const { clearTasks } = useTextContext();
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow((prevShow) => !prevShow);
    };
    return (
        <div className=''>
            <div className='flex'>
                <button
                    onClick={handleShow}
                    className={
                        show
                            ? 'text-gray-600 '
                            : 'w-[25%] bg-blue-300 rounded-lg  hover:bg-blue-400 cursor-pointer p-2  text-xl font-bold inline-block text-gray-600 m-auto'
                    }
                >
                    {show ? 'Close Task Box' : 'Task'}
                </button>
                <button
                    onClick={clearTasks}
                    className='w-[25%] bg-blue-300 rounded-lg  hover:bg-blue-400 cursor-pointer p-2  text-xl font-bold inline-block text-gray-600 m-auto'
                >
                    Reset
                </button>
            </div>

            {show && (
                <div className='flex flex-col  '>
                    <div className='col-span-1 relative lg:h-[30vh] h-[25vh] my-1 p-4 border rounded-lg bg-green-100 overflow-y-scroll'>
                        {taskchoices.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                id={task.id}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskChoices;
