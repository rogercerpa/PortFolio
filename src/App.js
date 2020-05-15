import React from 'react';
import './App.css';
import NavBar from './components/navbar/index';
import Footer from './components/footer/index';
import AboutMe from './pages/aboutMe';
import Projects from './pages/projects';
import Contact from './pages/contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<NavBar />

			<Switch>
				<Route exact path={[ '/' ]}>
					<AboutMe />
				</Route>
				<Route exact path={[ '/projects' ]}>
					<Projects />
				</Route>
				<Route exact path={[ '/contact' ]}>
					<Contact />
				</Route>
			</Switch>

			<Footer />
		</Router>
	);
}

export default App;
