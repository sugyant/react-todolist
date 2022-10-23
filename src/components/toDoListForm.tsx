import { CenterFocusStrongOutlined } from '@mui/icons-material';
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import ToDoListItems from './toDoListItems';

export interface IAppProps {
}

export default function ToDoListForm (props: IAppProps) {

  const [input, setInput] = React.useState<string>('')
  const [itemList, setItemList] = React.useState<string[]>([])

  const submitHandler = () => {
	console.log(input)

	setItemList([...itemList, input])
	setInput('')

  }

  const removeItem = (idx: number) => {
	console.log(idx)
	const listItmCopy = [...itemList]
	listItmCopy.splice(idx,1)
	setItemList(listItmCopy)
  }

  return (
	
	<>
	
		<form >
			<Grid className='main' container display='flex' alignContent={'center'}>
		<Grid item xs={6} className='addTextField'>
			<TextField value={input} onChange={(e) => {
				setInput(e.target.value)
			}}
			fullWidth 
			/>
			</Grid>
			<Grid item xs={6} className='addTextButton'>
			<Button onClick={submitHandler} 
			sx={{ color: '#A49313', backgroundColor: '#313975', borderColor: '#1A2471' }} >Add To Do Item</Button>
			</Grid>
			</Grid>
			</form>
			<Divider light />
			
			<Grid className='main' container display='flex' alignContent={'center'}>
			
		
		<Grid item xs={9}>
		<ToDoListItems items={itemList} handleRemove={removeItem}/>
		</Grid>
	
	</Grid>
	</>
  );
}
