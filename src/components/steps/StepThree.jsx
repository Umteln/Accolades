import React from 'react';
import DropBox from '../DropBox';
import { taskchoices } from '@/utils/taskArray';
import useTextContext from '@/hooks/useTaskContext';
const StepThree = () => {
    const { boardThree, setBoardThree } = useTextContext();
    return (
        <DropBox
            setBoard={setBoardThree}
            board={boardThree}
            data={taskchoices}
        />
    );
};

export default StepThree;
