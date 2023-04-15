import './App.css';
import Login from './Pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import { SwitchesProvider } from './context/switchContext';
import Esp from './Pages/Esp';
import { useEffect, useState } from 'react';
import { getSwitches } from './api/switches';
import { Navbar } from './Components/Navbar';

function App() {
 const [isOpen, setOpen] = useState(false)
  useEffect(()=>{
    //console.log(getSwitches())
  },[])
  
  return (
    <SwitchesProvider>
      <BrowserRouter>
      <Navbar
          handleAdd={()=>setOpen(!isOpen)}
        />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/esp' element={<Esp/>} />
          <Route path='/login' element={<Login/>} />
           
        </Routes>
      </BrowserRouter>
    </SwitchesProvider>
  );
}

export default App;
