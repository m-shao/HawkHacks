import roadImage from '@/assets/road-map.png';
import roadGraphic from '@/assets/road-map.svg';
import Image from 'next/image';

import road1 from '@/assets/road-progress/road-map-1.svg';
import road2 from '@/assets/road-progress/road-map-2.svg';
import road3 from '@/assets/road-progress/road-map-3.svg';
import road4 from '@/assets/road-progress/road-map-4.svg';

const RoadMap = ({ index, setPage }) => {
	const roads = [road1, road2, road3, road4];
	console.log(roads);

	return (
		<div
			className='h-screen w-screen overflow-none flex justify-center items-center bg-[#f8dcb4] '
			onClick={() => setPage((prev) => prev + 1)}>
			<Image
				className='h-full w-auto absolute'
				alt='road map'
				src={roadImage}
			/>
			<Image
				className='h-full w-auto absolute'
				alt='road graphic'
				src={roads[index]}
			/>
		</div>
	);
};

export default RoadMap;
