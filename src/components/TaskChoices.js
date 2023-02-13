import { pictureListAtom } from '@/recoil/atoms';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Pictures from './Pictures';

const TaskChoices = () => {
	const data = useRecoilValue(pictureListAtom);

	return (
		<div className='w-full col-span-1 relative lg:h-[60vh] h-[25vh]  p-4 border rounded-lg bg-white overflow-y-scroll'>
			<Pictures data={data} />
		</div>
	);
};

export default TaskChoices;
