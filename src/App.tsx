import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Button from './components/Button';
import PictureScroller from './components/Picturescroller';

function App() {
  return (
    <div className="App">
      Hello World
      <Greet name='Piyush Agrawal' age={24} nationality='Indian'/>
       <Button/>
       <p>
         This is a simple React app that demonstrates the use of components.
         It includes a greeting component, a button that can be clicked, and a picture scroller that displays images of sculptures.
       </p>
       
       <PictureScroller />
    </div>
  );
}



export default App;
