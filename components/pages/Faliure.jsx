import Image from 'next/image';

import faliureBanner from '@/assets/fail-banner.png';

const Faliure = ({ score, restart }) => {
	return (
		<div className='w-screen h-screen bg-quiz-bg flex justify-center items-center'>
			<div className='flex flex-col relative justify-center items-center translate-y-12'>
				<Image
					src={faliureBanner}
					alt='faliure banner'
					className=' absolute -top-[12rem] z-50'
				/>
				<div className='bg-white rounded-xl drop-shadow-2xl h-96 w-[50rem] flex flex-col gap-2 justify-center items-center'>
					<h1 className='font-semibold text-red-700 text-2xl'>
						SCORE
					</h1>
					<div className='w-56 h-16 rounded-full bg-red-300'>
						<h1 className='w-full text-center font-semibold text-red-700 text-6xl'>
							{score}
						</h1>
					</div>
					<button
						onClick={restart}
						className='bg-yellow-500 text-white font-semibold text-xl rounded-full w-56 h-12'>
						Play Again
					</button>
				</div>
			</div>
		</div>
	);
};

export default Faliure;
