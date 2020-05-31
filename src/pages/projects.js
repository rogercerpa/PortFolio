import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Assets/style/projects.css';

export default function MediaCard() {
	return (
		<div>
			<Container>
				<Row>
					<Col sm={{ size: 6, order: 2, offset: 1 }}>
						<h1 className="projectList"> Projects </h1>
					</Col>
				</Row>
				<Row xs="2">
					<Col>
						<img
							alt="project1"
							src="./Assets/images/liveSearch-demo-image.png"
							height="200"
							width="200"
						/>
					</Col>
					<Col>
						<div>
							<h2 className="projectTitle">liveSearch-App</h2>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
