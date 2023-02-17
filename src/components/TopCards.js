import React, { useState } from 'react';
import DropBox from './DropBox';
import TaskChoices from './TaskChoices';
import { taskchoices } from '@/utils/taskArray';
import TaskGrid from './TaskGrid';
import Goal from '@/components/Goal';

const TopCards = () => {
	return (
		<div className='grid lg:grid-cols-4 gap-6 p-4'>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<TaskGrid />
			</div>
			<div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<Goal />
			</div>
		</div>
	);
};

export default TopCards;
