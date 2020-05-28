import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const HomePage = () => {
	return (
		<Jumbotron fluid>
			<Container fluid>
				<h1 className="display-3">Roger Cerpa Coding Life</h1>
				<p className="lead">Find out more...</p>
			</Container>
		</Jumbotron>
	);
};

export default HomePage;
