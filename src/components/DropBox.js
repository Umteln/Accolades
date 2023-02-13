import { filteredPictureListAtom } from '@/recoil/atoms';
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useRecoilValue } from 'recoil';
import DragImage from './DragImage';

const DropBox = ({board, setBoard}) => {
	// const [board, setBoard] = useState([]);
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
			className='lg:col-span-2 col-span-1 bg-gray-100 flex justify-between w-full h-[180px] border p-4 rounded-lg'
			ref={drop}
		>
			{board.map((image) => (
				<div key={image.id} className=' justify-center items-center m-auto rounded-lg shadow-xl border-solid border-4 border-purple-300 '>
					<DragImage
						id={image.id}
						source={image.source}
					/>
				
				</div>
				
			))}
		</div>
		
		</>
		
	);
};
export default DropBox;
