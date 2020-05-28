import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const AboutMe = () => {
	return (
		<Jumbotron fluid>
			<Container className="themed-container">
				<img src="../../Assets/images/IMG_3602.jpg" alt="rogerPicture" />
				<h1 className="display-3">Fluid jumbotron</h1>
				<p className="lead">
					This is a modified jumbotron that occupies the entire horizontal space
					of its parent.
				</p>
			</Container>
		</Jumbotron>
	);
};

export default AboutMe;
