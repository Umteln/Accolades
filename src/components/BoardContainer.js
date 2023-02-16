import React, { useState } from 'react';
import Board from './Board';
import StarTokens from './TaskCard';

const BoardContainer = () => {
	return (
		<div className='w-full md:col-span-2 relative lg:h-[60vh] h-[25vh] m-auto p-6 items-center border rounded-lg bg-white ]'>
			<Board />
	
		</div>
	);
};

export default BoardContainer;
