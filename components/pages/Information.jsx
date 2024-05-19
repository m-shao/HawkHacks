'use client';

import { useState } from 'react';
import BackButton from '@/components/BackButton';

import Image from 'next/image';

import titleImage from '@/assets/document-text.png';

const Information = ({ setPage }) => {
	return (
		<div
			onClick={() => setPage((prev) => prev + 1)}
			className='w-screen h-screen bg-explain-bg flex flex-col gap-6 items-center'>
			<BackButton />
			<div className='w-full flex flex-col items-center gap-8 justify-center h-full'>
				<Image alt='title text' src={titleImage} />
				<div className='w-full max-w-[55rem] text- p-6 text-2xl text-black bg-white rounded-2xl shadow-2xl leading-10'>
					Document-based databases, or document stores, are a type of
					NoSQL database that store data as structured documents
					(e.g., JSON, BSON, XML) with key-value pairs. Each document
					has a unique identifier (key) and a value that can be simple
					(string, number) or complex (nested documents, arrays).
					These databases are flexible, allowing for varying
					structures within the same collection, making them ideal for
					evolving data schemas. Ex. For an online bookstore, a book
					document might look like this:
					<h1>title: {"'The Great Gatsby'"},</h1>
					<h1>author: {"'F. Scott Fitzgerald'"},</h1>
					<h1>published_year: 1925,</h1>
					<h1>genres: {"['Fiction', 'Classic']"},</h1>
				</div>
			</div>
		</div>
	);
};

export default Information;
