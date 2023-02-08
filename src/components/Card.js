import React from 'react';
import DropBox from './DropBox';

const Card = ({ task }) => {
	return (
		<>
			<div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-gray-600 '>{task.title}</p>
					<div className='block m-auto max-w-[100%] max-h-[100%] bg-purple-200 w-full h-full justify-center items-center '>
						<DropBox />
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
