import React from 'react';
import { BiTask } from 'react-icons/bi';
import { useDrag } from 'react-dnd';
import Image from 'next/image';

const ImageTaskCard = ({ task, id }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg  p-2 flex items-center cursor-pointer'
        >
            <div className='flex'>
                <div className='pl-4'>
                    <Image
                        className='w-[200]'
                        src={task.img}
                        alt={task.name}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageTaskCard;
