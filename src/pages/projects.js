import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function MediaCard() {
	return (
		<div>
			<Container>
				<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }}>
						Hello to Rogers best projects
					</Col>
				</Row>
			</Container>
		</div>
	);
}
