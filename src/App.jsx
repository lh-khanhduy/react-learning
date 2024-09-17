import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import List from './components/List.jsx';
import PracUpdateOnArrayObjects from './components/PracUpdateOnArrayObjects.jsx';

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
			<PracUpdateOnArrayObjects />

			<Header />
			<Card />
			<Footer />

			{weapons.length > 0 && <List items={weapons} category="Tools" />}
			{armors.length > 0 && <List items={armors} category="Chest Pieces" />}
		</>
	);
}

export default App;
