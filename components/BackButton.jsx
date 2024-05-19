import React from 'react';

const BackButton = ({ setPage }) => {
	const handleClick = () => {
		setPage((prev) => prev - 1);
	};

	return (
		<button
			onClick={handleClick}
			className=' p-1 bg-white rounded-xl fixed top-6 left-6'>
			<div className='p-4 bg-green-800 rounded-xl'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={6}
					stroke='currentColor'
					className='w-6 h-6'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.75 19.5 8.25 12l7.5-7.5'
					/>
				</svg>
			</div>
		</button>
	);
};

export default BackButton;
