import { assets } from '@/config/pages/home.js';

import Image from 'next/image';

const Home = ({ setPage }) => {
	const databases = ['MongoDB', 'SQL', 'Graph'];
	const locked = [false, true, true];

	return (
		<section className='w-screen h-screen overflow-hidden flex justify-center bg-home-bg bg-cover bg-bottom'>
			<div className='flex items-center'>
				<div>
					<Image alt='dog' src={assets.dog} />
				</div>
				<div className='flex flex-col  gap-8 items-center'>
					<h1 className='text-5xl font-cherry-bomb'>
						<Image alt='text image' src={assets.text} />
					</h1>
					<div className='flex flex-col gap-5 shadow-inner'>
						{databases.map((database, index) => (
							<div
								key={index}
								className='bg-black rounded-full w-auto h-auto'>
								<button
									onClick={() => {
										if (!locked[index]) {
											setPage(1);
										}
									}}
									className={
										'flex gap-4 text-center justify-center py-2 font-semibold text-xl rounded-full border-2 px-4 w-56 transition-all hover:bg-opacity-65 ' +
										(locked[index]
											? 'bg-lime-700'
											: 'bg-lime-500')
									}>
									<span>
										{locked[index] && (
											<Image
												alt='lock symbol'
												src={assets.lock}
											/>
										)}
									</span>
									{database}
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
