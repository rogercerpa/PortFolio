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
						<HomeIcon />
					</div>
				</Grid>
				<Grid item xs={12} sm={4} />
				<Grid item xs={12} sm={4}>
					<div>projects</div>
				</Grid>
			</Grid>
		</div>
	);
}
