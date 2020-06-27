import React from 'react';
import './App.css';
import NavBar from './components/navbar/index';
// import NavBar2 from './components/navbar2/index';
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
			{/* <NavBar2 /> */}
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
			{/* <NavBar2 /> */}
		</div>
	);
}

export default App;
