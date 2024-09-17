import PropTypes from 'prop-types';

function List(props) {
	const itemsList = props.items;
	const category = props.category;

	const listItems = itemsList.map((item) => (
		<li key={item.name}>
			{item.name}. This is a {item.type} weapon
		</li>
	));

	return (
		<>
			<h2>{category}</h2>
			<ul>{listItems}</ul>
		</>
	);
}

List.PropTypes = {
	category: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			type: PropTypes.string,
		})
	),
};

List.defaultProps = {
	category: 'Equipments',
	items: [],
};

export default List;
