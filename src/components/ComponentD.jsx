import { useContext } from 'react';
import { UserContext } from './ComponentA';

const ComponentD = () => {
	const user = useContext(UserContext);

	return (
		<>
			<div className="example-component">
				<h2>Component D</h2>
				<h2>Bye {user}</h2>
			</div>
		</>
	);
};

export default ComponentD;
