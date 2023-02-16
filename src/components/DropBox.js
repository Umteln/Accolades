import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';

const DropBox = ({ board, setBoard, data }) => {
	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'task',
		drop: (item) => addTaskToBoard(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const addTaskToBoard = (id) => {
		let tempArr = [];
		const taskList = data.filter((task) => id === task.id);
		tempArr.push(taskList[0]);
		setBoard(tempArr);
	};
	console.log(board);

	return (
		<>
			<div
				className='bg-purple-200  h-full rounded-lg mb-4 '
				ref={drop}
			>
				{board &&
					board.map((task) => (
						<TaskCard
							key={task.id}
							task={task}
							id={task.id}
						/>
					))}
			</div>
		</>
	);
};
export default DropBox;
