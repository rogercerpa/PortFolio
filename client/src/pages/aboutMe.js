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
					This is a modified jumbotron that occupies the entire horizontal space
					of its parent.
				</p>
			</Container>
		</Jumbotron>
	);
};

export default AboutMe;
