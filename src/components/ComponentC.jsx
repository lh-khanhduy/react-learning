import ComponentD from './ComponentD';

const ComponentC = () => {
	return (
		<>
			<div className="example-component">
				<h2>Component C</h2>
				<ComponentD />
			</div>
		</>
	);
};

export default ComponentC;
