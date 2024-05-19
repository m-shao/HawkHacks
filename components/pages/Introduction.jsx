'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import introduction from '@/assets/introduction/text.png';

import BackButton from '@/components/BackButton.jsx';

const Introduction = ({ setPage }) => {
	const [topic, setTopic] = useState('');

	return (
		<div className='w-screen h-screen bg-explain-bg flex flex-col gap-6 items-center'>
			<BackButton setPage={setPage} />
			<div className='w-full flex flex-col items-center gap-8 justify-center h-full'>
				<Image alt='introduction text' src={introduction} />
				<div className='w-full max-w-[55rem] text- p-6 text-2xl text-black bg-white rounded-2xl shadow-2xl leading-10'>
					Lorem ipsum dolor sit amet consectetur. Aliquet vitae non
					fermentum amet convallis pretium lorem nulla quam. Elit amet
					feugiat ullamcorper dignissim tincidunt nunc ornare. Nulla
					mauris consequat odio pulvinar nulla leo risus. Dolor
					commodo lectus volutpat urna diam tellus malesuada lacus a.
				</div>
				<form className='w-full max-w-[60rem] p-6 text-2xl flex flex-col gap-2 text-white font-semibold bg-white rounded-2xl shadow-2xl bg-gradient-to-b from-green-800 border-[3px] border-green-600 to-green-700'>
					<label htmlFor='topic'>
						Data set would you like to learn with:
					</label>
					<input
						name='topic'
						className='bg-gradient-to-b from-green-950 to-green-900 p-2 rounded-lg shadow-lg text-white text-3xl '
						value={topic}
						onChange={(e) => {
							setTopic(e.target.value);
						}}
						type='text'
					/>
				</form>
			</div>
		</div>
	);
};

export default Introduction;
