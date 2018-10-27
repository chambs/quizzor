import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import StateManager from './StateManager';
import './App.css';
import Home from './home/Home';
import CreateQuizz from './create_quizz/CreateQuizz';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rucula: 'nove',
      quizzName: '',
      quizzDescription: '',
      questions: []
    };

    this.stateMgr = new StateManager(this);
  }

  render() {
    return ( 
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Home stateMgr={this.stateMgr}/>}></Route>
          <Route path="/create_quizz" render={props => <CreateQuizz stateMgr={this.stateMgr}/>}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
