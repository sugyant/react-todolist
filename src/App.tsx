import { Divider, Grid } from '@mui/material';
import './App.css';
import Header from './components/header';
import ToDoListForm from './components/toDoListForm';

function App() {
  return (
    <>
      <Grid className='App'>
      <Header headerTitle='TO DO LIST' />
      <Divider light />
      <ToDoListForm/>
      </Grid>
    </>
  )
}

export default App;
