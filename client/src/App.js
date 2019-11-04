import React from 'react';
import {Route} from 'react-router-dom';
import Projects from './components/Projects';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={props => {
        return <Projects {...props}/>
      }}/>
      <Route exact path='/api/projects/:id' render={props => {
        return <Project {...props}/>
      }}/>
    </div>
  );
}

export default App;
