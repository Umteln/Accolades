import React from 'react';
import DropBox from '../DropBox';
import { taskchoices } from '@/utils/taskArray';
import useTextContext from '@/hooks/useTaskContext';
const StepTwo = () => {
    const { boardTwo, setBoardTwo } = useTextContext();
    return (
        <DropBox
            setBoard={setBoardTwo}
            board={boardTwo}
            data={taskchoices}
        />
    );
};

export default StepTwo;
