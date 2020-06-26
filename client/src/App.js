import React from 'react';
import './App.css';
import NavBar from './components/navbar/index';
import Footer from './components/footer/index';
import AboutMe from './pages/aboutMe';
import Projects from './pages/projects';
import Contact from './pages/contact';
import HomePage from './pages/homePage';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function App() {
	return (
		<div>
			<NavBar />
			<Container>
				<Row>
					<Col>
						<Switch>
							<Route exact path={[ '/', '/portfolio' ]} component={HomePage} />

							<Route path="/aboutme" component={AboutMe} />

							<Route path="/projects" component={Projects} />

							<Route path="/contact" component={Contact} />
						</Switch>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
