import React, { useState } from 'react';
import { taskchoices } from '@/utils/taskArray';
import TaskCard from './TaskCard';

const TaskChoices = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow((prevShow) => !prevShow);
	};
	return (
		<div className='flex flex-col w-[50%]'>
			<button onClick={handleShow} className={show ?'' : 'bg-green-300 rounded-lg  hover:bg-green-400 cursor-pointer p-3  text-xl font-bold inline-block text-gray-600 m-auto' }>
				{show ? 'Close Task Box' : 'Choose Task'}
			</button>

			{show && (
				<div className='lg:w-full col-span-1 relative lg:h-[30vh] h-[25vh] my-1 p-4 border rounded-lg bg-green-100 overflow-y-scroll'>
					{taskchoices.map((task) => (
						<TaskCard
							key={task.id}
							task={task}
							id={task.id}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default TaskChoices;
