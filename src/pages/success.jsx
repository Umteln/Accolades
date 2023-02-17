import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';

// import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../utils/fireworks';

const Success = () => {
	//   const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

	useEffect(() => {
		localStorage.clear();
		// setCartItems([]);
		// setTotalPrice(0);
		// setTotalQuantities(0);
		runFireworks();
	}, []);

	return (
		<div className='bg-white min-h-[60vh]'>
			<div className='w-[1000px] m-auto mt-[160px] bg-[#dcdcdc] p-[50px] rounded-2xl flex flex-col justify-center items-center'>
				<p className='text-purple-300 text-4xl'>
					<BsStarFill />
				</p>
				<h2 className='uppercase font-bold text-4xl text-purple-600 mt-[15px]'>
					Wow! You Did It!
				</h2>

				<p className='text-[16px] font-bold text-center m-[10px] mt-[30px] text-gray-600 '>
					You finished all your task.
				</p>
				<Link href='/'>
					<button
						type='button'
						width='300px'
						className='btn'
					>
						Return to Task Board
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Success;
