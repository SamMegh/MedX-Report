import './App.css';
import FrontPage from './screen/frontpage.jsx';
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore.js';
import HomePage from './screen/home.jsx';
import Login from './screen/login.jsx';
import SignUp from './screen/signup.jsx';
import ReportPage from './screen/reports.jsx';
import LabProfile from './screen/profile.jsx';
function App() {
const {isAuthUser}=useAuthStore();
console.log(isAuthUser)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={!isAuthUser?<FrontPage/>:<Navigate to="/home"/>}/>
      <Route path='/login' element={!isAuthUser?<Login/>:<Navigate to="/home"/>}/>
      <Route path='/signup' element={!isAuthUser?<SignUp/>:<Navigate to="/home"/>}/>
      <Route path='/home' element={isAuthUser?<HomePage/>:<Navigate to="/"/>}/>
      <Route path='/report' element={isAuthUser?<ReportPage/>:<Navigate to="/"/>}/>
      <Route path='/profile' element={isAuthUser?<LabProfile/>:<Navigate to="/"/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
