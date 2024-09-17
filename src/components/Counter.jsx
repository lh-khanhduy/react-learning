import { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const decrease = () => {
		setCounter((c) => c - 1);
	};

	const reset = () => {
		setCounter(0);
	};

	const increase = () => {
		setCounter((c) => c + 1);
	};

	return (
		<>
			<h1>{counter}</h1>
			<button onClick={decrease}>Decrease</button>
			<button onClick={reset}>Reset</button>
			<button onClick={increase}>Increase</button>
		</>
	);
};

export default Counter;
