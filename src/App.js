import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom'
import LoginUser from './pages/StudLogin';
import LoginAdmin from './pages/Adminlogin'
import About from './pages/About';
import Homeadm from './pages/Homeadmin';
import Home from './pages/Home';
import Profile from './pages/Profile';
import StudHall from './pages/StudHall';
import AdminInsertStudents from './pages/AdminInsertStudents';
import AdUpdateStud from './pages/AdUpdateStud';
import HallAllocation from './pages/HallAllocation';
import Allocate from './pages/Allocate'
//import { Hall } from '../../WT_Project_Backend/schema';
import Hall from './pages/Hall'
import AllStud from './pages/AllStud'
import AdProfile from './pages/AdProfile'
import HallTicket from './pages/HallTicket'
import Exam from './pages/Exam'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<LoginUser/>}></Route>
        <Route path='/homeuser' element={<Home/>}></Route>
        <Route path='/homeadmin' element={<Homeadm/>}></Route>
        <Route path='/admin' element={<LoginAdmin/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profilestud' element={<Profile/>}></Route>
        <Route path='/hallstud' element={<StudHall/>}></Route>
        <Route path='/admininsert' element={<AdminInsertStudents/>}></Route>
        <Route path='/adminupdate' element={<AdUpdateStud/>}></Route>
        <Route path='/adprofile' element={<AdProfile/>}></Route>
        <Route path='/hallallocate' element={<HallAllocation/>}></Route>
        <Route path='/allocate' element={<Allocate/>}></Route>
        <Route path='/hall' element={<Hall/>}></Route>
        <Route path='/all' element={<AllStud/>}></Route>
        <Route path='/ticket' element={<HallTicket/>}></Route>
        <Route path='/exam' element={<Exam/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
