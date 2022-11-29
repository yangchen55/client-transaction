import './App.css';
import Login from './pages/Login';
import {
  Route,
  Routes, 
} from "react-router-dom";
import Registration from './pages/Registration';

function App() {
  return (
   

    <div className="App">
      <Routes>

    <Route  path="/" element={<Login/>} />
    <Route  path="register" element={<Registration/>} />
 

      </Routes>
      
      
    </div>
   
  );
}

export default App;
