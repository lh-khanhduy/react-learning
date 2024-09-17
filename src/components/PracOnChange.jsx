import { useState } from 'react';

const NewComponent = () => {
	const [name, setName] = useState('Guest');
	const [quantity, setQuantity] = useState(0);
	const [comment, setComment] = useState('');
	const [select, setSelect] = useState('Select an option');
	const [option, setOption] = useState(false);

	const handleInput = (event) => {
		setName(event.target.value);
	};

	const handleQuantityInput = (event) => {
		setQuantity(event.target.value);
	};

	const handleComment = (event) => {
		setComment(event.target.value);
	};

	const handleSelect = (event) => {
		setSelect(event.target.value);
	};

	const handleRadio = (event) => {
		setOption(event.target.value);
	};

	return (
		<>
			<input value={name} onChange={handleInput} />
			<p>Name: {name}</p>

			<input value={quantity} onChange={handleQuantityInput} type="number" />
			<p>Quantity: {quantity}</p>

			<textarea onChange={handleComment}></textarea>
			<p>Note: {comment}</p>

			<select value={select} onChange={handleSelect}>
				<option value="">Select an option</option>
				<option value="Visa">Visa</option>
				<option value="Mastercard">Mastercard</option>
				<option value="paypal">Paypal</option>
			</select>
			<p>Option: {select}</p>

			<label>
				<input
					type="radio"
					value="Pick up"
					checked={option === 'Pick up'}
					onChange={handleRadio}
				/>
				Pick up
			</label>
			<br></br>
			<label>
				<input
					type="radio"
					value="Delivery"
					checked={option === 'Delivery'}
					onChange={handleRadio}
				/>
				Delivery
			</label>
		</>
	);
};

export default NewComponent;
