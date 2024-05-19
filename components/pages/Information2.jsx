'use client';

import { useState } from 'react';
import BackButton from '@/components/BackButton';

import Image from 'next/image';

import titleImage from '@/assets/query-text.png';

const Information = ({ setPage }) => {
	return (
		<div
			onClick={() => setPage((prev) => prev + 1)}
			className='w-screen h-screen bg-explain-bg flex flex-col gap-6 items-center'>
			<BackButton setPage={setPage} />
			<div className='w-full flex flex-col items-center gap-8 justify-center h-full'>
				<Image alt='title text' src={titleImage} />
				<div className='w-full max-w-[55rem] text- p-6 text-2xl text-black bg-white rounded-2xl shadow-2xl leading-10'>
					Basic queries in document-based databases allow you to
					retrieve and manipulate data efficiently using key-value
					pairs. You can perform operations like finding documents
					that match specific criteria, updating existing documents,
					or deleting documents. More info:
					<a
						className='underline text-blue-600'
						href='https://www.mongodb.com/docs/manual/tutorial/query-documents/'>
						{' '}
						MongoDB Docs{' '}
					</a>
					Example For the petstores, a basic query to find all pets
					named {'"John"'} might look like this:
					<h1> db.books.find{'({ "name": "John" })'}</h1>
					<h1>
						To update the likes of Johns you could use:
						<br />
						db.books.updateOne{'('}
					</h1>
					{'{ "title": "The Great Gatsby" },'} <br />
					{'{ $set: { "available_copies": 5 } }'}
					{')'}
				</div>
			</div>
		</div>
	);
};

export default Information;
