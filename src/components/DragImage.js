import React from 'react';
import { useDrag } from 'react-dnd';
import Image from 'next/image';

const DragImage = ({ source, id }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'image',
		item: { id: id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	if (isDragging) {
		console.log(id);
	}
	return (
		<Image
			ref={drag}
			src={source}
			alt='/'
			width='150'
			className={
				isDragging
					? ' border-xl shadow-purple-800 rounded-t-lg block m-auto max-w-[100%] w-[150px] h-[150px]'
					: 'rounded-t-lg block m-auto max-w-[100%] w-[150px] h-[150px]'
			}
		/>
	);
};

export default DragImage;
