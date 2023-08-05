import { FC } from 'react'

import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import { Label } from './Blank.style'


const Blanc: FC = () => {

	return (
		<div style={{ position: 'relative' }}>
			<Label>
				In Development ...
				<br/>
				go to Book
			</Label>
			<Grid container wrap="wrap" gap={4} justifyContent={'space-between'} paddingY={2}>
				{Array.from(new Array(12)).map((item, index) => (
					<Box key={index} sx={{ width: 200 }}>
						<Skeleton variant="rectangular" width={210} height={118}/>
						<Box sx={{ pt: 0.5 }}>
							<Skeleton/>
							<Skeleton width="60%"/>
							<Skeleton width="80%"/>
							<Skeleton width="20%"/>
						</Box>
					</Box>
				))}
			</Grid>
		</div>
	)
}

export default Blanc
