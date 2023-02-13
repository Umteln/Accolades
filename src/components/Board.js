import { fourTask } from '@/utils/taskArray';
import React, { useState } from 'react';
import Card from './Card';
import DropBox from './DropBox';

const Board = () => {
	const [taskAmount, setTaskAmount] = useState(fourTask);
	const [board, setBoard] = useState([]);

	return (
		<div className='grid lg:grid-cols-2 gap-4 p-4'>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<button
					  onClick={() => setBoard([])} 
					className='bg-green-300 rounded-lg hover:bg-green-400 cursor-pointer p-3  text-xl font-bold inline-block text-gray-600 mb-4'>
						Reset Board
					</button>
					<button className='bg-green-300 rounded-lg hover:bg-green-400 cursor-pointer p-3  text-xl font-bold inline-block text-gray-600 '>
						Need a break?
					</button>
				</div>
			</div>
			
				<DropBox
					board={board}
					setBoard={setBoard}
				/>
			
		</div>
	);
};

export default Board;
