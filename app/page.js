'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Home from '@/components/pages/Home.jsx';
import RoadMap from '@/components/pages/RoadMap.jsx';
import Learning from '@/components/pages/Learning.jsx';
import Learning2 from '@/components/pages/Learning2.jsx';
import Quiz from '@/components/pages/Quiz.jsx';
import Faliure from '@/components/pages/Faliure';
import Success from '@/components/pages/Success';
import Information from '@/components/pages/Information';
import Information2 from '@/components/pages/Information2';

import BackButton from '@/components/BackButton';
import HealthBar from '@/components/HealthBar';

import { sections } from '@/config/pages/sections';

const Page = () => {
	const [page, setPage] = useState(0);
	const [health, setHealth] = useState(3);

	const [prompt, setPrompt] = useState('');
	const [schema, setSchema] = useState('');
	const [questionSet, setQuestionSet] = useState([]);
	const [question, setQuestion] = useState('');
	const score = health * 10000;

	useEffect(() => {
		if (prompt === '') return;
		// const generateQuestionset = () => {
		const neurelo_prompt = `Given the topic of: "${prompt}, I want you to generate me a valid JSON dict containg array containing some questions testing basic knowledge on what would be in a database schema for an app about "${prompt}". Index 0 should be the correct answer, and the rest should be incorrect answers. The questions should be formatted as follows: {question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid", "Rome"]}.`;
		fetch('/api/gemma?prompt=' + neurelo_prompt).then((res) => {
			res.json().then((data) => {
				console.log();
				const parsed = JSON.parse(data.response);
				setQuestionSet(parsed.options);
				setQuestion(parsed.question);
			});
		});
		setPage((prev) => prev + 1);
	}, []); // topic
	const restart = () => {
		setPage(0);
		setHealth(3);
	};

	const continueGame = () => {
		setPage((prev) => prev + 2);
		setHealth(3);
	};

	const pages = [
		<Home
			key='0'
			setPage={setPage}
			setPrompt={setPrompt}
			setSchema={setSchema}
		/>,
		<RoadMap key='1' setPage={setPage} index={0} />,
		<Learning
			key='2'
			setPage={setPage}
			paragraph={sections[0].text}
			titleImage={sections[0].image}
		/>,
		<Information key='3' setPage={setPage} />,
		<Quiz
			key='4'
			setPage={setPage}
			setHealth={setHealth}
			correct={questionSet[0]}
			options={questionSet}
			question={question}
		/>,
		<Information2 key='5' setPage={setPage} />,
		<Learning2 key='6' setPage={setPage} />,
		<Success key='7' score={score} restart={continueGame} />,
		<Faliure key='8' score={score} restart={restart} />,
		<RoadMap key='9' setPage={setPage} index={1} />,
		<Quiz
			key='3'
			setPage={setPage}
			setHealth={setHealth}
			correct={questionSet[0]}
			options={questionSet}
			question={question}
		/>,
		<RoadMap key='4' setPage={setPage} index={1} />,
		<Success key='5' score={score} restart={restart} />,
		<Faliure key='6' score={score} restart={restart} />,
	];

	useEffect(() => {
		if (health === 0) {
			setPage(pages.length - 2);
			setHealth(3);
		}
	}, [health, pages.length, setPage]);

	return (
		<div className='w-screen h-screen'>
			{health !== 0 && page !== 0 && <HealthBar health={health} />}
			{page !== 0 && <BackButton setPage={setPage} />}
			{pages[page]}
		</div>
	);
};

export default Page;
