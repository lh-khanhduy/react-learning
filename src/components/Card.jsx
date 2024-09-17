import profilePic from '../assets/Plague Doctor.jpg';

function Card() {
	return (
		<div className="card">
			<img className="card-image" src={profilePic} alt="profile picture"></img>
			<h2>Messmer</h2>
			<p>I committed a genocide crime at the Belurat tower. Unlucky.</p>
		</div>
	);
}

export default Card;
