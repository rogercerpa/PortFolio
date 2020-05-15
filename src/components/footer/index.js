import React from 'react';
import './index.css';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import ResumeIcon from '@material-ui/icons/Description';

function StickyFooter() {
	return (
		<div className="footer">
			<Grid container spacing={0}>
				<Grid item xs={12} sm={4}>
					<div>about me</div>
				</Grid>
				<Grid item xs={12} sm={4}>
					<div container>
						<GitHubIcon />
						<LinkedInIcon />
						<InstagramIcon />
						<ResumeIcon />
					</div>
				</Grid>
				<Grid item xs={12} sm={4}>
					<div>contact</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default StickyFooter;
