import React from 'react';
import './App.css';
import NavBar from './components/navbar/index';
import Footer from './components/footer/index';
import AboutMe from './pages/aboutMe';
import Projects from './pages/projects';
import Contact from './pages/contact';
import HomePage from './pages/homePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function App() {
	return (
		<div>
			<NavBar />
			<Router>
				<Container className="themed-container">
					<Row>
						<Col sm="12" md={{ size: 6, offset: 3 }}>
							<Switch>
								<Route exact path={[ '/', '/portfolio' ]}>
									<HomePage />
								</Route>
								<Route exact path={[ '/aboutme' ]}>
									<AboutMe />
								</Route>
								<Route exact path={[ '/projects' ]}>
									<Projects />
								</Route>
								<Route exact path={[ '/contact' ]}>
									<Contact />
								</Route>
							</Switch>
						</Col>
					</Row>
				</Container>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
