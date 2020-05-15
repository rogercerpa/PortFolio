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
					<div container>
						<a href="/aboutme">about me</a>
					</div>
				</Grid>
				<Grid item xs={12} sm={4}>
					<div container>
						<a href="https://github.com/rogercerpa" target="black">
							<GitHubIcon />
						</a>
						<a href="https://www.linkedin.com/in/roger-cerpa/" target="black">
							<LinkedInIcon />
						</a>
						<a href="https://www.instagram.com/roger.cerpa/" target="black">
							<InstagramIcon />
						</a>
						{/* <a href="" target="black">
							<ResumeIcon />
						</a> */}
					</div>
				</Grid>
				<Grid item xs={12} sm={4}>
					<div container>
						<a href="/contact">contact</a>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default StickyFooter;
