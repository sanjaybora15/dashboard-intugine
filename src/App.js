import React from 'react';
import './App.css';
import Navbar from  './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Index'

class App extends React.Component{
  render(){
        return (
          <BrowserRouter>
            <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            </div>
          </BrowserRouter>
      );
  } 
}

export default App;
