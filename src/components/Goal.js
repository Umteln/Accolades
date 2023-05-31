import React, { useState } from 'react';
import DropBox from './DropBox';
import GoalChoices from './GoalChioces.js';
import { goalchoices } from '../utils/taskArray';

const Goal = () => {
    const [board, setBoard] = useState([]);

    const handleReset = () => {
        setBoard([]);
    };

    return (
        <div className='flex flex-col w-full pb-4 '>
            <div className='bg-white w-full '>
                <p className='text-2xl font-bold mb-3'>
                    What are you working for?
                </p>
                <div className='flex flex-col justify-center items-center'>
                    <DropBox
                        setBoard={setBoard}
                        board={board}
                        data={goalchoices}
                    />
                </div>
            </div>

            <GoalChoices handleReset={handleReset} />
        </div>
    );
};

export default Goal;
