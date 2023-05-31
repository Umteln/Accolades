import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';
import ImageTaskCard from './ImageTaskCard';

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

    return (
        <>
            <div
                className='bg-purple-200  h-[300px] w-[300px] p-1 rounded-lg flex flex-col justify-center items-center '
                ref={drop}
            >
                {board &&
                    board.map((task) => (
                        <>
                            <ImageTaskCard
                                key={task.id}
                                task={task}
                                id={task.id}
                            />
                            <p className='w-[60%] bg-green-400 text-center rounded-lg  p-2  text-xl font-bold inline-block text-gray-600 m-auto'>
                                {task.name}
                            </p>
                        </>
                    ))}
            </div>
        </>
    );
};
export default DropBox;
