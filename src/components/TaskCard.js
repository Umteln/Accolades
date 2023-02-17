import React from 'react';
import { BiTask } from 'react-icons/bi';
import { useDrag } from 'react-dnd';

const TaskCard = ({ task, id }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'task',
		item: { id: id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<div
			ref={drag}
			className='bg-gray-50 hover:bg-gray-100 rounded-lg  p-2 flex items-center cursor-pointer'
		>
			<div className='bg-purple-200 hover:bg-purple-300 cursor-pointer rounded-lg'>
				<BiTask />
			</div>
			<div className='flex'>
				<div className='pl-4'>
					<p className='text-gray-800 font-bold'>{task.name}</p>
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
