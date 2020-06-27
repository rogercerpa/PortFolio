import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import rogerExplorer from './Assets/images/rogerExplorer.jpg';

const AboutMe = () => {
	return (
		<Jumbotron fluid>
			<Container className="themed-container">
				<img src={rogerExplorer} alt="rogerPicture" width="500" height="333" />
				<h1 className="display-3">Roger Cerpa</h1>
				<p className="lead">
					Goal-driven person, determined to accomplish what is set to be
					completed, no matter the obstacles, no matter the challenges. A great
					friend with time, in love with the process. I fail multiple times to
					at the end massively succeed.
				</p>
				<p className="lead">
					"Life is an endless problem-solving journey, decide wisely and enjoy
					the process." RC.
				</p>
			</Container>
		</Jumbotron>
	);
};

export default AboutMe;
