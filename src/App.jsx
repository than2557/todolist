import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Todolist from './page/todolist';
import LogInPage from './page/login';
import PageNotfound from './page/PageNotfound';
function App() {


  return (
    <div  className="App" >
         <Routes>
      <Route path="/applist" element={<Todolist />} />
      <Route path="/" element={<LogInPage/>} />
      <Route path="*" element={<PageNotfound />} />
    </Routes>
    </div>
  )
}

export default App
