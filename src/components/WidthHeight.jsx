import { useEffect } from 'react';
import { useState } from 'react';

const WidthHeight = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		document.title = `${width} || ${height}`;
	}, [width, height]);

	const handleResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	return (
		<>
			<p>Width: {width} px</p>
			<p>Height: {height} px</p>
		</>
	);
};

export default WidthHeight;
