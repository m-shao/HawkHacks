'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Home from '@/components/pages/Home.jsx';
import RoadMap from '@/components/pages/RoadMap.jsx';
import Learning from '@/components/pages/Learning.jsx';
import Quiz from '@/components/pages/Quiz.jsx';
import Faliure from '@/components/pages/Faliure';
import Success from '@/components/pages/Success';
import Information from '@/components/pages/Information';

import BackButton from '@/components/BackButton';
import HealthBar from '@/components/HealthBar';

import { sections } from '@/config/pages/sections';

const Page = () => {
	const [page, setPage] = useState(0);
	const [health, setHealth] = useState(3);
	const score = health * 10000;

	const restart = () => {
		setPage(0);
		setHealth(3);
	};

	const continueGame = () => {
		setPage((prev) => prev + 2);
		setHealth(3);
	};

	const pages = [
		<Home key='0' setPage={setPage} />,
		<RoadMap key='1' setPage={setPage} index={0} />,
		<Learning
			key='1'
			setPage={setPage}
			paragraph={sections[0].text}
			titleImage={sections[0].image}
		/>,
		<Information key='2' setPage={setPage} />,
		<Quiz key='3' setPage={setPage} setHealth={setHealth} />,
		<Success key='5' score={score} restart={continueGame} />,
		<Faliure key='6' score={score} restart={restart} />,
		<RoadMap key='4' setPage={setPage} index={1} />,
	];

	useEffect(() => {
		if (health === 0) {
			setPage(pages.length - 2);
			setHealth(3);
		}
	}, [health, pages.length, setPage]);

	return (
		<div className='w-screen h-screen'>
			{health !== 0 && <HealthBar health={health} />}
			{page !== 0 && <BackButton setPage={setPage} />}
			{pages[page]}
		</div>
	);
};

export default Page;
