import './App.css';
import Login from './Pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import { SwitchesProvider } from './context/switchContext';

function App() {
  return (
    <SwitchesProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
            
          <Route path='/login' element={<Login/>} />
           
        </Routes>
      </BrowserRouter>
    </SwitchesProvider>
  );
}

export default App;
