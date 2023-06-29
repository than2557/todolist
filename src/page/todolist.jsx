import React,{useState,useEffect} from 'react'
import AppBarTodo from '../components/AppBarTodo'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import {useApp} from '../context/context';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Like from '../components/Like';
import Color from '../components/Color';




function Todolist(){


  const {   
    formTodoData,
    setFormDataTodo,
    open,
    setOpen,
    handleClickOpen,
    handleClose,
    handleChange,
    handleSubmit,
    listTodo,
    setListTodo,
    numlistTodo,
    SetNumlistTodo,
  color,setColor} = useApp()
  
  const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: formTodoData.Todocolor  ?  color : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'left',
      color: formTodoData.Todocolor ? '#fff' : theme.palette.text.secondary,
      height : 150
    }));

useEffect(()=>{

},[numlistTodo])


  return (
    <>
    <AppBarTodo />
<br />
<br />
<br />
<br />
<br />

<div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>To Do</DialogTitle>
        <form className="modal-form" onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
           what did you do to day ?
           
          </DialogContentText>
          <Grid container justifyContent="flex-start">
              <Color />
            </Grid>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            name="firstName"
            label="ชื่อ"
            onChange={handleChange}
            type="text"
            fullWidth
            variant="standard"
            required
          />

          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            name="lastName"
            label="นามสกุล"
            onChange={handleChange}
            type="text"
            fullWidth
            variant="standard"
            required
          />

        <TextField
            autoFocus
            margin="dense"
            id="ProjectCode"
            name="ProjectCode"
            label="ProjectCode"
            onChange={handleChange}
            type="text"
            fullWidth
            variant="standard"
            required
          />

        <TextareaAutosize
            autoFocus
            margin="dense"
            placeholder="ลายละเอียด"
            id="Desc"
            name="Desc"
            onChange={handleChange}
            type="text"
            style={{ width: '100%' }}
            variant="standard"
            minRows={3}
            required
          />
    <br />   

          <TextField
            autoFocus
            margin="dense"
            id="Date"
            name="Date"
            value={formTodoData.Date}
            onChange={handleChange}
            type="Date"
            fullWidth
            variant="standard"
            disabled
          />

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >SUBMIT</Button>
        </DialogActions>

        </form>
       
      
      </Dialog>
    </div>
    <div>
      <Grid container  spacing={2} columns={12}>
        <Grid item md={6} sx={{textAlign:'left'}}>
        <Typography variant="h5" component="h2" color="primary">
      to DO list
      </Typography>
        </Grid>
     
        <Grid item sx={{textAlign:'right'}} md={6}>
        <IconButton aria-label="delete" size="large" onClick={handleClickOpen}>
  <AddCircleOutlineIcon fontSize="inherit"  color="primary"  />
</IconButton>
        </Grid>
      </Grid>
    </div>

    <Box sx={{ flexGrow: 1,mt:25,display: 'inline' }}>
     

<Box  sx={{ m: 1, minWidth: 250,display: 'inline'}}>

</Box>
      <Divider />
      <br />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {listTodo.map((data, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} >
            <Item>
              {`Name : ${data?.firstName}`}
              <br />
              {`lastName : ${data?.lastName}`}
              <br />
              {`ProjectCode : ${data?.ProjectCode}`}
              <br />
              {`Desc : ${data?.Desc}`}
              <br />
              {`Date : ${data?.Date}`}
              <br />
              
              <Grid container justifyContent="flex-end">
              <Like />
            </Grid>
              
             
        
            </Item>
          
          </Grid>
        ))}
      </Grid>
    </Box>
 

    </>


    
  )
}

export default Todolist