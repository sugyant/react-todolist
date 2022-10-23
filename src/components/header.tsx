import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

export interface IAppProps {
	headerTitle?:string
}

export default function Header (props: IAppProps) {
  return (
	<Box sx={{ my: 4 }} className='App-header'>

		<Typography variant="h4" component="h1" gutterBottom align='center'>
		{props.headerTitle??''}
</Typography>
	  
	</Box>
  );
}
