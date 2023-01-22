import './App.css';
import { Routes, Route} from "react-router-dom";
import Createaccount from './components/Welcome/Createaccount';
import JobCanvas from './components/Dashboard/JobCanvas';
import Home from './components/Welcome/Home';
import Login from './components/Welcome/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Createaccount />} path="/createaccount" />
      <Route element={<Profile />} path="/profile" />



    </Routes>
    
      {/* <JobCanvas /> */}
    </div>
  );
}

export default App;
