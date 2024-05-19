'use client';

import { useState } from 'react';
import BackButton from '@/components/BackButton';

import Image from 'next/image';

import titleImage from '@/assets/dataset-text.png';

const Information = ({ setPage, schema }) => {
	return (
		<div
			onClick={() => setPage((prev) => prev + 1)}
			className='w-screen h-screen bg-explain-bg flex flex-col gap-6 items-center overflow-y-scroll'>
			<BackButton setPage={setPage} />
			<div className='w-full flex flex-col items-center gap-8 justify-center h-full'>
				<Image alt='title text' src={titleImage} />
				<div className='w-full max-w-[55rem] text- p-6 text-2xl text-black bg-white rounded-2xl shadow-2xl leading-10'>
					<h1>Generated Schema:</h1>
					<div>
						<pre>
							{JSON.stringify(schema, null, 2).replace(
								'\n',
								'<br/>'
							)}
						</pre>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Information;
