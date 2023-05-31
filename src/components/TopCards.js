import React from 'react';
import Goal from '@/components/Goal';
import ProgressStepper from './ProgressStepper';

const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-6 p-4'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <ProgressStepper />
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <Goal />
            </div>
        </div>
    );
};

export default TopCards;
