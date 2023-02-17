import { Router } from 'next/router';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Tokens = () => {
	const router = useRouter();
	const [complete, setComplete] = useState(0);

	

	return (
		<div className='flex justify-center items-center min-h-[20vh] text-[100px]'>
			{[...Array(4)].map((item, index) => {
				const completedTask = index + 1;
				return (
					<label key={index}>
						<input
							className='hidden'
							type='radio'
							value={completedTask}
							onClick={() => {
								setComplete(completedTask);
								alert(
									`Are you sure you want to mark Task ${completedTask} complete?`
								);

								if (completedTask === 4) {
									router.push('/success');
								}
							}}
						/>
						<div className='cursor-pointer'>
							<FaStar
								className={
									completedTask < complete || completedTask === complete
										? 'text-purple-700'
										: 'text-gray-200'
								}
							/>
						</div>
					</label>
				);
			})}
		</div>
	);
};

export default Tokens;
