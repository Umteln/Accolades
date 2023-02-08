import { filteredPictureListAtom } from '@/recoil/atoms';
import { threeTask } from '@/utils/taskArray';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useRecoilValue } from 'recoil';
import DropBox from './DropBox';

const Board = () => {
	const [taskAmount, setTaskAmount] = useState(threeTask);
	const [board, setBoard] = useState([]);

	return (
		<div className='grid lg:grid-cols-4 gap-4 p-4 justify-between items-center'>
			<div className='col-span-1 bg-purple-200 flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<DropBox
						setBoard={setBoard}
						board={board}
					/>
					<p className='text-gray-600 '>Tasks</p>
				</div>
			</div>
			<div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<DropBox
						setBoard={setBoard}
						board={board}
					/>
					<p className='text-gray-600 '>Task Title</p>
				</div>
			</div>
			<div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<DropBox
						setBoard={setBoard}
						board={board}
					/>
					<p className='text-gray-600 '>Tasks</p>
				</div>
			</div>
			<div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-gray-600 '>Tasks</p>
				</div>
			</div>
		</div>
	);
};

export default Board;
