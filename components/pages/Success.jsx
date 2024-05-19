import Image from 'next/image';

import successBanner from '@/assets/complete-banner.png';
import winDogs from '@/assets/win-dogs.png';

const Success = ({ score, restart }) => {
	return (
		<div className='w-screen h-screen bg-quiz-bg flex justify-center items-center'>
			<Image
				alt='dogs that show up when you win'
				className='fixed bottom-0 left-0 z-50 pointer-events-none'
				src={winDogs}
			/>
			<div className='flex flex-col relative justify-center items-center translate-y-12'>
				<Image
					src={successBanner}
					alt='success banner'
					className=' absolute -top-[12rem] z-50'
				/>
				<div className='bg-white rounded-xl drop-shadow-2xl h-96 w-[50rem] flex flex-col gap-2 justify-center items-center'>
					<h1 className='font-semibold text-green-700 text-2xl'>
						SCORE
					</h1>
					<div className='w-56 h-16 rounded-full bg-green-300'>
						<h1 className='w-full text-center font-semibold text-green-700 text-6xl'>
							{score}
						</h1>
					</div>
					<button
						onClick={restart}
						className='bg-yellow-500 text-white font-semibold text-xl rounded-full w-56 h-12'>
						Next Level
					</button>
				</div>
			</div>
		</div>
	);
};

export default Success;
