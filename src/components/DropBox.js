import { filteredPictureListAtom } from '@/recoil/atoms';
import { useState } from 'react';
import { useDrop } from 'react-dnd';

import { useRecoilValue } from 'recoil';
import DragImage from './DragImage';

const style = {
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
	backgroundColor: 'lightgray',
	width: '100%',
	height: '100%',
	justifyContent: 'center',
	alignItems: 'center',
};
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
		const imageList = filteredPictureList.filter(
			(picture) => id === picture.id
		);

		setBoard([imageList[0]]);
	};

	return (
		<div ref={drop}>
			{board.map((image) => (
				<DragImage
					key={image.id}
					id={image.id}
					source={image.source}
				/>
			))}
		</div>
	);
};
export default DropBox;
