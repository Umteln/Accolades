import React, { useState } from 'react';
import DropBox from './DropBox';

const TopCards = () => {
	const [board, setBoard] = useState([])
	return (
		<div className='grid lg:grid-cols-6 gap-6 p-4'>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>3</p>
					<p className='text-gray-600 '>Tasks</p>
				</div>
			</div>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>What are you working for?</p>
					   <DropBox  setBoard={setBoard} board={board} />
					<p className='text-gray-600 '>Goal</p>
				</div>
			</div>
			
		</div>
	);
};

export default TopCards;
