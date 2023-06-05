import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage'
import Page404 from './components/pages/Page404';
import Bookpage from './components/pages/Bookpage';
import Collectionpage from './components/pages/Collectionpage';
import SignIn from './SignIn';
import Profilepage from './components/pages/Profilepage';



function App() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <SignIn />
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' exact Component={Homepage} />
          <Route path='/books' exact Component={Bookpage} />
          <Route path='/user-collection' exact Component={Collectionpage} />
          <Route path='/profile' exact Component={Profilepage} />
          <Route path="*" Component={Page404} />
        </Routes>
      </Router>
    </>
      
  );
}

export default App;
