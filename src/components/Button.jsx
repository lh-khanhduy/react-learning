function Button() {
	const handleClick = (e) => (e.target.textContent = 'Boo Hoo');

	return <button onDoubleClick={(e) => handleClick(e)}>Click</button>;
}

export default Button;
