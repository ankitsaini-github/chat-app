import './App.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { AuthContext } from './context/AuthContext'
import Hero from './pages/Hero'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useContext } from 'react'

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Hero/>}/>
          <Route index path='home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route index path='login' element={<Login/>}/>
          <Route index path='register' element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
