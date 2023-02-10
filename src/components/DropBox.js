import { filteredPictureListAtom } from '@/recoil/atoms';
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useRecoilValue } from 'recoil';
import DragImage from './DragImage';

const DropBox = () => {
	const [board, setBoard] = useState([]);
	const filteredPictureList = useRecoilValue(filteredPictureListAtom);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'image',
		drop: (item) => addImageToBoard(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const addImageToBoard = (id) => {
		const pictureList = filteredPictureList.filter((image) => id === image.id);
		setBoard((board) => [...board, pictureList[0]]);
		// setBoard([pictureList[0]]);
		
	};
	console.log(board)
	return (
		<>
		<div
			className='bg-gray-100 w-[200px] h-[200px] m-auto ml-2 rounded-lg shadow-xl  shadow-gray-400 '
			ref={drop}
		>
			{board.map((image) => (
				<DragImage
					key={image.id}
					id={image.id}
					source={image.source}
				/>
			))}
		</div>
		
		</>
		
	);
};
export default DropBox;
