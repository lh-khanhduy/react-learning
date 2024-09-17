import { useState } from 'react';

const NewComp = () => {
	const [car, setCar] = useState({
		year: 2014,
		made: 'Rolls-Royce',
		model: 'SUV',
	});

	const handleYearChange = (event) => {
		setCar((c) => ({ ...c, year: event.target.value }));
	};

	const handleMadeChange = (event) => {
		setCar((c) => ({ ...c, made: event.target.value }));
	};

	const handleModelChange = (event) => {
		setCar((c) => ({ ...c, model: event.target.value }));
	};

	return (
		<>
			<p>
				Your favorite car is {car.year} {car.made} {car.model}
			</p>
			<input type="number" value={car.year} onChange={handleYearChange}></input>
			<input value={car.made} onChange={handleMadeChange}></input>
			<input value={car.model} onChange={handleModelChange}></input>
		</>
	);
};

export default NewComp;
