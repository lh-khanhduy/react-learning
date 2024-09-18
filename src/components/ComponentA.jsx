import ComponentB from './ComponentB';
import { createContext, useState } from 'react';

export const UserContext = createContext();

const ComponentA = () => {
	const [user, setUser] = useState('Willies');

	return (
		<>
			<div className="example-component">
				<h2>Component A</h2>
				<h2>Hello {user}</h2>

				<UserContext.Provider value={user}>
					<ComponentB user={user} />
				</UserContext.Provider>
			</div>
		</>
	);
};

export default ComponentA;
