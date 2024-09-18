import { useEffect, useState } from 'react';

const DigitalClock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const formatTime = () => {
		let hours = time.getHours();
		let minutes = time.getMinutes();
		let seconds = time.getSeconds();

		const meridiem = hours > 12 ? 'PM' : 'AM';
		hours = hours % 12 || 12;

		return `${formatDisplay(hours)}:${formatDisplay(minutes)}:${formatDisplay(
			seconds
		)} ${meridiem}`;
	};

	const formatDisplay = (number) => {
		return (number < 10 ? '0' : '') + number;
	};

	return (
		<>
			<div className="container">
				<div className="clock">
					<h1 className="clock-display">{formatTime()}</h1>
				</div>
			</div>
		</>
	);
};

export default DigitalClock;
