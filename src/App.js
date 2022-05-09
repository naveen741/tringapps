import React from 'react';
import './App.css';
import Content from './Components_1/Content';
import Footer from './Components_1/Footer';
import Header from './Components_1/Header';
import Projects from './Components_1/Projects';
import SideBar from './Components_1/SideBar';
function App() {
  return (
    <div className="container">
      <Header/>
      <div className='subContainer'>
        <SideBar/>
        <div className='proActions'>
          <Content/>
          <Projects/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
