'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Home from '@/components/pages/Home.jsx';

const Page = () => {
	const [page, setPage] = useState(0);
	const pages = [<Home key='0' />];

	return <div>{pages[0]}</div>;
};

export default Page;
