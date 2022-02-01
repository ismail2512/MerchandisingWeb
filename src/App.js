import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import { Toolbar } from '@mui/material';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/Home" element={<Home />} />
        </Routes>
        {/*  <Login /> */}
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
