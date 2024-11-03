import Login from './pages/Login';
import './App.css';
import SignUp from './pages/SignUp';
import { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Dashboard from './pages/Dashboard';
import AddCar from './pages/AddCar';


function App() {

  const [login,setLogin] = useState(true);

  return (
    <div >
        <Navbar login={login} setLogin={setLogin}/>
        {/* <Login/> */}
        <Routes>
          {
            login?(<Route path='/' element={<Login login={login} setLogin={setLogin}/>}/>)
                :(<Route path='/' element={<SignUp login={login} setLogin={setLogin}/>}/>)
          }
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/addCar' element={<AddCar/>} />
        </Routes>
    </div>
  );
}

export default App;
