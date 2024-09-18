import { useEffect } from 'react';
import { useState } from 'react';

const PracUseEffect = () => {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState('green');

	useEffect(() => {
		document.title = `Title: ${count} ${color}`;
	}, [count, color]);

	const handleAdd = () => {
		setCount((c) => c + 1);
	};

	const handleSub = () => {
		setCount((c) => c - 1);
	};

	const changeColor = () => {
		setColor(color === 'green' ? 'red' : 'green');
	};

	return (
		<>
			<h2 style={{ color: color }}>Count: {count} </h2>
			<button onClick={handleAdd}>Add</button>
			<button onClick={handleSub}>Sub</button>
			<button onClick={changeColor}>Change Color</button>
		</>
	);
};

export default PracUseEffect;
