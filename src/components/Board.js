import { fourTask } from '@/utils/taskArray';
import React, { useState } from 'react';
import Card from './Card';

const Board = () => {
	const [taskAmount, setTaskAmount] = useState(fourTask);

	return (
		<div className='grid lg:grid-cols-4 gap-1 p-4 justify-between items-center sm:grid-cols-2'>
			{taskAmount.map((task, idx) => (
				<Card
					key={task.id}
					task={task}
				/>
			))}
		</div>
	);
};

export default Board;

