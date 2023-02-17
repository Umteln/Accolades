import React from 'react';
import Tokens from './Tokens';

const Board = () => {

	return (
		<div className='grid lg:grid-cols-2 gap-4 p-4'>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
              <Tokens />
			</div>
		</div>
	);
};

export default Board;
