import React, { useState } from 'react';
import DropBox from './DropBox';
import TaskChoices from './TaskChoices';
import { taskchoices } from '@/utils/taskArray';

const TopCards = () => {
	const [boardOne, setBoardOne] = useState([]);
	const [boardTwo, setBoardTwo] = useState([]);
	const [boardThree, setBoardThree] = useState([]);
	const [boardFour, setBoardFour] = useState([]);

	return (
		<div className='grid lg:grid-cols-4 gap-6 p-4'>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex w-full pb-4 '>
					<div className='lg:w-full col-span-1 relative lg:h-[30vh] h-[25vh] my-7 mx-3 p-4 border rounded-lg bg-green-100'>
						<div className='flex flex-col  justify-between '>
							<div className='bg-white h-[25%] rounded-lg mb-4'>
								<DropBox
								setBoard={setBoardOne}
								board={boardOne}
								data={taskchoices}
							/>
							</div>
							
						    <div className='bg-gray-50 h-[25%] rounded-lg mb-4'>

								<DropBox
								setBoard={setBoardTwo}
								board={boardTwo}
								data={taskchoices}
							/>
							</div>
							
							<div className='bg-gray-50 h-[25%] rounded-lg mb-4'>
								<DropBox
								setBoard={setBoardThree}
								board={boardThree}
								data={taskchoices}
							/>
							</div>			
							
							<div className='bg-gray-50 h-[25%] rounded-lg mb-4'>
								<DropBox
								setBoard={setBoardFour}
								board={boardFour}
								data={taskchoices}
							/>
							</div>
							
						</div>
					</div>

					<TaskChoices />
				</div>
			</div>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>What are you working for?</p>
					<DropBox />
					<p className='text-gray-600 '>Goal</p>
				</div>
			</div>
		</div>
	);
};

export default TopCards;
