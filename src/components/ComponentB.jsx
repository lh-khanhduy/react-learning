import ComponentC from './ComponentC';

const ComponentB = () => {
	return (
		<>
			<div className="example-component">
				<h2>Component B</h2>
				<ComponentC />
			</div>
		</>
	);
};

export default ComponentB;
