'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Home from '@/components/pages/Home.jsx';
import RoadMap from '@/components/pages/RoadMap.jsx';
import Introduction from '@/components/pages/Introduction.jsx';

const Page = () => {
	const [page, setPage] = useState(0);
	const pages = [
		<Home key='0' setPage={setPage} />,
		<Introduction key='1' setPage={setPage} />,
	];

	return (
		<div>
			{page % 2 === 0 ? (
				pages[page / 2]
			) : (
				<RoadMap
					key='1'
					setPage={setPage}
					index={Math.floor(page / 2)}
				/>
			)}
		</div>
	);
};

export default Page;
