// import react
import React from 'react';
// import components
import About from './components/About';
import Nav from './components/Nav';
// import css
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
