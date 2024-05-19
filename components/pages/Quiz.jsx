import Image from 'next/image';

import text from '@/assets/quiz/text.png';

const Quiz = ({ setHealth, setPage, question, options, correct }) => {


	const handleClick = (e) => {
		if (e.target.innerText === correct) {
			setPage((prev) => prev + 1);
		} else {
			setHealth((prev) => prev - 1);
			setPage((prev) => prev - 1);
		}
	};

	return (
		<div className='w-screen h-screen bg-explain-bg flex flex-col gap-6 items-center'>
			<div className='w-full flex flex-col items-center gap-8 justify-center h-full'>
				<Image alt='quiz text title' src={text} />
				<div className='w-full max-w-[55rem] p-6 text-2xl text-white font-semibold bg-white rounded-2xl shadow-2xl bg-gradient-to-b from-green-800 border-[3px] border-green-600 to-green-700 leading-10'>
					<p> {question}</p>
					<div className='flex flex-col gap-4 w-full'>
						{options.map((option, index) => (
							<div
								key={index}
								className='bg-black rounded-full w-full h-auto'>
								<button
									onClick={handleClick}
									className='flex gap-4 text-center w-full justify-center py-2 font-semibold text-xl rounded-full border-2 px-4 transition-all hover:bg-opacity-65 bg-gradient-to-b from-green-500 border-green-800 to-green-500 via-green-700'>
									<span>{option}</span>
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quiz;
