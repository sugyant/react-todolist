import { Button, Card, Checkbox, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

export interface IAppProps {
	items? :string[]
	handleRemove: (indx: number)=> void
}

export default function ToDoListItems (props: IAppProps) {
  
	
  return ( <>
  { !!props.items  && (
	<Card sx={{ minHeight: '400px', bgcolor: '#C1BA99' }}>
    <List dense sx={{ width: '100%', bgcolor: '#C1BA85' }}>
      {props?.items?.map((value,index) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
		
        return ( 
          <ListItem 
            key={value}
          >
            <ListItemButton className='itemButton' sx={{ alignItems:'left' , display:'flex' }}>
              <ListItemText id={labelId} primary={value} />
			        <Button onClick={()=> {props.handleRemove(index)}} 
              sx={{ color: '#725200', backgroundColor: '#817990', borderColor: '#472B7B' }}
              > MARK AS DONE</Button>
			  
            </ListItemButton>
			
          </ListItem>
        );
      })}
    </List>
    </Card>
  )}
</>
  );
}
