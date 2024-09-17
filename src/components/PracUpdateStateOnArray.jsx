import { useState } from 'react';

const PracUpdateStateOnArray = () => {
	const [bosses, setBosses] = useState(['Messmer', 'Midra', 'Romina']);

	const handleAddBoss = () => {
		const newBoss = document.getElementById('boss-input').value;
		document.getElementById('boss-input').value = '';

		setBosses((b) => [...b, newBoss]);
	};

	const handleRemoveBoss = (index) => {
		setBosses(bosses.filter((_, i) => i !== index));
	};

	return (
		<>
			<div>
				<h1>List of Bosses</h1>
				<ul>
					{bosses.map((boss, index) => (
						<li key={index} onClick={() => handleRemoveBoss(index)}>
							{boss}
						</li>
					))}
				</ul>
				<input id="boss-input" type="text" placeholder="Enter boss name" />
				<button onClick={handleAddBoss}>Add Boss</button>
			</div>
		</>
	);
};

export default PracUpdateStateOnArray;
