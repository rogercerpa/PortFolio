import React, {useState} from 'react';
import './Assets/style/style.css';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const ContactMe = (props) => {

	const  [fullName, setFullName ] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [serviceSelect, setServiceSelect] = useState('');
	const [userComment, setUserComment] = useState('');

	const ContactSubmit = async (event) => {

		event.preventDefault();

		const results = {

			fullName: fullName,
			userEmail: userEmail,
			serviceSelect: serviceSelect,
			userComment: userComment,					}

							
		console.log(results)
		
	}


	return (
		<Container>
			<div>
				<h1 className="contactTitle">Reach out, let's talk! </h1>
			</div>
			<Form>
				<FormGroup>
					<Label for="fullName">Name</Label>
					<Input
						type="text"
						name="fullName"
						id="personName"
						placeholder="Your full name"
						onChange={(event) => {
							setFullName(event.target.value)
						}}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="exampleEmail">Email</Label>
					<Input
						type="email"
						name="email"
						id="exampleEmail"
						placeholder="Email"
						onChange={(event) => {
							setUserEmail(event.target.value)
						}}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="exampleSelect">Select</Label>
					<Input type="select" name="select" id="exampleSelect" onChange={(event) => {
							setServiceSelect(event.target.value)
						}}>
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
						onChange={(event) => {
							setUserComment(event.target.value)
						}}
					/>
				</FormGroup>
				<Button onClick={ContactSubmit}>Submit</Button>
			</Form>
		</Container>
	);
};

export default ContactMe;
