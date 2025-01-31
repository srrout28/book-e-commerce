import React from 'react';
import { Route, Routes } from 'react-router-dom';
//--react toastify--
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//--components--
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
//--pages--
import List from './pages/List/List';
import Add from './pages/Add/Add';
import Orders from './pages/Orders/Orders';
import UsersList from './pages/UsersList/UsersList';

const App = () => {

  const url = "http://localhost:8789"|| "http://localhost:4892"; //--server URL for APIs--


  return (
    <>
      <div>
        <ToastContainer />
        <Navbar />
        <hr />
        <div className="app-content">
          <div className='flex-left'><Sidebar /></div>
          <div className='flex-right'>
            <Routes>
              <Route path="/" element={<Orders url={url} />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/add" element={<Add url={url} />} />
              <Route path="/users" element={<UsersList url={url} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
};

export default App;