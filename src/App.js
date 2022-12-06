import './App.css';
import Login from './pages/Login';
import {
  Route,
  Routes, 
} from "react-router-dom";
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   

    <div className="App">
      <Routes>

    <Route  path="/" element={<Login/>} />
    <Route  path="register" element={<Registration/>} />
    <Route  path="dashboard" element={<Dashboard/>} />
 

      </Routes>
      <ToastContainer/>
      
      
    </div>
   
  );
}

export default App;
