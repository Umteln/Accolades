import React from 'react';

const TopCards = () => {
	return (
		<div className='grid lg:grid-cols-6 gap-4 p-4'>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>3</p>
					<p className='text-gray-600 '>Tasks</p>
				</div>
			</div>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>What are you working for?</p>
					{/* insert image here */}
					<p className='text-gray-600 '>Goal</p>
				</div>
			</div>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<button className='bg-green-300 rounded-lg hover:bg-green-400 cursor-pointer p-3  text-xl font-bold inline-block text-gray-600 mb-4'>
						Reset Board
					</button>
					<button className='bg-green-300 rounded-lg hover:bg-green-400 cursor-pointer p-3  text-xl font-bold inline-block text-gray-600 '>
						Need a break?
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopCards;
