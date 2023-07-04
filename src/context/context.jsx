import React, { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const AppContext = createContext();
function AppContextProvider({ children }) {
   const currentDate = new Date().toISOString().split('T')[0];
  const [formTodoData, setFormDataTodo] = useState(
    {
      firstName: '',
      lastName: '',
      ProjectCode: '',
      Desc:'',
      Date:currentDate,
      Todocolor:''
    }
  );
  const [numlistTodo,SetNumlistTodo]  = useState(0)
  const [listTodo,setListTodo] = useState([])
  const [color,setColor] = useState('')

  const addList = async() =>{
    setListTodo((oldState)=>[...oldState,formTodoData])
   
  }

  const [open, setOpen] = React.useState(false);
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
 
    SetNumlistTodo(listTodo.length);
   await addList();
    console.log(listTodo);
    handleClose();

  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormDataTodo({ ...formTodoData, [e.target.name]: e.target.value });
  };

  const [errorEmail,setErrorEmail] = useState(false)
  const [errorPassword,setErrorPassword] = useState(false)
  return (
    <AppContext.Provider 
    value={{
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
      errorEmail,setErrorEmail,
      errorPassword,setErrorPassword,
      color,setColor,
    }}
    >
{ children }
    </AppContext.Provider>
  )
}

export default AppContextProvider

export const useApp = () => useContext(AppContext);
