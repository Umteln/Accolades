import React from 'react';
import Link from 'next/link';
import { RxSketchLogo, RxDashboard } from 'react-icons/rx';
import { FiSettings } from 'react-icons/fi';
import { FaChild } from 'react-icons/fa';
import { AiOutlineUpload } from 'react-icons/ai';
const Sidebar = ({ children }) => {
	return (
		<div className='flex'>
			<div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
				<div className='flex flex-col items-center'>
					<Link href='/'>
						<div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
							<RxSketchLogo size={20} />
						</div>
					</Link>
					<span className='border-b-[1px] border-gray-200 w-full p-2'></span>
					<Link href='/'>
						{' '}
						{/*  saved boards */}
						<div className='bg-purple-200 hover:bg-purple-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
							<RxDashboard size={20} />
						</div>
					</Link>
					<Link href='/'>
						{' '}
						{/*  children */}
						<div className='bg-purple-200 hover:bg-purple-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
							<FaChild size={20} />
						</div>
					</Link>
					<Link href='/'>
						{' '}
						{/*  add tasks or goals */}
						<div className='bg-purple-200 hover:bg-purple-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
							<AiOutlineUpload size={20} />
						</div>
					</Link>
					<Link href='/'>
						{' '}
						{/*  settings */}
						<div className='bg-purple-200 hover:bg-purple-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
							<FiSettings size={20} />
						</div>
					</Link>
				</div>
			</div>
			<main className='ml-20 w-full '> {children}</main>
		</div>
	);
};

export default Sidebar;
