import { taskchoices } from '@/utils/taskArray';
import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import DropBox from './DropBox';
import TaskChoices from './TaskChoices';

const TaskGrid = () => {
	const [boardOne, setBoardOne] = useState([]);
	const [boardTwo, setBoardTwo] = useState([]);
	const [boardThree, setBoardThree] = useState([]);
	const [boardFour, setBoardFour] = useState([]);
	const [checked, setChecked] = useState(true);
	
	
	const handleReset = () => {
		setBoardOne([]);
		setBoardTwo([]);
		setBoardThree([]);
		setBoardFour([]);
	};

	

	return (
		<div className='grid lg:grid-col-4 w-full pb-4 items-center'>
			<p className='text-2xl font-bold'>Choose a task</p>
			<div className='grid lg:grid-col-4 gap-2 p-4 items-center'>
			

					<DropBox
						setBoard={setBoardOne}
						board={boardOne}
						data={taskchoices}
					/>
			

				<DropBox
					setBoard={setBoardTwo}
					board={boardTwo}
					data={taskchoices}
				/>

				<DropBox
					setBoard={setBoardThree}
					board={boardThree}
					data={taskchoices}
				/>

				<DropBox
					setBoard={setBoardFour}
					board={boardFour}
					data={taskchoices}
				/>
			</div>

			<TaskChoices handleReset={handleReset} />
		</div>
	);
};

export default TaskGrid;
