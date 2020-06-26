import React from 'react';
import Grid from '@material-ui/core/Grid';
import './index.css';
import HomeIcon from '@material-ui/icons/Home';

export default function FullWidthGrid() {
	return (
		<div className="header">
			<Grid container spacing={0}>
				<Grid item xs={12} sm={4}>
					<div container>
						<a href="/" color="inherit">
							<HomeIcon />
						</a>
					</div>
				</Grid>
				<Grid item xs={12} sm={4} />
				<Grid item xs={12} sm={4}>
					<div>
						<a href="/projects" color="inherit">
							projects
						</a>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
