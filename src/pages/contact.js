import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const ContactMe = (props) => {
	return (
		<Container>
			<Form>
				<FormGroup>
					<Label for="fullName">Name</Label>
					<Input
						type="text"
						name="fullName"
						id="personName"
						placeholder="Your full name"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="exampleEmail">Email</Label>
					<Input
						type="email"
						name="email"
						id="exampleEmail"
						placeholder="Email"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="exampleSelect">Select</Label>
					<Input type="select" name="select" id="exampleSelect">
						<option>Web Development</option>
						<option>Video Editing</option>
						<option>Photo Editing</option>
						<option>Software Development</option>
						<option>Website design</option>
						<option>Other...</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="exampleText">Text Area</Label>
					<Input
						type="textarea"
						name="text"
						id="exampleText"
						placeholder="How can I serve you?"
					/>
				</FormGroup>
				<Button>Submit</Button>
			</Form>
		</Container>
	);
};

export default ContactMe;
