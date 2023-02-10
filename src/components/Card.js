import React from 'react';
import DropBox from './DropBox';

const Card = ({ task }) => {
	return (
		<>
			<div
				key={task.id}
				className='col-span-1 bg-purple-200 flex justify-between w-[250px] h-[300px] border p-4 rounded-lg'
			>
				<div className='flex flex-col pb-1 '>
					<DropBox />
					<p className='text-gray-600 font-bold text-2xl  text-center'>
						{task.title}
					</p>
				</div>
			</div>
		</>
	);
};

export default Card;
