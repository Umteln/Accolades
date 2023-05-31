//TaskOneDisplay EXAMPLE
import useTextContext from '@/hooks/useTaskContext';
import { Box } from '@mui/material';
import Image from 'next/image';
import DropBox from '../DropBox';
import { taskchoices } from '@/utils/taskArray';
const StepOne = () => {
    const { boardOne, setBoardOne } = useTextContext();
    return (
        <DropBox
            setBoard={setBoardOne}
            board={boardOne}
            data={taskchoices}
        />
    );
};
export default StepOne;
