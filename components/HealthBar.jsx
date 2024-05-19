import Image from 'next/image';
import heart from '@/assets/heart.png';

const HealthBar = ({ health }) => {
	return (
		<div className='p-2 rounded-full bg-white fixed z-20 right-8 top-8 w-36'>
			<div className='relative flex'>
				<div
					className='flex justify-center items-center h-12 bg-red-400 rounded-full'
					style={{ width: 3 * health + 'rem' }}>
					<h1 className='text-xl font-bold'>{health}</h1>
				</div>
				<Image
					className='absolute -right-6 -top-2 h-16 w-16'
					src={heart}
					alt='heart'
				/>
			</div>
		</div>
	);
};

export default HealthBar;
