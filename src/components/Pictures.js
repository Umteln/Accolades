import React from 'react';
import DragImage from './DragImage';


const Pictures = ({ data }) => {
	return (
		<div className='flex flex-row flex-wrap'>
			{data.map((picture) => {
				return (
					<DragImage
						key={picture.id}
						id={picture.id}
						source={picture.source}
					/>
				);
			})}
		</div>
	);
};

export default Pictures;
