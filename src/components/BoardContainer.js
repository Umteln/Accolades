import React, { useState } from 'react';
import Tokens from './Tokens';

const BoardContainer = () => {
	return (
		<div className='w-full md:col-span-2 relative lg:h-[30vh] h-[25vh] m-auto p-6 items-center border rounded-lg bg-white ]'>
			  <Tokens />
	
		</div>
	);
};

export default BoardContainer;
