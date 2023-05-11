import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import HomePage from './components/HomePage';
import Students from './components/Students';
import Mentor from './components/Mentor';
import ContactCard from './components/ContactCard';
// import Sidebar from './components/SideBar';
// import "tailwindcss/dist/tailwind.min.css";

ReactDOM.render(
  <React.StrictMode>
  <div >
  {/* <h1 className="text-black text-5xl mb-16 text-center font-bold mt-16" style={{fontFamily: "Roboto"}}>Welcome to PICT SIS</h1>
  <HomePage /> */}
  {/* <Students/> */}
  <Mentor/>
   
  </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);
