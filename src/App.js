import {useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);

  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen)
        setIsOpen(false);
      console.log('i resized')
     
    }

    window.addEventListener('resize', hideMenu);
    
    return () => { 
      window.removeEventListener('resize', hideMenu);
    }

  })
    
  return (
   <>
   
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={ toggle}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/about" component={About} />

      </Switch>
    
      <Footer/>
   
   
   
      </>
 
  );
}

export default App;
