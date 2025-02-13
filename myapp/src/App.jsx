import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Assessments from './pages/Assessments';
import Blog from './pages/Blog';
import Calender from './pages/Calender';
import Classroom from './pages/Classroom';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import PageNotFound from './pages/PageNotFound';
import Store from './pages/Store';
import MyAccount from './pages/MyAccount';
import Profile from './pages/Profile';
import MySettings from './pages/MySettings';
const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/classroom' element={<Classroom/>}/>
            <Route path='/assessment' element={<Assessments/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/calender' element={<Calender/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/profile' element={<Profile/>}>
                    <Route path='/profile/myaccount' element={<MyAccount/>}/>
                    <Route path='/profile/mysettings' element={<MySettings/>}/>
            </Route>
            
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App