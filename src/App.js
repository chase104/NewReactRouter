import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { useState } from 'react';
import { Outlet } from "react-router-dom";


function App() {
  let [state, setState] = useState(false)
  return (
    <div className="App" onClick={() => setState(true)}>
        {/* <Navbar which="ONE"/>
        {state ? <Navbar which="TWO"/> : null} */}
        <div id="detail">
        
        <Outlet />
        </div>
       
    </div>
  );
}

export default App;
