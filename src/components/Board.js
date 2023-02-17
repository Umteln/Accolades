import { fourTask } from '@/utils/taskArray';
import React, { useState } from 'react';


import { AiOutlineStar } from 'react-icons/ai';

const Board = () => {
	

	return (
		<div className='grid lg:grid-cols-2 gap-4 p-4'>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<AiOutlineStar size={90} className='text-purple-800' />
				<AiOutlineStar size={90} className='text-purple-800'/>
				<AiOutlineStar size={90} className='text-purple-800'/>
				<AiOutlineStar size={90} className='text-purple-800'/>
			</div>
		</div>
	);
};

export default Board;
