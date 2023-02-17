import React, { useState } from 'react';
import { goalchoices } from '@/utils/taskArray';
import TaskCard from './TaskCard';

const GoalChoices = ({ handleReset }) => {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow((prevShow) => !prevShow);
	};
	return (
		<div className=''>
			<div className='flex mt-8'>
				<button
					onClick={handleShow}
					className={
						show
							? 'text-gray-600 '
							: 'w-[25%] bg-green-300 rounded-lg  hover:bg-green-400 cursor-pointer p-2  text-xl font-bold inline-block text-gray-600 m-auto'
					}
				>
					{show ? 'Close ' : 'Goal'}
				</button>
				<button
					onClick={handleReset}
					className='w-[25%] bg-green-300 rounded-lg  hover:bg-green-400 cursor-pointer p-2  text-xl font-bold inline-block text-gray-600 m-auto'
				>
					Reset
				</button>
			</div>

			{show && (
				<div className='flex flex-col  '>
					<div className='col-span-1  relative lg:h-[30vh] h-[25vh] my-1 p-4 border rounded-lg bg-green-100 overflow-y-scroll'>
						{goalchoices.map((goal) => (
							<TaskCard
								key={goal.id}
								task={goal}
								id={goal.id}
							/>
						))}
					</div>
				</div>
			)}
			<button className='bg-green-300 rounded-lg hover:bg-green-400 mt-20 cursor-pointer p-3 w-full text-xl font-bold inline-block text-gray-600 '>
				Need a break?
			</button>
		</div>
	);
};

export default GoalChoices;
