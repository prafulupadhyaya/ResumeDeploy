import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import ContactPage from './components/ContactPage';
import Hobby from './components/Hobby'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Skills from './components/Skills'
import {BrowserRouter,Link,Route } from 'react-router-dom';

import Routing from './components/Routing';
function App() {
  return (
    <>
      
      
      <Header></Header>
      <Routing></Routing>
     
    </>
  );
}

export default App;
