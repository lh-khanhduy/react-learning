import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import Student from './Student.jsx';
import List from './List.jsx';

function App() {
	const weapons = [
		{ name: 'arrow', type: 'ranged' },
		{ name: 'sword', type: 'melee' },
		{ name: 'bow', type: 'ranged' },
		{ name: 'whip', type: 'ranged' },
		{ name: 'shield', type: 'melee' },
	];

	const armors = [
		{ name: 'scaled', type: 'heavy' },
		{ name: 'black knife', type: 'light' },
		{ name: 'Leda chest piece', type: 'light' },
		{ name: 'Ronin hat', type: 'light' },
		{ name: 'Bullgoat', type: 'heavy' },
	];

	return (
		<>
			<Header />
			<Card />
			<Footer />
			<Student name="john cena" age={23} isStudent={true} />

			{weapons.length > 0 && <List items={weapons} category="Tools" />}
			{armors.length > 0 && <List items={armors} category="Chest Pieces" />}
		</>
	);
}

export default App;

// Change account
