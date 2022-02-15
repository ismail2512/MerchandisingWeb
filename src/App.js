import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Toolbar } from '@mui/material';
import Footer from './components/Footer';
import Customers from './components/admin_components/Customers';
import Appbar from './components/Appbar';
import AddCustomer from './components/admin_components/AddCustomer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="Add-Customer" element={<AddCustomer />} />
        </Routes>
        {/*  <Login /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
