import { useState } from 'react'
import  { BrowserRouter, Route, Routes} from "react-router";
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/upload';
import ProtectedRoutes from './components/ProtectedRoutes';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/join" element={<Register />}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/upload" element={<Upload />}/>
        </Route>

      </Routes>
    </>
    
  )
}

export default App
