import React from 'react';
import DropBox from './DropBox';

const Card = ({  board, setBoard}) => {
	return (
		<>
			<div
				
				className='col-span-1 bg-purple-200 flex justify-between w-[250px] h-[300px] border p-4 rounded-lg'
			>
				<div className='flex flex-row pb-1 '>
					<DropBox board={board} setBoard={setBoard} />
					
				</div>
			</div>
		</>
	);
};

export default Card;
