'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Home from '@/components/pages/Home.jsx';
import RoadMap from '@/components/pages/RoadMap.jsx';
import Learning from '@/components/pages/Learning.jsx';

import BackButton from '@/components/BackButton';

import { sections } from '@/config/pages/sections';

const Page = () => {
	const [page, setPage] = useState(0);
	const pages = [
		<Home key='0' setPage={setPage} />,
		<RoadMap key='1' setPage={setPage} index={0} />,
		<Learning
			key='1'
			setPage={setPage}
			paragraph={sections[0].text}
			titleImage={sections[0].image}
		/>,
	];

	return (
		<div className='w-screen h-screen'>
			{page !== 0 && <BackButton setPage={setPage} />}
			{pages[page]}
		</div>
	);
};

export default Page;
