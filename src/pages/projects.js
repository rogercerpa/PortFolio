import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Assets/style/style.css';
import liveSearchImage from './Assets/images/liveSearch.png';
import liveLyImage from './Assets/images/liveLy.PNG';

export default function MediaCard() {
	return (
		<div>
			<Container>
				<Row>
					<Col sm={{ size: 'auto', order: 5, offset: 0 }}>
						<h1 className="projectList"> Projects </h1>
					</Col>
				</Row>
				<Row xs="2">
					<Col>
						<a href="https://livesearch-app.herokuapp.com/" target="blank">
							<img
								alt="project1"
								src={liveSearchImage}
								height="300"
								width="500"
							/>
						</a>
					</Col>
					<Col>
						<div>
							<a href="https://livesearch-app.herokuapp.com/" target="blank">
								<h2 className="projectTitle">liveSearch-App</h2>
							</a>
							<p className="projectTitle">
								The perfect app designed to help you find what you're looking
								for in those long 4 hour live presentation videos from the
								Coding Bootcamp
							</p>
							<button>
								<a
									href="https://github.com/rogercerpa/Live-Search-App"
									target="blank"
								>
									GitHub Repository
								</a>
							</button>
						</div>
					</Col>
				</Row>
				<Row xs="2">
					<Col>
						<div>
							<a href="https://lively-project-3.herokuapp.com/" target="blank">
								<h2 className="projectTitle">liveLy-App</h2>{' '}
							</a>
							<p className="projectTitle">
								Live.ly is an interactive web application where artists,
								influencers, and public figure are able to promote their daily
								live stream events. At the same time, fans will be able to track
								their favorite artists live shows and have the latest scheduled
								live events in one single platform.
							</p>
							<button>
								<a href="https://github.com/armandojhc/live.ly" target="blank">
									GitHub Repository
								</a>
							</button>
						</div>
					</Col>
					<Col>
						<a href="https://lively-project-3.herokuapp.com/" target="blank">
							<img alt="project1" src={liveLyImage} height="300" width="500" />
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
