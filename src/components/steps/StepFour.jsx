import React from 'react';
import DropBox from '../DropBox';
import { taskchoices } from '@/utils/taskArray';
import useTextContext from '@/hooks/useTaskContext';
const StepFour = () => {
    const { boardFour, setBoardFour } = useTextContext();
    return (
        <DropBox
            setBoard={setBoardFour}
            board={boardFour}
            data={taskchoices}
        />
    );
};

export default StepFour;
