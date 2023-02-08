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

	return (
		<Image
			ref={drag}
			src={source}
			alt='/'
			class={
				isDragging
					? 'border-solid-[1px] border-purple-800 rounded-t-lg block m-auto max-w-[100%] w-[200px] h-[215px]'
					: 'rounded-t-lg block m-auto max-w-[100%] w-[200px] h-[215px]'
			}
		/>
	);
};

export default DragImage;
